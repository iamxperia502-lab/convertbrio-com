import { createSupabaseAdminClient } from "./supabase/admin";

export const CONVERSIONS_BUCKET = "conversions";

const supabaseConfigured = Boolean(
  import.meta.env.PUBLIC_SUPABASE_URL && import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
);

/**
 * Job logging/storage is best-effort: the actual file conversion (sharp/pdf-lib)
 * must keep working even when Supabase isn't configured yet, or if a write
 * here fails transiently. Callers should never let this block the response.
 */
export async function recordConversionAttempt(toolSlug: string, userId: string | null): Promise<string | null> {
  if (!supabaseConfigured) return null;

  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("conversion_jobs")
      .insert({ user_id: userId, tool_slug: toolSlug, status: "processing" })
      .select("id")
      .single();
    if (error) throw error;
    return data.id as string;
  } catch (err) {
    console.warn("recordConversionAttempt failed:", err);
    return null;
  }
}

export async function finalizeConversionJob(jobId: string | null, outputBytes: Uint8Array, contentType: string) {
  if (!jobId || !supabaseConfigured) return;

  try {
    const admin = createSupabaseAdminClient();
    const outputPath = `${jobId}/output`;
    const { error: uploadError } = await admin.storage
      .from(CONVERSIONS_BUCKET)
      .upload(outputPath, outputBytes, { contentType, upsert: true });
    if (uploadError) throw uploadError;

    await admin.from("conversion_jobs").update({ status: "completed", output_path: outputPath }).eq("id", jobId);
  } catch (err) {
    console.warn("finalizeConversionJob failed:", err);
  }
}

export async function failConversionJob(jobId: string | null) {
  if (!jobId || !supabaseConfigured) return;

  try {
    const admin = createSupabaseAdminClient();
    await admin.from("conversion_jobs").update({ status: "failed" }).eq("id", jobId);
  } catch (err) {
    console.warn("failConversionJob failed:", err);
  }
}
