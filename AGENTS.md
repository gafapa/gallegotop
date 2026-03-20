# AGENTS.md

## Objetivo

`gallego.top` es una landing multiidioma para descubrir herramientas docentes que se ejecutan en el navegador, priorizando privacidad local, utilidad real y una presentación visual cuidada.

## Reglas operativas

1. Mantén la app como sitio estático basado en `React + Vite`.
2. Conserva el soporte de idiomas: `es`, `gl`, `ca`, `eu`, `en`, `fr`, `de`.
3. Si añades un idioma, actualiza:
   - `src/content/`
   - `src/data/`
   - `public/sitemap.xml`
   - `src/components/Seo.jsx`
4. `.webs` es la fuente de apps internas.
5. `.external` es la fuente de webs de docentes o proyectos afines.
6. No conviertas la web en un panel genérico. Debe seguir sintiéndose editorial, ligera y con intención visual.

## Convenciones

- Los slugs de `.webs` deben corresponder a rutas reales bajo `https://gallego.top/<slug>/`.
- Si añades un slug nuevo, crea metadata específica en `src/data/meta/`.
- `.external` usa el formato: `url | proyecto | autoría | enfoque`.
- Si `.external` está vacío, la UI debe seguir funcionando sin errores.

## SEO

- No elimines `canonical`, `hreflang`, Open Graph, Twitter Cards ni JSON-LD.
- Si cambias la portada de forma sustancial, revisa `public/og-cover.svg`.
- Si cambias la estructura de indexación, revisa `public/robots.txt` y `public/sitemap.xml`.

## Flujo recomendado

1. Leer `README.md`.
2. Revisar `src/App.jsx`, `src/content/` y `src/data/catalog.js`.
3. Confirmar que los cambios respetan i18n, SEO y catálogo basado en ficheros.
4. Ejecutar `npm run build` antes de cerrar el trabajo.
