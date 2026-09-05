import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";
import { getCollection } from "astro:content";
import { tools, isComingSoon } from "../data/tools";
import { toolContent } from "../data/toolContent";
import { PT_TOOL_SLUGS } from "../data/i18n";

export const prerender = true;

// `astro build` runs with the project root as cwd, so this — unlike an
// import.meta.url-based path — still resolves correctly even though this
// module itself gets bundled to a different location before it runs.
const repoRoot = process.cwd();
const buildDate = new Date().toISOString().slice(0, 10);

// Real lastmod per page, taken from the git history of the source file(s)
// that actually drive that page's content — rather than stamping every URL
// with today's build date regardless of whether anything on it changed.
// Falls back to the build date if git isn't available (e.g. a shallow
// checkout with no history for that file).
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

const staticPaths: { path: string; changefreq: string; priority: string; lastmod: string }[] = [
  {
    path: "",
    changefreq: "weekly",
    priority: "1.0",
    lastmod: lastModified("src/pages/index.astro", "src/components/Hero.astro", "src/components/SeoContent.astro", "src/data/faq.ts"),
  },
  {
    path: "/all-tools",
    changefreq: "weekly",
    priority: "0.9",
    lastmod: lastModified("src/pages/all-tools.astro", "src/data/tools.ts"),
  },
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
const ptLastmod = lastModified(
  "src/pages/pt/tools/[slug].astro",
  "src/pages/pt/index.astro",
  "src/data/toolContentPt.ts",
  "src/data/i18n.ts"
);

const ptSlugs = new Set<string>(PT_TOOL_SLUGS);

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? "https://www.convertbrio.com/").replace(/\/$/, "");
  const xdefault = (enPath: string) => ({ hreflang: "x-default", href: `${base}${enPath || "/"}` });
  const enAlt = (enPath: string) => ({ hreflang: "en", href: `${base}${enPath || "/"}` });
  const ptAlt = (enPath: string) => ({ hreflang: "pt-BR", href: `${base}/pt${enPath}` });

  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const urls: SitemapUrl[] = [
    ...staticPaths.map(({ path, changefreq, priority, lastmod }) => {
      const localised = path === "" || path === "/all-tools";
      return {
        loc: `${base}${path}`,
        changefreq,
        priority,
        lastmod,
        alternates: localised ? [enAlt(path), ptAlt(path), xdefault(path)] : undefined,
      };
    }),
    ...tools
      // External tools (e.g. internet-speed-test) are a redirect, not a 200
      // page. Coming-soon tools are listed only when they have a
      // `comingSoonGuide` — those render as indexable how-to pages; the
      // bare "Coming soon" stubs stay noindex and out of the sitemap.
      .filter(
        (tool) =>
          tool.kind !== "external" &&
          (!isComingSoon(tool) || Boolean(toolContent[tool.slug]?.comingSoonGuide))
      )
      .map((tool) => {
        const enPath = `/tools/${tool.slug}`;
        return {
          loc: `${base}${enPath}`,
          changefreq: "weekly",
          priority: "0.8",
          lastmod: toolsLastmod,
          alternates: ptSlugs.has(tool.slug) ? [enAlt(enPath), ptAlt(enPath), xdefault(enPath)] : undefined,
        };
      }),
    // Portuguese pages.
    {
      loc: `${base}/pt`,
      changefreq: "weekly",
      priority: "0.9",
      lastmod: ptLastmod,
      alternates: [enAlt(""), ptAlt(""), xdefault("")],
    },
    {
      loc: `${base}/pt/all-tools`,
      changefreq: "weekly",
      priority: "0.7",
      lastmod: ptLastmod,
      alternates: [enAlt("/all-tools"), ptAlt("/all-tools"), xdefault("/all-tools")],
    },
    ...PT_TOOL_SLUGS.map((slug) => {
      const enPath = `/tools/${slug}`;
      return {
        loc: `${base}/pt${enPath}`,
        changefreq: "weekly",
        priority: "0.8",
        lastmod: ptLastmod,
        alternates: [enAlt(enPath), ptAlt(enPath), xdefault(enPath)],
      };
    }),
    ...posts.map((post) => ({
      loc: `${base}/blog/${post.id}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
    })),
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

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
