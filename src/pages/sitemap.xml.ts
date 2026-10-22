import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";
import { getCollection } from "astro:content";
import { tools, isComingSoon } from "../data/tools";
import { hubs } from "../data/hubs";
import { toolContent } from "../data/toolContent";
import {
  LOCALIZED_TOOL_SLUGS,
  NON_DEFAULT_LOCALES,
  LOCALES,
  DEFAULT_LOCALE,
  HREFLANG,
  localePath,
} from "../data/i18n";

export const prerender = true;

// `astro build` runs with the project root as cwd, so this — unlike an
// import.meta.url-based path — still resolves correctly even though this
// module itself gets bundled to a different location before it runs.
const repoRoot = process.cwd();
const buildDate = new Date().toISOString().slice(0, 10);

// Real lastmod per page, taken from the git history of the source file(s)
// that actually drive that page's content. Falls back to the build date if
// git isn't available (e.g. a shallow checkout with no history for a file).
function lastModified(...relativePaths: string[]): string {
  try {
    const dates = relativePaths.map((path) =>
      execFileSync("git", ["log", "-1", "--format=%cs", "--", path], {
        cwd: repoRoot,
        encoding: "utf-8",
      }).trim()
    );
    const known = dates.filter(Boolean).sort();
    return known.at(-1) || buildDate;
  } catch {
    return buildDate;
  }
}

interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod: string;
  /** hreflang alternates for this URL (bidirectional pairs). */
  alternates?: { hreflang: string; href: string }[];
}

const staticPaths: { path: string; changefreq: string; priority: string; lastmod: string; localised?: boolean }[] = [
  {
    path: "",
    changefreq: "weekly",
    priority: "1.0",
    lastmod: lastModified("src/pages/index.astro", "src/components/Hero.astro", "src/components/SeoContent.astro", "src/data/faq.ts"),
    localised: true,
  },
  {
    path: "/all-tools",
    changefreq: "weekly",
    priority: "0.9",
    lastmod: lastModified("src/pages/all-tools.astro", "src/data/tools.ts"),
    localised: true,
  },
  ...hubs.map((hub) => ({
    path: hub.path,
    changefreq: "weekly",
    priority: "0.8",
    lastmod: lastModified("src/data/hubs.ts", "src/data/tools.ts", "src/components/HubPage.astro"),
  })),
  { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: lastModified("src/pages/blog/index.astro") },
  { path: "/about", changefreq: "monthly", priority: "0.5", lastmod: lastModified("src/pages/about.astro") },
  { path: "/contact", changefreq: "monthly", priority: "0.5", lastmod: lastModified("src/pages/contact.astro") },
  { path: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: lastModified("src/pages/privacy.astro") },
  { path: "/terms", changefreq: "yearly", priority: "0.3", lastmod: lastModified("src/pages/terms.astro") },
  { path: "/trust", changefreq: "monthly", priority: "0.4", lastmod: lastModified("src/pages/trust.astro") },
];

const toolsLastmod = lastModified(
  "src/pages/tools/[slug].astro",
  "src/components/ToolPage.astro",
  "src/data/tools.ts",
  "src/data/toolContent.ts"
);
const localizedLastmod = lastModified(
  "src/pages/[lang]/tools/[slug].astro",
  "src/pages/[lang]/index.astro",
  "src/data/i18n.ts",
  "src/data/i18n-strings.ts",
  "src/data/i18n-home.ts",
  "src/data/tool-content"
);

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? "https://www.convertbrio.com/").replace(/\/$/, "");

  // Full hreflang alternate set for a page that exists in every locale.
  const altSet = (enPath: string) => [
    ...LOCALES.map((l) => ({ hreflang: HREFLANG[l], href: `${base}${localePath(enPath, l)}` })),
    { hreflang: "x-default", href: `${base}${localePath(enPath, DEFAULT_LOCALE)}` },
  ];

  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const localizedSlugSet = new Set<string>(LOCALIZED_TOOL_SLUGS);

  const urls: SitemapUrl[] = [
    // English canonical pages.
    ...staticPaths.map(({ path, changefreq, priority, lastmod, localised }) => ({
      loc: `${base}${path || "/"}`,
      changefreq,
      priority,
      lastmod,
      alternates: localised ? altSet(path) : undefined,
    })),
    ...tools
      .filter(
        (tool) =>
          tool.kind !== "external" &&
          !isComingSoon(tool)
      )
      .map((tool) => {
        const enPath = `/tools/${tool.slug}`;
        return {
          loc: `${base}${enPath}`,
          changefreq: "weekly",
          priority: "0.8",
          lastmod: toolsLastmod,
          alternates: localizedSlugSet.has(tool.slug) ? altSet(enPath) : undefined,
        };
      }),
    ...posts.map((post) => ({
      loc: `${base}/blog/${post.id}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
    })),

    // Localised pages: home, all-tools, and each localised tool per locale.
    ...NON_DEFAULT_LOCALES.flatMap((lang) => [
      {
        loc: `${base}/${lang}`,
        changefreq: "weekly",
        priority: "0.9",
        lastmod: localizedLastmod,
        alternates: altSet(""),
      },
      {
        loc: `${base}/${lang}/all-tools`,
        changefreq: "weekly",
        priority: "0.7",
        lastmod: localizedLastmod,
        alternates: altSet("/all-tools"),
      },
      ...LOCALIZED_TOOL_SLUGS.map((slug) => ({
        loc: `${base}/${lang}/tools/${slug}`,
        changefreq: "weekly",
        priority: "0.8",
        lastmod: localizedLastmod,
        alternates: altSet(`/tools/${slug}`),
      })),
    ]),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((url) => {
    const alts = (url.alternates ?? [])
      .map((alt) => `\n    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`)
      .join("");
    return `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>${alts}\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
