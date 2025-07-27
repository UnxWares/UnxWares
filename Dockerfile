# Utiliser Node.js LTS 22 comme image de base
FROM node:22-alpine AS base

# Installer pnpm
RUN npm install -g pnpm

# Étape de construction
FROM base AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration des dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Copier le code source
COPY . .

# Construire l'application
RUN pnpm run build

# Étape de production
FROM base AS runtime

WORKDIR /app

# Copier package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Installer uniquement les dépendances de production
RUN pnpm install --prod --frozen-lockfile

# Copier les fichiers construits depuis l'étape de build
COPY --from=build /app/build build/
COPY --from=build /app/package.json .

# Exposer le port
EXPOSE 3000

# Variables d'environnement
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Démarrer l'application
CMD ["node", "build"]