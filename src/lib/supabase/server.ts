import { createServerClient, parseCookieHeader } from "@supabase/ssr";
import type { AstroCookies } from "astro";

/**
 * Supabase client bound to the current request's cookies, so a signed-in
 * session persists across requests via Set-Cookie. Astro's cookie API has no
 * getAll(), so incoming cookies are parsed from the raw request header
 * (per @supabase/ssr's documented Astro integration pattern).
 */
export function createSupabaseServerClient(request: Request, cookies: AstroCookies) {
  return createServerClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get("cookie") ?? "").map(({ name, value }) => ({
          name,
          value: value ?? "",
        }));
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookies.set(name, value, options);
        });
      },
    },
  });
}
