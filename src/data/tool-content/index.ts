import type { ToolContentEntry } from "../toolContent";
import type { Locale } from "../i18n";
import { toolContentPt } from "./pt";
import { toolContentEs } from "./es";
import { toolContentFr } from "./fr";
import { toolContentDe } from "./de";
import { toolContentIt } from "./it";
import { toolContentId } from "./id";

/**
 * Localised long-form tool content, by locale. Only the 12
 * LOCALIZED_TOOL_SLUGS have entries; anything else falls back to English.
 */
export const toolContentByLocale: Partial<Record<Locale, Record<string, ToolContentEntry>>> = {
  pt: toolContentPt,
  es: toolContentEs,
  fr: toolContentFr,
  de: toolContentDe,
  it: toolContentIt,
  id: toolContentId,
};
