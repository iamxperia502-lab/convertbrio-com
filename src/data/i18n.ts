import { tools, isComingSoon } from "./tools";

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
 * Every live (non-external, non-coming-soon) tool has a localised page in every
 * non-default locale. Coming-soon guides stay English-only and noindex.
 */
export const LOCALIZED_TOOL_SLUGS: readonly string[] = tools
  .filter((tool) => tool.kind !== "external" && !isComingSoon(tool))
  .map((tool) => tool.slug);

/** Static pages that exist in every locale (besides home and all-tools). */
export const LOCALIZED_PAGES = ["/about", "/contact", "/privacy", "/terms", "/trust", "/blog", "/pdf-tools", "/image-tools", "/document-tools", "/compression-tools", "/ocr-tools", "/ai-tools"] as const;

const NON_DEFAULT_SET = new Set<string>(NON_DEFAULT_LOCALES);

/** Prefix a root-relative path with the locale segment (no trailing slash). */
export function localePath(path: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return path || "/";
  if (path === "/" || path === "") return `/${lang}`;
  return `/${lang}${path}`;
}

/**
 * Routes that exist only in English: account pages and individual blog posts
 * (the blog index and everything else is localised).
 */
const ENGLISH_ONLY_ROUTES = ["/dashboard", "/sign-in", "/sign-up", "/blog/"];

/**
 * Like localePath(), but leaves English-only routes unprefixed so localised
 * pages never link to a non-existent /<lang>/... URL. Tool paths for slugs
 * without a localised page (coming-soon guides) also stay English.
 */
export function routePath(path: string, lang: Locale): string {
  const base = path.split(/[#?]/)[0];
  if (lang === DEFAULT_LOCALE) return path || "/";
  if (ENGLISH_ONLY_ROUTES.some((r) => base === r || base.startsWith(r.endsWith("/") ? r : `${r}/`))) return path;
  const toolMatch = base.match(/^\/tools\/([^/]+)$/);
  if (toolMatch && !LOCALIZED_TOOL_SLUGS.includes(toolMatch[1])) return path;
  return localePath(path, lang);
}

/**
 * Rewrite root-relative href="/…" attributes inside an HTML string (written
 * with English paths) to the given locale's URLs.
 */
export function localizeHtml(html: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return html;
  return html.replace(/href="(\/[^"]*)"/g, (_m, href: string) => `href="${routePath(href, lang)}"`);
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
