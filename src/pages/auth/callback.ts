import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../lib/supabase/server";

export const GET: APIRoute = async ({ request, cookies, url, redirect }) => {
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/dashboard";
  const safeNext = next.startsWith("/") ? next : "/dashboard";

  if (!code) {
    return redirect(`/sign-in?error=${encodeURIComponent("Missing confirmation code.")}`);
  }

  const supabase = createSupabaseServerClient(request, cookies);
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return redirect(`/sign-in?error=${encodeURIComponent(error.message)}`);
  }

  return redirect(safeNext);
};
