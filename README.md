# gallego.top

`gallego.top` is a multilingual editorial landing page for discovering browser-based teaching tools and related education projects. The site keeps the catalogue file-driven, preserves strong SEO defaults, and now uses a warmer visual system with custom SVG illustrations integrated into the interface.

## Stack

- `React 19`
- `Vite`
- `framer-motion`
- `react-helmet-async`
- `lucide-react`
- `@fontsource/sora`
- `@fontsource/newsreader`

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Content Model

- `.webs`: source of internal apps. One slug per line, with optional `*` to mark work in progress.
- `.external`: source of external education sites in the format `url | project | author | focus`.
- `src/data/meta/`: multilingual metadata for known internal slugs.
- `src/content/locales/`: UI copy and SEO content for `es`, `gl`, `ca`, `eu`, `en`, `fr`, and `de`.
- `src/content/projectFocusContent.js`: search, catalogue, and narrative copy by locale.

## Main Files

- `src/App.jsx`: page composition, locale state, filtering, and section orchestration.
- `src/components/Seo.jsx`: canonical, hreflang, Open Graph, Twitter tags, and JSON-LD.
- `src/components/LanguageSwitcher.jsx`: accessible locale switcher.
- `src/components/InternalProjectCard.jsx`: internal catalogue card component.
- `src/components/ExternalProjectCard.jsx`: related project card component.
- `src/assets/`: local SVG illustrations used by the landing page.

## Active Languages

- `es`
- `gl`
- `ca`
- `eu`
- `en`
- `fr`
- `de`

The selected locale is stored in `localStorage` and mirrored in `?lang=<locale>`.

## SEO

The landing includes:

- localized metadata per language
- canonical and hreflang links
- Open Graph and Twitter Cards
- JSON-LD structured data
- `public/robots.txt`
- `public/sitemap.xml`
- `public/og-cover.svg`

## Build Output

The project builds to `dist/` and is intended for static hosting.
