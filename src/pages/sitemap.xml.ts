import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { tools, isComingSoon } from "../data/tools";

export const prerender = true;

const staticPaths: { path: string; changefreq: string; priority: string }[] = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/all-tools", changefreq: "weekly", priority: "0.9" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/pricing", changefreq: "monthly", priority: "0.6" },
  { path: "/about", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? "https://www.convertbrio.com/").replace(/\/$/, "");
  const lastmod = new Date().toISOString().slice(0, 10);

  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const urls = [
    ...staticPaths.map(({ path, changefreq, priority }) => ({
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
        lastmod,
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
