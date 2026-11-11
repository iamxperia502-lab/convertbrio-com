import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { tools, isComingSoon } from "../data/tools";
import { hubs } from "../data/hubs";
import { toolContent } from "../data/toolContent";
import { toolContentByLocale } from "../data/tool-content";
import { pagesByLocale } from "../data/page-content";
import { homepageByLocale } from "../data/i18n-home";
import { relatedToolsFor } from "../data/related-tools";
import { LastmodTracker, gitDate, readFiles } from "../lib/lastmod";
import {
  LOCALIZED_TOOL_SLUGS,
  LOCALIZED_PAGES,
  NON_DEFAULT_LOCALES,
  LOCALES,
  DEFAULT_LOCALE,
  HREFLANG,
  toolMetaByLocale,
  localePath,
  type Locale,
} from "../data/i18n";

export const prerender = true;

interface SitemapUrl {
  loc: string;
  lastmod: string;
  /** hreflang alternates for this URL (bidirectional pairs). */
  alternates?: { hreflang: string; href: string }[];
}

// Google ignores <changefreq> and <priority>, so they are not emitted. <lastmod>
// is the date the page's own content last changed (see lib/lastmod.ts), not
// the build date.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? "https://www.convertbrio.com/").replace(/\/$/, "");
  const tracker = new LastmodTracker();

  // Full hreflang alternate set for a page that exists in every locale.
  const altSet = (enPath: string) => [
    ...LOCALES.map((l) => ({ hreflang: HREFLANG[l], href: `${base}${localePath(enPath, l)}` })),
    { hreflang: "x-default", href: `${base}${localePath(enPath, DEFAULT_LOCALE)}` },
  ];

  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postDate = (post: (typeof posts)[number]) => (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10);
  const newestPost = posts.map(postDate).sort().at(-1) ?? tracker.today;

  // Only locales whose pages AND every tool page exist are listed, so the
  // sitemap never advertises a URL that would 404 or a half-built hreflang set.
  const readyLocales = NON_DEFAULT_LOCALES.filter(
    (l) => pagesByLocale[l] && LOCALIZED_TOOL_SLUGS.every((slug) => toolContentByLocale[l]?.[slug])
  );
  const allReady = readyLocales.length === NON_DEFAULT_LOCALES.length;
  const localizedPageSet = new Set<string>(LOCALIZED_PAGES);

  const liveTools = tools.filter((tool) => tool.kind !== "external" && !isComingSoon(tool));
  const toolNames = (lang: Locale) =>
    liveTools.map((t) => [t.slug, lang === DEFAULT_LOCALE ? t.name : toolMetaByLocale[lang]?.[t.slug]?.name ?? t.name]);

  // The English static pages keep their text in the .astro files themselves,
  // so the file text is the fingerprint; first-time entries are seeded from git.
  const staticPage = (path: string, ...files: string[]) => tracker.stamp(path || "/", readFiles(...files), gitDate(...files));

  const hubFingerprint = (hub: (typeof hubs)[number], doc: unknown, lang: Locale) => ({
    hub: { ...hub, include: undefined },
    doc,
    tools: toolNames(lang),
  });

  const toolFingerprint = (slug: string, lang: Locale) => ({
    tool: tools.find((t) => t.slug === slug),
    meta: lang === DEFAULT_LOCALE ? undefined : toolMetaByLocale[lang]?.[slug],
    content: lang === DEFAULT_LOCALE ? toolContent[slug] : toolContentByLocale[lang]?.[slug],
    related: relatedToolsFor(slug, lang),
  });

  const urls: SitemapUrl[] = [
    // ── English pages ──────────────────────────────────────────────────
    {
      loc: `${base}/`,
      lastmod: staticPage("/", "src/pages/index.astro", "src/components/Hero.astro", "src/components/SeoContent.astro", "src/data/faq.ts"),
      alternates: altSet(""),
    },
    {
      loc: `${base}/all-tools`,
      lastmod: tracker.stamp("/all-tools", toolNames(DEFAULT_LOCALE), gitDate("src/pages/all-tools.astro", "src/data/tools.ts")),
      alternates: altSet("/all-tools"),
    },
    ...hubs.map((hub) => ({
      loc: `${base}${hub.path}`,
      lastmod: tracker.stamp(hub.path, hubFingerprint(hub, undefined, DEFAULT_LOCALE)),
      alternates: allReady && localizedPageSet.has(hub.path) ? altSet(hub.path) : undefined,
    })),
    { loc: `${base}/blog`, lastmod: newestPost, alternates: allReady ? altSet("/blog") : undefined },
    ...(["/about", "/contact", "/privacy", "/terms", "/trust"] as const).map((path) => ({
      loc: `${base}${path}`,
      lastmod: staticPage(path, `src/pages${path}.astro`),
      alternates: allReady && localizedPageSet.has(path) ? altSet(path) : undefined,
    })),
    ...liveTools.map((tool) => ({
      loc: `${base}/tools/${tool.slug}`,
      lastmod: tracker.stamp(`/tools/${tool.slug}`, toolFingerprint(tool.slug, DEFAULT_LOCALE)),
      alternates: allReady ? altSet(`/tools/${tool.slug}`) : undefined,
    })),
    // Blog posts: the date comes from the post's own frontmatter.
    ...posts.map((post) => ({ loc: `${base}/blog/${post.id}`, lastmod: postDate(post) })),

    // ── Localised pages ────────────────────────────────────────────────
    ...readyLocales.flatMap((lang) => {
      const pages = pagesByLocale[lang]!;
      const docFor = (path: string) =>
        ({ "/about": pages.about, "/contact": pages.contact, "/privacy": pages.privacy, "/terms": pages.terms, "/trust": pages.trust })[path];
      return [
        {
          loc: `${base}/${lang}`,
          lastmod: tracker.stamp(`/${lang}`, homepageByLocale[lang as Exclude<Locale, "en">]),
          alternates: altSet(""),
        },
        {
          loc: `${base}/${lang}/all-tools`,
          lastmod: tracker.stamp(`/${lang}/all-tools`, { ui: pages.hubUi, names: toolNames(lang) }),
          alternates: altSet("/all-tools"),
        },
        ...LOCALIZED_PAGES.map((path) => {
          const hub = hubs.find((h) => h.path === path);
          const lastmod =
            path === "/blog"
              ? newestPost
              : hub
                ? tracker.stamp(`/${lang}${path}`, hubFingerprint(hub, pages.hubs[hub.id], lang))
                : tracker.stamp(`/${lang}${path}`, docFor(path));
          return { loc: `${base}/${lang}${path}`, lastmod, alternates: altSet(path) };
        }),
        ...LOCALIZED_TOOL_SLUGS.map((slug) => ({
          loc: `${base}/${lang}/tools/${slug}`,
          lastmod: tracker.stamp(`/${lang}/tools/${slug}`, toolFingerprint(slug, lang)),
          alternates: altSet(`/tools/${slug}`),
        })),
      ];
    }),
  ];

  tracker.save();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((url) => {
    const alts = (url.alternates ?? [])
      .map((alt) => `\n    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`)
      .join("");
    return `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>${alts}\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
