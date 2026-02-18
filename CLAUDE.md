# CLAUDE.md

## Project Overview

`kt-docs` is a static documentation/wiki site built with **Astro 5**, deployed to GitHub Pages at `https://jehanrey.github.io/kt-docs`.

## Tech Stack

- **Framework:** Astro 5 (static site generator)
- **UI:** Preact (lightweight React alternative)
- **Styling:** Tailwind CSS 3
- **Content:** Astro Content Collections with MDX support
- **Language:** TypeScript (strict)
- **Package manager:** pnpm

## Project Structure

```
src/
  components/     # Reusable UI components
  helpers/        # Utility functions
  layouts/        # Page layouts (base.astro, wiki.astro)
  lib/            # Markdown utilities (remark plugins)
  pages/          # Astro routes (index, wiki)
  styles/         # global.css
  types/          # TypeScript type definitions
  wiki/           # Wiki content (MDX/MD) and constants
  content.config.ts  # Astro content collection schema
```

## Common Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `pnpm dev`        | Start dev server at `localhost:4321`          |
| `pnpm build`      | Type-check (`astro check`) + production build |
| `pnpm preview`    | Preview production build locally              |
| `pnpm lint`       | ESLint on `src/`                              |

## Content Collections

Wiki articles live in `src/wiki/authentication/` and are loaded via Astro's glob loader. Each article requires frontmatter:

```yaml
---
title: string
description: string
category: (enum — see src/wiki/authentication/constants.ts)
order: number
---
```

## Code Conventions

- **Imports:** builtin → external → internal → sibling/parent (enforced by ESLint)
- **Type imports:** `import type` syntax required for type-only imports
- **Path alias:** `@/*` → `src/*`
- **Formatting:** Prettier with Tailwind class sorting (run automatically)
- **Markdown features:** reading time and git-based modified time injected via custom remark plugins in `src/lib/markdown/`

## Deployment

GitHub Pages via `.github/` workflows. Base path is `/kt-docs` (configured in `astro.config.mjs`).
