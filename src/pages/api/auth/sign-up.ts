import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const POST: APIRoute = async ({ request, cookies, url, redirect }) => {
  const form = await request.formData();
  const email = String(form.get("email") ?? "").trim();
  const password = String(form.get("password") ?? "");

  if (!email || !password) {
    return redirect(`/sign-up?error=${encodeURIComponent("Enter an email and password.")}`);
  }

  const supabase = createSupabaseServerClient(request, cookies);
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${url.origin}/auth/callback` },
  });

  if (error) {
    return redirect(`/sign-up?error=${encodeURIComponent(error.message)}`);
  }

  return redirect(`/sign-in?notice=${encodeURIComponent("Check your email to confirm your account.")}`);
};
