# -------------------------
# Image de base Node.js LTS 22
# -------------------------
FROM node:22-alpine AS base

# Installer pnpm globalement
RUN npm install -g pnpm

# -------------------------
# Étape de build
# -------------------------
FROM base AS build

WORKDIR /app

# Copier les fichiers de configuration des dépendances
COPY package.json pnpm-lock.yaml* ./

# Définir l'ARG pour le token GitHub Packages
ARG GH_ORG_PACKAGES

# Authentification temporaire pour pnpm
RUN echo "//npm.pkg.github.com/:_authToken=${GH_ORG_PACKAGES}" > ~/.npmrc

# Installer toutes les dépendances
RUN pnpm install --frozen-lockfile

# Supprimer le token pour sécuriser l'image
RUN rm ~/.npmrc

# Copier le code source
COPY . .

# Construire l'application
RUN pnpm run build

# -------------------------
# Étape runtime
# -------------------------
FROM base AS runtime

WORKDIR /app

# Copier package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Définir l'ARG pour le token GitHub Packages
ARG GH_ORG_PACKAGES

# Authentification temporaire pour pnpm pour les dépendances de production
RUN echo "//npm.pkg.github.com/:_authToken=${GH_ORG_PACKAGES}" > ~/.npmrc \
    && pnpm install --prod --frozen-lockfile \
    && rm ~/.npmrc

# Copier les fichiers construits depuis l'étape build
COPY --from=build /app/build ./build

# Exposer le port
EXPOSE 3000

# Variables d'environnement
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Démarrer l'application
CMD ["node", "build"]
