import { defineMiddleware } from "astro:middleware";
import { createSupabaseServerClient } from "./lib/supabase/server";
import { checkRateLimit } from "./lib/rate-limit";

const PROTECTED_PREFIXES = ["/dashboard"];

// Per-IP limits for endpoints that are expensive (AI models, PDF/office
// conversion) or abuse-prone (contact form spam). Checked before auth/other
// work so a blocked request doesn't pay for any of it.
const RATE_LIMITS: { prefix: string; limit: number; windowMs: number }[] = [
  { prefix: "/api/convert/ai", limit: 15, windowMs: 10 * 60 * 1000 },
  { prefix: "/api/convert/", limit: 40, windowMs: 5 * 60 * 1000 },
  { prefix: "/api/contact", limit: 5, windowMs: 60 * 60 * 1000 },
];

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, locals, url } = context;

  const rateLimited = RATE_LIMITS.find((r) => url.pathname.startsWith(r.prefix));
  if (rateLimited) {
    let ip = "unknown";
    try {
      // Only accessed for the (never-prerendered) API routes matched above -
      // context.clientAddress throws in a prerendered context, and reading
      // it here (not via destructuring above) keeps that lazy.
      ip = context.clientAddress;
    } catch {
      // clientAddress throws when unavailable (e.g. static/prerendered
      // context) - fall back to a shared bucket rather than failing open
      // per-IP, which would be trivial to bypass by omitting headers.
    }
    const { allowed, retryAfterSeconds } = checkRateLimit(`${ip}:${rateLimited.prefix}`, rateLimited.limit, rateLimited.windowMs);
    if (!allowed) {
      return new Response(JSON.stringify({ error: "Too many requests. Please wait a bit and try again." }), {
        status: 429,
        headers: { "Content-Type": "application/json", "Retry-After": String(retryAfterSeconds) },
      });
    }
  }

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

  const isProtected = PROTECTED_PREFIXES.some((prefix) => url.pathname.startsWith(prefix));
  if (isProtected && !locals.user) {
    const next_ = encodeURIComponent(url.pathname + url.search);
    return context.redirect(`/sign-in?next=${next_}`);
  }

  return next();
});
