# Stage 1: Build stage
FROM node:22 AS builder
ARG NPM_USERNAME
ARG NPM_PASSWORD

# Force IPv4 priority at the system level for the resolver
RUN echo "precedence ::ffff:0:0/96  100" >> /etc/gai.conf

# Force IPv4 priority for Node.js
ENV NODE_OPTIONS="--dns-result-order=ipv4first"

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and .npmrc
COPY package.json pnpm-lock.yaml .npmrc ./

# Authenticate for private packages (Repoflow)
RUN if [ -n "$NPM_USERNAME" ] && [ -n "$NPM_PASSWORD" ]; then \
    AUTH=$(node -e "console.log(Buffer.from('$NPM_USERNAME:$NPM_PASSWORD').toString('base64'))"); \
    echo "//lib.external.infra.unxwares.com/api/npm/unxwares/ui-js/:_auth=${AUTH}" >> .npmrc; \
    echo "//lib.external.infra.unxwares.com/api/npm/unxwares/ui-js/:always-auth=true" >> .npmrc; \
    echo "//lib.external.infra.unxwares.com/api/npm/unxwares/ui-js/:email=ci@unxwares.com" >> .npmrc; \
    fi

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Runtime stage
FROM node:22-slim AS runtime

# Force IPv4 priority
RUN echo "precedence ::ffff:0:0/96  100" >> /etc/gai.conf
ENV NODE_OPTIONS="--dns-result-order=ipv4first"

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Start the application
CMD ["node", "build"]
