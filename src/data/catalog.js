import externalRaw from "../../.external?raw";
import websRaw from "../../.webs?raw";
import { locales, messages } from "../content/siteContent";
import { aiCommunicationMeta } from "./meta/aiCommunication";
import { documentsPlanningMeta } from "./meta/documentsPlanning";
import { localizeField, parseExternalCatalog, parseInternalCatalog, slugToTitle } from "../utils/catalog";

const appMeta = { ...aiCommunicationMeta, ...documentsPlanningMeta };

const fallbackTags = {
  documents: {
    es: "Documentos",
    gl: "Documentos",
    ca: "Documents",
    eu: "Dokumentuak",
    en: "Documents",
    fr: "Documents",
    de: "Dokumente",
  },
};

const fallbackDescriptions = {
  es: "Herramienta de gallego.top pensada para resolver trabajo docente real desde el navegador.",
  gl: "Ferramenta de gallego.top pensada para resolver traballo docente real dende o navegador.",
  ca: "Eina de gallego.top pensada per resoldre feina docent real des del navegador.",
  eu: "gallego.top tresna, nabigatzailetik benetako irakasle lana ebazteko pentsatua.",
  en: "A gallego.top tool designed to solve real teaching work directly in the browser.",
  fr: "Un outil gallego.top conçu pour résoudre un vrai travail enseignant directement dans le navigateur.",
  de: "Ein gallego.top-Tool, das reale Lehrarbeit direkt im Browser unterstützt.",
};

const internalApps = parseInternalCatalog(websRaw).map((item) => {
  const meta = appMeta[item.slug];

  return {
    ...item,
    category: meta?.category || "documents",
    accent: meta?.category || "documents",
    tag: meta?.tag || fallbackTags.documents,
    title: meta?.title || Object.fromEntries(locales.map(({ code }) => [code, slugToTitle(item.slug)])),
    desc: meta?.desc || fallbackDescriptions,
  };
});

const externalSites = parseExternalCatalog(externalRaw);

export const categoryOrder = ["ai", "communication", "documents", "planning"];

export function getInternalApps(locale) {
  return internalApps.map((item) => ({
    ...item,
    tagLabel: localizeField(item.tag, locale),
    titleLabel: localizeField(item.title, locale),
    description: localizeField(item.desc, locale),
  }));
}

export function getExternalSites(locale) {
  return externalSites.map((item) => ({
    ...item,
    titleLabel: item.title || new URL(item.url).hostname.replace(/^www\./, ""),
    authorLabel: item.author || messages[locale].ui.communityBy,
    focusLabel: item.focus || messages[locale].ui.externalCopy,
  }));
}
