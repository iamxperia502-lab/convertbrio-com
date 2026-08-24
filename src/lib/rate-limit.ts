// Best-effort in-memory rate limiting. Vercel Firewall's rate-limit rules
// require a plan this project isn't on (confirmed via `vercel firewall
// overview` returning "IP Bypass is unavailable for this plan"), and a
// shared store (Upstash Redis) is a separate service to provision. This
// module is a stopgap: it blocks obvious single-instance abuse (a script
// hammering one endpoint) but each serverless instance keeps its own
// counters, so it does NOT enforce a hard global limit across concurrent
// or multi-region instances. Replace with an Upstash-backed limiter if
// this becomes a real abuse vector.
const hits = new Map<string, number[]>();

// Bound memory: drop stale keys once in a while rather than on every call.
let lastSweep = Date.now();
const SWEEP_INTERVAL_MS = 5 * 60 * 1000;

function sweep(now: number) {
  if (now - lastSweep < SWEEP_INTERVAL_MS) return;
  lastSweep = now;
  for (const [key, timestamps] of hits) {
    if (timestamps.length === 0 || now - timestamps[timestamps.length - 1] > SWEEP_INTERVAL_MS) {
      hits.delete(key);
    }
  }
}

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

/**
 * Sliding-window limiter: at most `limit` calls per `windowMs` for a given
 * key (typically `${ip}:${bucket}`).
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const windowStart = now - windowMs;
  const timestamps = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= limit) {
    const retryAfterSeconds = Math.ceil((timestamps[0] + windowMs - now) / 1000);
    hits.set(key, timestamps);
    return { allowed: false, retryAfterSeconds };
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return { allowed: true, retryAfterSeconds: 0 };
}
