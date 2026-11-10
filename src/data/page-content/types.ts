import type { Locale } from "../i18n";

/**
 * Localised copy for the static pages (About, Contact, Privacy, Terms, Trust,
 * Blog index) and the six category hubs. English stays in the .astro files /
 * hubs.ts; every other locale supplies these objects.
 *
 * Any string may contain inline HTML (<a>, <strong>, <em>, <code>). Links use
 * the ENGLISH root-relative path (e.g. `<a href="/privacy">`); the renderer
 * rewrites them to the locale's URL via localizeHtml().
 */
export interface PageBlock {
  heading?: string;
  /** Paragraphs (HTML allowed). */
  paragraphs?: string[];
  /** Bulleted list items (HTML allowed). */
  list?: string[];
}

export interface StaticPageDoc {
  /** <title> text, ending with " | ConvertBrio" or " · ConvertBrio". */
  seoTitle: string;
  /** Short title used for breadcrumbs. */
  title: string;
  /** Meta description. */
  description: string;
  /** PageIntro eyebrow, e.g. "Last updated …" for legal pages. */
  eyebrow: string;
  /** PageIntro h1. */
  heading: string;
  /** Optional PageIntro description. */
  intro?: string;
  blocks: PageBlock[];
}

export interface AboutDoc extends StaticPageDoc {
  /** Three value cards (icons are fixed: shrink, shield, sparkle). */
  values: { title: string; desc: string }[];
}

export interface ContactDoc {
  seoTitle: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  supportHeading: string;
  businessHeading: string;
  responseNote: string;
  nameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  sendLabel: string;
}

export interface BlogIndexDoc {
  seoTitle: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  /** Note shown above the list: guides are currently published in English. */
  englishNote: string;
  empty: string;
  /** BCP-47 tag for Intl.DateTimeFormat. */
  dateLocale: string;
}

export interface HubDoc {
  name: string;
  h1: string;
  seoTitle: string;
  description: string;
  intro: string[];
  workflows: { title: string; steps: string[] }[]; // same order/length as English; tool links are added automatically
  chooser: { heading: string; body: string };
}

export interface HubUiStrings {
  /** Template, `{name}` = lower-cased hub name: "All {name}". */
  allTemplate: string;
  workflows: string;
  guides: string;
  otherCategories: string;
  allTools: string;
  home: string;
  /** All-tools page. */
  toolLibrary: string;
  allToolsIntro: string;
  categoriesLabel: string;
  categoryGuide: string;
  moreTools: string;
  moreToolsDesc: string;
  /** Short description per category id: convert, compress, pdf, image, document, ai. */
  categoryDescs: Record<"convert" | "compress" | "pdf" | "image" | "document" | "ai", string>;
}

export interface LocalePages {
  about: AboutDoc;
  privacy: StaticPageDoc;
  terms: StaticPageDoc;
  trust: StaticPageDoc;
  contact: ContactDoc;
  blogIndex: BlogIndexDoc;
  /** Keyed by hub id: pdf, image, document, compress, ocr, ai. */
  hubs: Record<"pdf" | "image" | "document" | "compress" | "ocr" | "ai", HubDoc>;
  hubUi: HubUiStrings;
}

export type PagesByLocale = Partial<Record<Exclude<Locale, "en">, LocalePages>>;
