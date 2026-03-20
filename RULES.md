# Rules

## Product Rules

- Keep the project as a static `React + Vite` site.
- Preserve support for `es`, `gl`, `ca`, `eu`, `en`, `fr`, and `de`.
- Keep the experience editorial, lightweight, and clearly oriented to teaching workflows.
- Do not turn the landing into a generic dashboard.

## Catalogue Rules

- `.webs` is the source of truth for internal apps.
- `.external` is the source of truth for related external sites.
- Every internal slug must map to a real route under `https://gallego.top/<slug>/`.
- New slugs should receive explicit metadata in `src/data/meta/`.
- The UI must remain stable even when `.external` is empty.

## Internationalization Rules

- Code identifiers must stay in English.
- Markdown documentation must stay in English.
- New UI strings must be translated for all supported locales before the change is considered complete.
- Locale changes must continue to update `localStorage` and `?lang=<locale>`.

## SEO Rules

- Do not remove canonical links, hreflang links, Open Graph tags, Twitter Cards, or JSON-LD.
- If the landing changes visually in a meaningful way, update `public/og-cover.svg`.
- If indexable structure changes, review `public/robots.txt` and `public/sitemap.xml`.

## Delivery Rules

- When code changes, update the affected Markdown documentation in the same task.
- Run `npm run build` before closing the work.
- Keep the catalogue and documentation aligned with the real implementation.
