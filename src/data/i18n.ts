// Multi-language support. English is the default (unprefixed) locale; every
// other locale lives under `/<code>/…` and is a partial localisation
// focused on the PDF and compression tools, which is where nearly all of
// the site's non-English search demand sits. Anything not translated links
// back to the English page rather than 404ing.
//
// Adding a language = add its code here, its strings in i18n-strings.ts,
// its homepage copy in i18n-home.ts, and its tool content in
// data/tool-content/<code>.ts.

export type Locale = "en" | "pt" | "es" | "fr" | "de" | "it" | "id";

export const LOCALES: Locale[] = ["en", "pt", "es", "fr", "de", "it", "id"];
export const DEFAULT_LOCALE: Locale = "en";
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** The `<html lang>` value for each locale. */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  id: "id",
};

/** hreflang value used in <link rel=alternate> and the sitemap. */
export const HREFLANG: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  id: "id",
};

/** Native name of each locale, for the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  id: "Bahasa Indonesia",
};

/** Short code shown in the compact switcher pill. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
  fr: "FR",
  de: "DE",
  it: "IT",
  id: "ID",
};

/**
 * Slugs that have a localised tool page in every non-default locale.
 * Keep in sync with the tool-content and tool-meta files.
 */
export const LOCALIZED_TOOL_SLUGS = [
  "compress-pdf",
  "compress-image",
  "merge-pdf",
  "split-pdf",
  "pdf-to-word",
  "word-to-pdf",
  "pdf-to-jpg",
  "jpg-to-pdf",
  "image-converter",
  "ocr-pdf",
  "compress-powerpoint",
  "compress-word",
] as const;

const NON_DEFAULT_SET = new Set<string>(NON_DEFAULT_LOCALES);

/** Prefix a root-relative path with the locale segment (no trailing slash). */
export function localePath(path: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return path || "/";
  if (path === "/" || path === "") return `/${lang}`;
  return `/${lang}${path}`;
}

/**
 * Routes that exist only in English. Localised headers and footers must link
 * to these unprefixed until translated versions are published.
 */
const ENGLISH_ONLY_ROUTES = ["/about", "/blog", "/contact", "/privacy", "/terms", "/trust", "/dashboard", "/pdf-tools", "/image-tools", "/document-tools", "/compression-tools", "/ocr-tools", "/ai-tools"];

/**
 * Like localePath(), but leaves English-only routes (and their sub-paths)
 * unprefixed so localised pages never link to a non-existent /<lang>/... URL.
 */
export function routePath(path: string, lang: Locale): string {
  const base = path.split(/[#?]/)[0];
  if (ENGLISH_ONLY_ROUTES.some((r) => base === r || base.startsWith(`${r}/`))) return path;
  return localePath(path, lang);
}

/** Strip a known locale prefix from a path, returning the English path. */
export function toDefaultPath(path: string): string {
  const match = path.match(/^\/([a-z]{2})(?=\/|$)/);
  if (match && NON_DEFAULT_SET.has(match[1])) {
    return path.slice(match[0].length) || "/";
  }
  return path || "/";
}

/** Build the full alternates map for a page that exists in every locale. */
export function alternatesFor(enPath: string): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((l) => [l, localePath(enPath, l)])
  ) as Record<Locale, string>;
}

export { ui } from "./i18n-strings";
export { toolMetaByLocale } from "./i18n-strings";
export type { UIStrings, ToolFormStrings, ToolMeta } from "./i18n-strings";
