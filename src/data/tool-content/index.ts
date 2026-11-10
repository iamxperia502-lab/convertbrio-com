import type { ToolContentEntry } from "../toolContent";
import type { Locale } from "../i18n";
import { toolContentPt } from "./pt";
import { toolContentPtMoreA } from "./pt-more-a";
import { toolContentPtMoreB } from "./pt-more-b";
import { toolContentEs } from "./es";
import { toolContentEsMoreA } from "./es-more-a";
import { toolContentEsMoreB } from "./es-more-b";
import { toolContentFr } from "./fr";
import { toolContentFrMoreA } from "./fr-more-a";
import { toolContentFrMoreB } from "./fr-more-b";
import { toolContentDe } from "./de";
import { toolContentDeMoreA } from "./de-more-a";
import { toolContentDeMoreB } from "./de-more-b";
import { toolContentIt } from "./it";
import { toolContentItMoreA } from "./it-more-a";
import { toolContentItMoreB } from "./it-more-b";
import { toolContentId } from "./id";
import { toolContentIdMoreA } from "./id-more-a";
import { toolContentIdMoreB } from "./id-more-b";

/**
 * Localised long-form tool content, by locale. Only the 12
 * LOCALIZED_TOOL_SLUGS have entries; anything else falls back to English.
 */
export const toolContentByLocale: Partial<Record<Locale, Record<string, ToolContentEntry>>> = {
  pt: { ...toolContentPt, ...toolContentPtMoreA, ...toolContentPtMoreB },
  es: { ...toolContentEs, ...toolContentEsMoreA, ...toolContentEsMoreB },
  fr: { ...toolContentFr, ...toolContentFrMoreA, ...toolContentFrMoreB },
  de: { ...toolContentDe, ...toolContentDeMoreA, ...toolContentDeMoreB },
  it: { ...toolContentIt, ...toolContentItMoreA, ...toolContentItMoreB },
  id: { ...toolContentId, ...toolContentIdMoreA, ...toolContentIdMoreB },
};
