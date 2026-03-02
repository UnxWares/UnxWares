# Stage 1: Build stage
FROM node:22 AS builder
ARG NPM_USERNAME
ARG NPM_PASSWORD

RUN echo "precedence ::ffff:0:0/96  100" >> /etc/gai.conf
ENV NODE_OPTIONS="--dns-result-order=ipv4first"

WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml .npmrc ./

RUN if [ -n "$NPM_USERNAME" ] && [ -n "$NPM_PASSWORD" ]; then \
    AUTH=$(node -e "console.log(Buffer.from('$NPM_USERNAME:$NPM_PASSWORD').toString('base64'))"); \
    echo "//lib.external.infra.unxwares.com/api/npm/unxwares/ui-js/:_auth=${AUTH}" >> .npmrc; \
    echo "//lib.external.infra.unxwares.com/api/npm/unxwares/ui-js/:always-auth=true" >> .npmrc; \
    echo "//lib.external.infra.unxwares.com/api/npm/unxwares/ui-js/:email=ci@unxwares.com" >> .npmrc; \
    fi

RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Stage 2: Runtime stage
FROM node:22-slim AS runtime
RUN echo "precedence ::ffff:0:0/96  100" >> /etc/gai.conf
ENV NODE_OPTIONS="--dns-result-order=ipv4first"

WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["node", "build"]
