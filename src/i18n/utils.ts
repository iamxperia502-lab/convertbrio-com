import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, languages, ui, type Lang } from "./ui";

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in languages;
}

export function useTranslations(lang: string | undefined) {
  const resolved: Lang = isLang(lang) ? lang : defaultLang;
  const dict = ui[resolved];
  return function t(key: keyof typeof ui.en): string {
    return dict[key] ?? ui[defaultLang][key];
  };
}

/** Strips any locale prefix from a pathname, e.g. "/es/pricing" -> "/pricing". */
export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/");
  const [, maybeLocale, ...rest] = segments;
  if (isLang(maybeLocale) && maybeLocale !== defaultLang) {
    return "/" + rest.join("/");
  }
  return pathname;
}

/** Builds the equivalent URL for `pathname` in `targetLang`, preserving any hash. */
export function getLocalizedPath(pathname: string, targetLang: string, hash = ""): string {
  const bare = stripLocalePrefix(pathname) || "/";
  return getRelativeLocaleUrl(targetLang, bare) + hash;
}
