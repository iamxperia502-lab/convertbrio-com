import type { Locale } from "../data/i18n";

/**
 * JSON-LD builders. Pages never hand-write schema: they pass their existing
 * data (tool entry, FAQ list, post frontmatter, ...) to these helpers and
 * hand the result to <Layout jsonLd={[...]}>, which emits one @graph per page.
 * Every node is built from the same data the visible page renders, so schema
 * and page text cannot drift apart.
 */

export type Node = Record<string, unknown>;

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/convertbrio/",
  "https://www.instagram.com/convertbrio/",
  "https://www.facebook.com/61594943638956",
  "https://www.threads.com/@convertbrio",
];

export const HOME_LABEL: Record<Locale, string> = {
  en: "Home", pt: "Início", es: "Inicio", fr: "Accueil", de: "Startseite", it: "Home", id: "Beranda",
};

export const orgId = (base: string) => `${base}/#organization`;
export const founderId = (base: string) => `${base}/about#founder`;

export function breadcrumbList(base: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, `${base}/`).toString(),
    })),
  };
}

export function organization(base: string): Node {
  return {
    "@type": "Organization",
    "@id": orgId(base),
    name: "ConvertBrio",
    url: base,
    logo: `${base}/web-app-manifest-512x512.png`,
    email: "subhamsharma@convertbrio.com",
    founder: { "@type": "Person", "@id": founderId(base), name: "Subham Sharma", url: `${base}/about` },
    sameAs: SOCIAL_PROFILES,
  };
}

export function webSite(base: string, opts: { description: string; lang: Locale; url: string }): Node {
  return {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: "ConvertBrio",
    url: opts.url,
    description: opts.description,
    inLanguage: opts.lang,
    publisher: { "@id": orgId(base) },
  };
}

export function webApplication(opts: { name: string; description: string; url: string; lang: Locale }): Node {
  return {
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    inLanguage: opts.lang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function faqPage(items: { question: string; answer: string }[]): Node | null {
  if (items.length === 0) return null;
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function howTo(name: string, steps: { step: string; detail?: string }[] | undefined): Node | null {
  if (!steps || steps.length === 0) return null;
  return {
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.step,
      text: s.detail ? `${s.step} ${s.detail}` : s.step,
    })),
  };
}

export function article(opts: {
  base: string;
  url: string;
  headline: string;
  description: string;
  datePublished: Date;
  dateModified?: Date;
  authorName: string;
  image: string;
}): Node {
  return {
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished.toISOString(),
    dateModified: (opts.dateModified ?? opts.datePublished).toISOString(),
    author: { "@type": "Person", "@id": founderId(opts.base), name: opts.authorName, url: `${opts.base}/about` },
    publisher: { "@id": orgId(opts.base) },
    image: [opts.image],
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    url: opts.url,
  };
}

/** Wraps nodes in a single JSON-LD document, dropping empty ones. */
export function graph(nodes: (Node | null | undefined | false)[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes.filter(Boolean) });
}
