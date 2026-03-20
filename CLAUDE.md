# CLAUDE.md

## Project summary

This repository powers the public landing page for `gallego.top`. It is a static `React + Vite` site with:

- multilingual UI and SEO
- internal app discovery driven by `.webs`
- related external sites driven by `.external`
- a deliberate editorial/visual layer rather than a generic template

## Critical files

- `src/App.jsx`: page composition and section layout
- `src/content/`: localized UI copy and SEO metadata
- `src/data/catalog.js`: parsing of `.webs` / `.external` and internal app metadata
- `src/components/Seo.jsx`: metadata, canonical, alternate links, structured data
- `public/sitemap.xml`, `public/robots.txt`, `public/og-cover.svg`

## Editing rules

1. Preserve all supported locales: `es`, `gl`, `ca`, `eu`, `en`, `fr`, `de`.
2. If a new locale is added, update content, SEO links and sitemap.
3. Keep the site static-friendly. Do not introduce server requirements unless explicitly requested.
4. `.webs` lines are internal slugs and may end with `*` to mark work in progress.
5. `.external` lines follow `url | title | author | focus`. Only `url` is required.
6. Empty `.external` must remain a valid case in the UI.

## Quality bar

- Avoid generic SaaS-looking layouts.
- Prefer deliberate typography, layered backgrounds and meaningful motion.
- Keep performance acceptable for static hosting.
- Run `npm run build` after changes.
