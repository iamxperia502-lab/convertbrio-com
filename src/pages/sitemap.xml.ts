import type { APIRoute } from "astro";
import { tools } from "../data/tools";

export const prerender = true;

const staticPaths: { path: string; changefreq: string; priority: string }[] = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/all-tools", changefreq: "weekly", priority: "0.9" },
  { path: "/pricing", changefreq: "monthly", priority: "0.6" },
  { path: "/about", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? "https://convertbrio.com/").replace(/\/$/, "");
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = [
    ...staticPaths.map(({ path, changefreq, priority }) => ({
      loc: `${base}${path}`,
      changefreq,
      priority,
    })),
    ...tools.map((tool) => ({
      loc: `${base}/tools/${tool.slug}`,
      changefreq: "weekly",
      priority: "0.8",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
