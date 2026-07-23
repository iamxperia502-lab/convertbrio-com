// Standalone Worker, deployed separately from the main site. Cloudflare Cron Triggers
// invoke a `scheduled` handler directly — they can't target an HTTP route the way
// Vercel's Cron Jobs did (see the old vercel.json this replaces) — so this just pings
// the main site's existing /api/cleanup endpoint on a schedule instead of duplicating
// its logic here.
interface Env {
  CLEANUP_URL: string;
  CRON_SECRET: string;
}

// Minimal local shapes instead of pulling in @cloudflare/workers-types globally,
// which would conflict with the main project's DOM-lib tsconfig (duplicate
// fetch/Request/Response global declarations).
interface ScheduledEvent {
  cron: string;
}
interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

export default {
  async scheduled(_event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(
      fetch(env.CLEANUP_URL, {
        headers: { Authorization: `Bearer ${env.CRON_SECRET}` },
      })
    );
  },
};
