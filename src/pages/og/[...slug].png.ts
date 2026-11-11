import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { renderOgImage } from "../../lib/og-image";
import { tools, isComingSoon } from "../../data/tools";
import { hubs } from "../../data/hubs";
import { LOCALES, LOCALIZED_TOOL_SLUGS, toolMetaByLocale, DEFAULT_LOCALE, type Locale } from "../../data/i18n";
import { pagesByLocale } from "../../data/page-content";

export const prerender = true;

interface Entry {
  title: string;
  description?: string;
}

export async function getStaticPaths() {
  const out: { params: { slug: string }; props: Entry }[] = [];
  const add = (slug: string, entry: Entry) => out.push({ params: { slug }, props: entry });

  add("default", { title: "Free online file converter", description: "Convert, compress, and edit images, PDFs, and documents. Free, private, no sign-up." });

  for (const lang of LOCALES as Locale[]) {
    const prefix = lang === DEFAULT_LOCALE ? "" : `${lang}/`;
    for (const slug of LOCALIZED_TOOL_SLUGS) {
      const tool = tools.find((t) => t.slug === slug);
      if (!tool || tool.kind === "external" || isComingSoon(tool)) continue;
      const meta = lang === DEFAULT_LOCALE ? undefined : toolMetaByLocale[lang]?.[slug];
      add(`${prefix}tools/${slug}`, { title: meta?.name ?? tool.name, description: meta?.description ?? tool.description });
    }
    for (const hub of hubs) {
      const doc = lang === DEFAULT_LOCALE ? undefined : pagesByLocale[lang]?.hubs[hub.id];
      add(`${prefix}hubs/${hub.path.slice(1)}`, { title: doc?.name ?? hub.name, description: doc?.description ?? hub.description });
    }
  }

  for (const post of await getCollection("blog", ({ data }) => !data.draft)) {
    add(`blog/${post.id}`, { title: post.data.title, description: post.data.description });
  }
  return out;
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props as Entry);
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
  });
};
