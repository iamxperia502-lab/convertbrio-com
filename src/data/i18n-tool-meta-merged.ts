import type { Locale } from "./i18n";
import type { ToolMeta } from "./i18n-strings";
import { toolMetaByLocale as base } from "./i18n-tool-meta";
import { toolMetaPtMore } from "./tool-meta-more/pt";
import { toolMetaEsMore } from "./tool-meta-more/es";
import { toolMetaFrMore } from "./tool-meta-more/fr";
import { toolMetaDeMore } from "./tool-meta-more/de";
import { toolMetaItMore } from "./tool-meta-more/it";
import { toolMetaIdMore } from "./tool-meta-more/id";

const more: Record<string, Record<string, ToolMeta>> = {
  pt: toolMetaPtMore, es: toolMetaEsMore, fr: toolMetaFrMore, de: toolMetaDeMore, it: toolMetaItMore, id: toolMetaIdMore,
};

/** Localised tool name/description/SEO meta: original 12 plus the extended set. */
export const toolMetaByLocale: Partial<Record<Locale, Record<string, ToolMeta>>> = Object.fromEntries(
  Object.entries(base).map(([l, m]) => [l, { ...m, ...more[l] }]),
);
