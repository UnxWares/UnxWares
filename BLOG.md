# 📝 Blog UnxWares - Runtime Markdown Reader

## 🎯 Concept

Blog simple qui lit les articles Markdown depuis un repo GitHub **en temps réel** et les traduit **à la volée**.

**Pas de build, pas de cache fichier, juste : fetch → traduit → affiche**

## 🚀 Comment ça marche

```
1. Tu push un article .md sur ton repo GitHub
2. Client visite /blog
3. Serveur fetch depuis GitHub
4. Traduit automatiquement si langue != français
5. Client voit l'article (cache mémoire 10min pour la traduction)
```

## ⚙️ Configuration

### 1. Crée ton repo GitHub d'articles

```bash
# Exemple: unxwares/blog-articles
# Avec des fichiers .md à la racine
```

### 2. Configure le `.env`

```bash
cp .env.example .env
```

Puis édite :
```bash
GITHUB_BLOG_REPO=unxwares/blog-articles
GITHUB_BRANCH=main
```

### 3. Format des articles

```markdown
---
title: "Mon article"
date: "2024-02-20"
author: "Ton nom"
authorEmail: "email@example.com"
category: "Development"
tags: ["rust", "cloud"]
description: "Description SEO"
excerpt: "Aperçu de l'article"
image: "/images/article.jpg"
featured: false
draft: false
---

# Contenu

Ton article en Markdown...
```

## 🌍 Traduction automatique

- Articles en **français** par défaut
- Traduction automatique vers : EN, DE, NL, ES, IT
- Via LibreTranslate (gratuit, open-source)
- Cache mémoire 10 minutes pour éviter les retraductions

## 📦 Architecture

```
Request → +page.server.ts
  ↓
github-reader.ts (fetch MD depuis GitHub)
  ↓
runtime-translator.ts (traduit si locale != fr)
  ↓
Response (HTML)
```

**Tout est côté serveur, rien n'est pré-généré**

## 🔗 Routes

- `/blog` - Liste des articles
- `/blog/[slug]` - Article individuel
- `/blog/category/[category]` - Par catégorie
- `/blog/rss.xml?lang=fr` - Flux RSS
- `/blog/atom.xml?lang=en` - Flux Atom

## 💾 Cache

- **Traductions** : 10 min en mémoire (Map)
- **Pas de cache fichier**, tout runtime
- Redémarre le serveur pour purger le cache

## ⚡ Performance

- Première visite : fetch GitHub + traduit (~2-5s)
- Visites suivantes : cache (~100ms)
- GitHub API rate limit : 60 req/h sans token, 5000 avec token

## 🎨 Personnalisation

Tous les composants dans `src/lib/components/blog/` :
- `BlogCard.svelte`
- `BlogHeader.svelte`
- `BlogContent.svelte`
- etc.

Style déjà aligné avec le design UnxWares.

## 🐛 Debug

```bash
# Si aucun article s'affiche
1. Vérifie GITHUB_BLOG_REPO dans .env
2. Vérifie que le repo existe et est accessible
3. Check les logs serveur pour erreurs API
4. Teste l'URL raw GitHub manuellement
```

## 🔄 Workflow

```bash
# Pas de scripts, tout automatique !
pnpm run dev    # Démarre, articles chargés à la volée
pnpm run build  # Build normal, pas de prebuild
```

**C'est tout !** Push un .md → Refresh la page → Article visible 🎉
