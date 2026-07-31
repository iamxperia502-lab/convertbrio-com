import { defineMiddleware } from "astro:middleware";
import { getRelativeLocaleUrl } from "astro:i18n";
import { createSupabaseServerClient } from "./lib/supabase/server";
import { stripLocalePrefix } from "./i18n/utils";

const PROTECTED_PREFIXES = ["/dashboard"];

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, locals, url } = context;
  const lang = context.currentLocale ?? "en";
  const pathnameWithoutLocale = stripLocalePrefix(url.pathname);

  const supabaseConfigured = Boolean(
    import.meta.env.PUBLIC_SUPABASE_URL && import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
  );

  locals.supabase = null;
  locals.user = null;

  if (supabaseConfigured) {
    const supabase = createSupabaseServerClient(request, cookies);
    locals.supabase = supabase;

    const {
      data: { user },
    } = await supabase.auth.getUser();
    locals.user = user;
  }

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathnameWithoutLocale.startsWith(prefix));
  if (isProtected && !locals.user) {
    const next_ = encodeURIComponent(url.pathname + url.search);
    return context.redirect(`${getRelativeLocaleUrl(lang, "/sign-in")}?next=${next_}`);
  }

  return next();
});
