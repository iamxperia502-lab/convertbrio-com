import { toolContent, type RelatedTool } from "./toolContent";
import { getTool } from "./tools";
import { routePath, toolMetaByLocale, type Locale } from "./i18n";

/**
 * Single source of truth for "Related tools": the English list in
 * toolContent.ts decides WHICH tools are related; every locale derives its
 * links and labels from it, so a label can never point at the wrong tool and
 * no locale can drift out of sync. Labels are the destination tool's
 * localised name; hrefs are the locale's URL for that tool.
 */
export function relatedToolsFor(slug: string, lang: Locale): RelatedTool[] {
  return (toolContent[slug]?.relatedTools ?? []).map((related) => {
    const target = related.href.match(/^\/tools\/([^/]+)$/)?.[1];
    if (!target || lang === "en") return related;
    const tool = getTool(target);
    const label = toolMetaByLocale[lang]?.[target]?.name ?? tool?.name ?? related.label;
    return { label, href: routePath(related.href, lang) };
  });
}
