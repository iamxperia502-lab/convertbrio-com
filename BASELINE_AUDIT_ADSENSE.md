# ConvertBrio AdSense readiness: baseline audit and change log

Date: 2026-10-03. Scope: source review of `absolute-accretion/` plus a build and type check. The live site was not re-crawled in this pass. Approval is Google's decision and is not guaranteed.

## Verified issues (from source)

| # | Issue | Evidence | Status |
|---|-------|----------|--------|
| 1 | Homepage said JPG to PNG "adds an alpha channel" under "Need transparency?" | `src/components/SeoContent.astro` | Fixed (English) |
| 2 | "Exact" KB promises; the algorithm searches for the best quality at or below the limit | `src/pages/api/convert/image.ts` (`findCompressSettings`, `targetMet`) | Fixed in English homepage, Hero, tool copy and SEO titles |
| 3 | KB unit was undefined. The code uses 1 KB = 1,024 bytes | `image.ts` `Math.round(kb * 1024)`, `formatKb` | Stated in the input labels and tool copy |
| 4 | "Without losing quality" on compressor, converter and category copy | `SeoContent`, `ToolCategories`, `toolContent.ts` | Fixed in English |
| 5 | Orphaned uploads were never deleted. Originals are removed only when a convert route reads them, and the cron only cleans `conversion_jobs` | `src/lib/blob-input.ts`, `src/pages/api/cleanup.ts` | Fixed: cleanup now sweeps blobs older than 24h. Needs deploy and an owner check |
| 6 | "Deleted within 24 hours" for results is slightly inaccurate. `expires_at` defaults to 1 hour and the cron runs daily, so worst case is about 25h | `supabase/migrations/...init_schema.sql`, `vercel.json` | Homepage wording softened. Owner decision below |
| 7 | "256-bit encryption" and "stored encrypted at rest" are provider claims the repo cannot verify | `SecuritySection.astro`, `faq.ts` | SecuritySection reworded. FAQ and other pages still to review |
| 8 | "Every tool works the same way" and in-browser wording vs. server processing | `SecuritySection.astro`, `SeoContent.astro` | Server-side processing is now stated plainly |

## Not yet done (hypotheses or remaining work)

- Translations (de, es, fr, id, it, pt) still contain the old "exact KB", "without losing quality" and "within 24 hours" wording (`src/data/i18n-*.ts`, `src/data/tool-content/*.ts`). Needs native-quality review; `translation-review/` has CSV scaffolding.
- `faq.ts` and the remaining per-tool "deleted within 24 hours" strings in `toolContent.ts` and `toolContentNew.ts` need the same retention rewording.
- PNG/WEBP/AVIF guide: no measured samples yet. Needs owned sample images and reproducible encodes.
- Tool-page evidence (PDF compression, PDF to Word, OCR, background removal): no measured examples yet. Do not publish any without real runs.
- English UI text on the Portuguese image compressor page: not located yet.
- Ads: the AdSense script is in `src/layouts/Layout.astro`. Auto-ads placement, exclusions for error/processing screens, and consent (CMP) setup are not yet reviewed.
- Crawl checks (canonicals, hreflang, sitemap, redirects) not yet run against the live site.
- No functional, mobile or accessibility testing done yet.

## Validation so far

- `npx astro check`: 0 errors, 0 warnings.
- `npx astro build`: completes.
- The cleanup sweep has not been run against a real Blob store.

## Owner actions

1. Decide on retention: either run cleanup more often (Vercel plan limit), set `conversion_jobs.expires_at` default to match, or keep the "about 24 hours" wording.
2. Confirm Vercel Blob and Supabase encryption-at-rest statements in provider docs before restoring any stronger wording.
3. Check AdSense Auto-ads settings and the Google-certified CMP/consent message for EEA/UK users.
4. Provide Search Console indexing and Pages reports for convertbrio.com (iamxperia502@gmail.com account).
