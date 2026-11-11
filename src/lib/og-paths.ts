import { DEFAULT_LOCALE, type Locale } from "../data/i18n";

/** Root-relative URL of a generated share image (see src/pages/og/[...slug].png.ts). */
export const ogPath = {
  default: () => "/og/default.png",
  tool: (slug: string, lang: Locale = DEFAULT_LOCALE) => `/og/${lang === DEFAULT_LOCALE ? "" : `${lang}/`}tools/${slug}.png`,
  hub: (hubPath: string, lang: Locale = DEFAULT_LOCALE) => `/og/${lang === DEFAULT_LOCALE ? "" : `${lang}/`}hubs/${hubPath.replace(/^\//, "")}.png`,
  blog: (id: string) => `/og/blog/${id}.png`,
};
