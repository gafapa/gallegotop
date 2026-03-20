import { Helmet } from "react-helmet-async";
import { BASE_URL, locales } from "../content/siteContent";

const localeMap = {
  es: "es_ES",
  gl: "gl_ES",
  ca: "ca_ES",
  eu: "eu_ES",
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
};

function buildStructuredData(locale, copy, internalApps, externalSites) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "gallego.top",
        url: BASE_URL,
        inLanguage: locale,
        description: copy.meta.description,
      },
      {
        "@type": "WebPage",
        name: copy.meta.title,
        url: `${BASE_URL}/?lang=${locale}`,
        inLanguage: locale,
        description: copy.meta.description,
        isPartOf: {
          "@type": "WebSite",
          name: "gallego.top",
          url: BASE_URL,
        },
      },
      {
        "@type": "Organization",
        name: "gallego.top",
        url: BASE_URL,
        email: "mailto:pablo@gallegofalcon.com",
        sameAs: externalSites.slice(0, 8).map((site) => site.url),
      },
      {
        "@type": "ItemList",
        name: copy.ui.catalogTitle,
        itemListElement: internalApps.map((app, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: app.href,
          name: app.titleLabel,
          description: app.description,
        })),
      },
    ],
  };
}

export default function Seo({ locale, copy, internalApps, externalSites }) {
  const canonical = `${BASE_URL}/?lang=${locale}`;
  const structuredData = buildStructuredData(locale, copy, internalApps, externalSites);
  const openGraphLocale = localeMap[locale] || localeMap.es;

  return (
    <Helmet prioritizeSeoTags>
      <html lang={locale} />
      <title>{copy.meta.title}</title>
      <meta name="description" content={copy.meta.description} />
      <meta name="theme-color" content="#efe5d0" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="gallego.top" />
      <meta property="og:locale" content={openGraphLocale} />
      <meta property="og:title" content={copy.meta.title} />
      <meta property="og:description" content={copy.meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${BASE_URL}/og-cover.svg`} />
      <meta property="og:image:alt" content="gallego.top editorial catalogue cover" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={copy.meta.title} />
      <meta name="twitter:description" content={copy.meta.description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-cover.svg`} />
      <link rel="canonical" href={canonical} />
      {locales.map(({ code }) => (
        <link key={code} rel="alternate" hrefLang={code} href={`${BASE_URL}/?lang=${code}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
