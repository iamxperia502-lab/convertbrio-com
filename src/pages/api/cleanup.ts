import type { APIRoute } from "astro";
import { createSupabaseAdminClient } from "../../lib/supabase/admin";
import { CONVERSIONS_BUCKET } from "../../lib/conversion-jobs";

// Invoked hourly by the Vercel Cron in vercel.json. Deletes conversion_jobs
// rows past their expires_at, and the storage objects they reference —
// this is what makes the homepage's "deleted automatically within 1 hour"
// claim true. Secured by CRON_SECRET, which Vercel's native Cron Jobs
// feature sends automatically as a Bearer token when that env var is set.
export const GET: APIRoute = async ({ request }) => {
  const cronSecret = import.meta.env.CRON_SECRET;
  if (cronSecret && request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!import.meta.env.PUBLIC_SUPABASE_URL || !import.meta.env.SUPABASE_SERVICE_ROLE_KEY) {
    return new Response(JSON.stringify({ skipped: "Supabase not configured." }), { status: 200 });
  }

  const admin = createSupabaseAdminClient();
  const { data: expired, error } = await admin
    .from("conversion_jobs")
    .select("id, output_path")
    .lt("expires_at", new Date().toISOString());

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  if (!expired || expired.length === 0) {
    return new Response(JSON.stringify({ deleted: 0 }), { status: 200 });
  }

  const paths = expired.filter((job) => job.output_path).map((job) => job.output_path as string);
  if (paths.length > 0) {
    await admin.storage.from(CONVERSIONS_BUCKET).remove(paths);
  }

  await admin
    .from("conversion_jobs")
    .delete()
    .in("id", expired.map((job) => job.id));

  return new Response(JSON.stringify({ deleted: expired.length }), { status: 200 });
};
