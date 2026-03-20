const INTERNAL_BASE_URL = "https://gallego.top";

export function slugToTitle(slug) {
  return slug
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function parseInternalCatalog(raw) {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const progress = line.includes("*");
      const slug = line.replace("*", "").trim();
      return {
        slug,
        progress,
        href: `${INTERNAL_BASE_URL}/${slug}/`,
      };
    });
}

export function parseExternalCatalog(raw) {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [url, title = "", author = "", focus = ""] = line.split("|").map((part) => part.trim());

      return {
        url,
        title,
        author,
        focus,
      };
    })
    .filter((item) => item.url);
}

export function localizeField(field, locale) {
  if (!field) {
    return "";
  }

  if (typeof field === "string") {
    return field;
  }

  return field[locale] || field.es || Object.values(field)[0] || "";
}
