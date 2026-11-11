import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

/**
 * Real `lastmod` dates for the sitemap without depending on git at build time
 * (Vercel clones can be shallow, which made every page fall back to the build
 * date).
 *
 * Each page is identified by a key (its URL path) and a content fingerprint:
 * a hash of the data and text that actually render on that page. The committed
 * manifest (src/data/lastmod-manifest.json) stores {hash, lastmod} per key.
 *
 *   - hash unchanged  -> keep the stored lastmod (the page didn't change)
 *   - hash changed    -> lastmod = today (the content did change)
 *   - new page        -> the optional seed date, otherwise today
 *
 * To persist new dates, build once with UPDATE_LASTMOD=1 and commit the
 * manifest:   UPDATE_LASTMOD=1 npm run build
 * Without that flag the manifest is read-only, so ordinary builds never write
 * files. If you forget, changed pages simply show the build date until the
 * manifest is updated, and unchanged pages keep their stored dates.
 */
type Entry = { hash: string; lastmod: string };
type Manifest = Record<string, Entry>;

const root = process.cwd();
const MANIFEST_PATH = join(root, "src/data/lastmod-manifest.json");

export function readFiles(...paths: string[]): string {
  return paths.map((p) => readFileSync(join(root, p), "utf-8")).join("\n");
}

/** Last commit date of the given files (YYYY-MM-DD), or undefined if unavailable. */
export function gitDate(...paths: string[]): string | undefined {
  try {
    const dates = paths
      .map((p) => execFileSync("git", ["log", "-1", "--format=%cs", "--", p], { cwd: root, encoding: "utf-8" }).trim())
      .filter(Boolean)
      .sort();
    return dates.at(-1);
  } catch {
    return undefined;
  }
}

export class LastmodTracker {
  private previous: Manifest;
  private next: Manifest = {};
  readonly today = new Date().toISOString().slice(0, 10);

  constructor() {
    this.previous = existsSync(MANIFEST_PATH) ? (JSON.parse(readFileSync(MANIFEST_PATH, "utf-8")) as Manifest) : {};
  }

  stamp(key: string, content: unknown, seed?: string): string {
    const text = typeof content === "string" ? content : JSON.stringify(content);
    const hash = createHash("sha1").update(text).digest("hex").slice(0, 16);
    const prev = this.previous[key];
    const lastmod = prev && prev.hash === hash ? prev.lastmod : prev ? this.today : (seed ?? this.today);
    this.next[key] = { hash, lastmod };
    return lastmod;
  }

  /** Writes the manifest only when UPDATE_LASTMOD=1 (pages that no longer exist are dropped). */
  save(): void {
    if (process.env.UPDATE_LASTMOD !== "1") return;
    const sorted = Object.fromEntries(Object.entries(this.next).sort(([a], [b]) => a.localeCompare(b)));
    writeFileSync(MANIFEST_PATH, `${JSON.stringify(sorted, null, 2)}\n`);
  }
}
