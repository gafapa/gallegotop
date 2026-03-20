# Architecture

## Overview

The application is a static `React + Vite` landing page. It does not depend on a backend or runtime API. All catalogue content is derived at build time from flat files and in-repo metadata.

## Runtime Flow

1. `src/main.jsx` mounts `App` inside `HelmetProvider`.
2. `src/App.jsx` resolves the initial locale from `?lang`, `localStorage`, browser languages, and finally `es`.
3. `src/data/catalog.js` parses `.webs` and `.external`, then enriches internal slugs with metadata from `src/data/meta/`.
4. Locale-specific copy is loaded from `src/content/locales/` and `src/content/projectFocusContent.js`.
5. `src/components/Seo.jsx` emits localized SEO metadata and structured data.

## UI Structure

- `Header`: brand, anchor navigation, language switcher, email CTA.
- `Hero`: app-first entry point, category shortcuts, metrics, featured tools, and SVG illustration.
- `Catalogue`: search, category filters, grouped internal tools, and empty state handling.
- `Support strip`: compact secondary context for operating model and SEO readiness.
- `Community`: related external projects sourced from `.external`.
- `Contact`: compact project context and contribution invitation.

## Data Sources

### Internal Apps

- Source file: `.webs`
- Parser: `parseInternalCatalog` in `src/utils/catalog.js`
- Enrichment: `src/data/meta/*.js`
- Output shape:
  - `slug`
  - `href`
  - `progress`
  - `category`
  - `tag`
  - `title`
  - `desc`

### External Projects

- Source file: `.external`
- Parser: `parseExternalCatalog` in `src/utils/catalog.js`
- Format: `url | project | author | focus`

## Internationalization

Supported locales:

- `es`
- `gl`
- `ca`
- `eu`
- `en`
- `fr`
- `de`

Adding a new locale requires updating:

- `src/content/locales/`
- `src/content/siteContent.js`
- `src/content/projectFocusContent.js`
- `public/sitemap.xml`
- `src/components/Seo.jsx`

## Design System

The current visual system is defined in `src/styles.css` and follows these principles:

- blue institutional palette closer to public education interfaces
- serif display type paired with a clean sans-serif UI font
- card-based hierarchy with reusable spacing and radius tokens
- first-screen emphasis on apps, categories, and direct access
- decorative but local SVG artwork stored in `src/assets/`

## SEO and Discovery

The site keeps:

- localized titles and descriptions
- canonical links
- hreflang entries
- Open Graph and Twitter Cards
- JSON-LD for `WebSite`, `WebPage`, `Organization`, and `ItemList`
- static discovery files in `public/`
