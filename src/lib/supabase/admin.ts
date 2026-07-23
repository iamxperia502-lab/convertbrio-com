import { createClient } from "@supabase/supabase-js";

/**
 * Service-role client for privileged, non-request-bound work: webhooks,
 * the cleanup cron, and anything else that must bypass RLS. Never expose
 * this client or its key to the browser.
 */
export function createSupabaseAdminClient() {
  return createClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
