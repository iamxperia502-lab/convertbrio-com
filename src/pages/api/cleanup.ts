import type { APIRoute } from "astro";
import { createSupabaseAdminClient } from "../../lib/supabase/admin";
import { CONVERSIONS_BUCKET } from "../../lib/conversion-jobs";
import { list, del } from "@vercel/blob";

// Invoked daily by the Vercel Cron in vercel.json (Hobby plan only allows
// daily cron schedules). Deletes conversion_jobs rows past their expires_at,
// and the storage objects they reference — this is what makes the homepage's
// "deleted automatically within 24 hours" claim true. Secured by CRON_SECRET,
// which Vercel's native Cron Jobs feature sends automatically as a Bearer
// token when that env var is set.
export const GET: APIRoute = async ({ request }) => {
  const cronSecret = import.meta.env.CRON_SECRET;
  if (!cronSecret || request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!import.meta.env.PUBLIC_SUPABASE_URL || !import.meta.env.SUPABASE_SERVICE_ROLE_KEY) {
    return new Response(JSON.stringify({ skipped: "Supabase not configured." }), { status: 200 });
  }

  // Originals are normally deleted as soon as the convert route reads them
  // (see resolveConversionForm). Uploads that never reach a convert call
  // (abandoned tab, failed request) would otherwise stay in the private Blob
  // store forever, so sweep anything older than 24 hours.
  const orphanedBlobsDeleted = await sweepOrphanedUploads();

  const admin = createSupabaseAdminClient();
  const { data: expired, error } = await admin
    .from("conversion_jobs")
    .select("id, output_path")
    .lt("expires_at", new Date().toISOString());

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  if (!expired || expired.length === 0) {
    return new Response(JSON.stringify({ deleted: 0, orphanedBlobsDeleted }), { status: 200 });
  }

  const paths = expired.filter((job) => job.output_path).map((job) => job.output_path as string);
  if (paths.length > 0) {
    await admin.storage.from(CONVERSIONS_BUCKET).remove(paths);
  }

  await admin
    .from("conversion_jobs")
    .delete()
    .in("id", expired.map((job) => job.id));

  return new Response(JSON.stringify({ deleted: expired.length, orphanedBlobsDeleted }), { status: 200 });
};

const ORPHAN_MAX_AGE_MS = 24 * 60 * 60 * 1000;

async function sweepOrphanedUploads(): Promise<number> {
  const token = import.meta.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return 0;
  const cutoff = Date.now() - ORPHAN_MAX_AGE_MS;
  let deleted = 0;
  try {
    let cursor: string | undefined;
    do {
      const page = await list({ token, cursor, limit: 500 });
      const stale = page.blobs.filter((b) => new Date(b.uploadedAt).getTime() < cutoff).map((b) => b.url);
      if (stale.length > 0) {
        await del(stale, { token });
        deleted += stale.length;
      }
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
  } catch (err) {
    console.warn("cleanup: orphaned upload sweep failed", err);
  }
  return deleted;
}
