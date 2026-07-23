import type { APIRoute } from "astro";
import type { Provider } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

const PROVIDERS: Record<string, Provider> = {
  google: "google",
  microsoft: "azure",
};

export const GET: APIRoute = async ({ request, cookies, url, redirect }) => {
  const providerParam = url.searchParams.get("provider") ?? "";
  const next = url.searchParams.get("next") ?? "/dashboard";
  const safeNext = next.startsWith("/") ? next : "/dashboard";
  const provider = PROVIDERS[providerParam];

  if (!provider) {
    return redirect(`/sign-in?error=${encodeURIComponent("Unsupported sign-in provider.")}`);
  }

  const supabase = createSupabaseServerClient(request, cookies);
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${url.origin}/auth/callback?next=${encodeURIComponent(safeNext)}`,
    },
  });

  if (error || !data?.url) {
    return redirect(`/sign-in?error=${encodeURIComponent(error?.message ?? "Could not start sign-in.")}`);
  }

  return redirect(data.url);
};
