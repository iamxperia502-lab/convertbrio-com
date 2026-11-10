import type { Locale } from "../i18n";
import type { LocalePages } from "./types";
import { pagesPt } from "./pt";
import { pagesEs } from "./es";
import { pagesFr } from "./fr";
import { pagesDe } from "./de";
import { pagesIt } from "./it";
import { pagesId } from "./id";

export const pagesByLocale: Partial<Record<Locale, LocalePages | undefined>> = {
  pt: pagesPt, es: pagesEs, fr: pagesFr, de: pagesDe, it: pagesIt, id: pagesId,
};
export type { LocalePages } from "./types";
