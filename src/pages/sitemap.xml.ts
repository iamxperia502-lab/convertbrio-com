import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";
import { getCollection } from "astro:content";
import { tools, isComingSoon } from "../data/tools";

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
  { path: "/pricing", changefreq: "monthly", priority: "0.6", lastmod: lastModified("src/pages/pricing.astro") },
  { path: "/about", changefreq: "monthly", priority: "0.5", lastmod: lastModified("src/pages/about.astro") },
  { path: "/contact", changefreq: "monthly", priority: "0.5", lastmod: lastModified("src/pages/contact.astro") },
  { path: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: lastModified("src/pages/privacy.astro") },
  { path: "/terms", changefreq: "yearly", priority: "0.3", lastmod: lastModified("src/pages/terms.astro") },
];

const toolsLastmod = lastModified("src/pages/tools/[slug].astro", "src/data/tools.ts", "src/data/toolContent.ts");

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? "https://www.convertbrio.com/").replace(/\/$/, "");

  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const urls = [
    ...staticPaths.map(({ path, changefreq, priority, lastmod }) => ({
      loc: `${base}${path}`,
      changefreq,
      priority,
      lastmod,
    })),
    ...tools
      .filter((tool) => !isComingSoon(tool))
      .map((tool) => ({
        loc: `${base}/tools/${tool.slug}`,
        changefreq: "weekly",
        priority: "0.8",
        lastmod: toolsLastmod,
      })),
    ...posts.map((post) => ({
      loc: `${base}/blog/${post.id}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
