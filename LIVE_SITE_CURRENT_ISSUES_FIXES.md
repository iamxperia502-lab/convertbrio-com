# ConvertBrio Live-Site Issues: Fix Instructions

## Purpose

Fix only the unresolved issues confirmed during the live-site audit performed on September 23, 2026.

Do not treat this document as a redesign brief, a weekly plan, or a request for unrelated improvements. Implement all applicable fixes, validate them, and deploy them together when they are ready.

## Mandatory Design Freeze

Do not change the existing visual design.

The following must remain visually unchanged:

- Page layouts and section order.
- Colors, typography, spacing, borders, shadows, radii, and backgrounds.
- Header, footer, navigation, tool cards, upload boxes, buttons, forms, tables, FAQ sections, and content widths.
- Desktop and mobile breakpoints.
- Icons, logo, dark mode, and animation style.

Fixes must reuse the existing components, design tokens, styles, and page templates. Functional or accessibility corrections may change code behavior and text, but must not introduce a new visual system or redesign existing pages.

## 1. Repair Broken Links on Localized Pages

### Confirmed issue

The live crawl found 36 broken internal links. Each of the 6 non-English versions links to 6 localized routes that do not exist:

- `/<lang>/about`
- `/<lang>/blog`
- `/<lang>/contact`
- `/<lang>/privacy`
- `/<lang>/terms`
- `/<lang>/trust`

Affected language prefixes:

- `/pt`
- `/es`
- `/fr`
- `/de`
- `/it`
- `/id`

### Required implementation

Update `src/components/Header.astro` and `src/components/Footer.astro` so routes receive a locale prefix only when a localized route actually exists.

Until translated versions of these pages are created, link all localized headers and footers to the existing English URLs:

- `/about`
- `/blog`
- `/contact`
- `/privacy`
- `/terms`
- `/trust`

Do not create empty, duplicated, automatically translated, redirect-only, or placeholder pages to eliminate the 404 responses.

Create a route helper that distinguishes:

- Routes that exist in every supported locale, such as localized home, all-tools, and approved localized tool pages.
- English-only routes, which must remain unprefixed.

Do not use the general `localePath()` helper for an English-only route unless the helper is updated to understand route availability.

### Validation

- Crawl every internal link found on all 150 sitemap pages.
- Confirm that no internal link returns 404 or another 4xx response.
- Confirm localized home, all-tools, and supported localized tool links still use their correct language prefixes.
- Confirm English-only links open the existing English page without an unnecessary redirect.

## 2. Fix the Browser Conversion Failure

### Confirmed issue

A live test on `/tools/compress-image` used a synthetic 35 KB JPEG with a 20 KB target. The visible upload reached 76%, then ended with `Failed to fetch` and did not show a download.

The production token, Blob upload, and conversion endpoints were also tested directly. They returned HTTP 200 and produced an 18,390-byte JPEG. The conversion engine therefore worked during the audit, while the normal browser workflow failed.

### Required investigation

Reproduce the complete browser path used by `src/lib/upload-client.ts`:

1. Request a client upload token from `/api/blob-upload`.
2. Upload the file to the private Vercel Blob destination.
3. Submit the returned Blob pathname to `/api/convert/image`.
4. Receive the converted response.
5. Create the browser download handle.
6. Display the persistent Download link.

Inspect the exact failed request in browser developer tools. Record:

- Request URL and method.
- HTTP status or browser network error.
- Response body when available.
- CORS headers.
- Content Security Policy reports.
- Whether the failure occurs before or after `onUploaded()`.
- Whether an extension, privacy feature, content blocker, or tracking protection changes the result.

Test the workflow with a small synthetic file first. Then test files above 4.5 MB to confirm the Blob upload path solves the serverless request-body limit.

### Required implementation

- Fix the root network, CORS, Blob configuration, environment, or client-handling problem found during reproduction.
- Preserve private Blob access.
- Preserve the 100 MB server-side upload limit.
- Preserve immediate best-effort deletion after the conversion service reads an uploaded Blob.
- Do not fall back to routing large raw file bodies through a Vercel Function.
- Do not expose Blob read/write credentials to the browser.
- Replace the raw `Failed to fetch` message with a safe, useful explanation and next step.
- Preserve the existing form and progress-bar design.
- Keep the Convert button disabled only while an active conversion is running.
- Ensure an error restores a usable form without making the user reload the page.
- Ensure a successful conversion displays a persistent Download link even if the automatic download is blocked.

### Browser coverage

Test at minimum:

- Current Chrome desktop.
- Current Firefox desktop.
- Current Safari desktop.
- Android Chrome.
- iPhone Safari.
- A browser with common tracking protection or content blocking enabled.

### Tool coverage

After fixing the shared upload path, perform one successful live conversion for every implemented operation family:

- Image conversion.
- Exact-size image compression.
- Image resize or crop.
- PDF conversion or compression.
- Multi-file PDF operation.
- Office conversion.
- OCR.
- An available AI operation.

### Validation

- The 35 KB audit image completes with a 20 KB target.
- The result is no larger than 20 KB.
- The Download link remains usable after the automatic download attempt.
- A network failure produces a helpful recovery message.
- An unsupported file produces a specific validation message.
- No orphaned test Blob remains after a completed conversion.

## 3. Implement Product Analytics Events

### Confirmed issue

The required conversion-funnel events were not present in the source used by the live site.

### Required events

Add the following events to the homepage quick uploader and every tool form:

- `file_selected`
- `conversion_started`
- `conversion_completed`
- `download_completed`
- `conversion_failed`
- `tool_feedback_submitted`

### Allowed event parameters

Use only non-personal operational parameters:

- `tool_slug`
- `tool_category`
- `input_format`
- `output_format`
- `file_count`
- `size_band`
- `error_category`
- `processing_mode`

Never send any of the following to analytics:

- Filenames.
- File or document contents.
- Extracted OCR text.
- Blob paths or download URLs.
- Contact-form values.
- Account identifiers.
- Raw exception messages that could contain sensitive data.

Map technical errors to a controlled `error_category`, such as:

- `validation`
- `upload_token`
- `blob_upload`
- `conversion_api`
- `download`
- `network`
- `unsupported_format`
- `file_too_large`
- `unknown`

### Event timing

- Fire `file_selected` after a valid file selection or drop.
- Fire `conversion_started` once per submitted conversion, after client validation succeeds.
- Fire `conversion_completed` only after a successful conversion response is fully received.
- Fire `download_completed` when the user activates the persistent Download link. Do not assume an automatic programmatic click proves that a file was saved.
- Fire `conversion_failed` once per failed attempt.
- Fire `tool_feedback_submitted` only after a feedback choice is submitted.

Mark `conversion_completed` as the primary GA4 key event after verifying event collection.

### Prevent duplicate analytics

The global layout currently loads both direct `gtag.js` configuration and Google Tag Manager.

Use Google Tag Assistant and GA4 DebugView to determine whether the GTM container also configures the same GA4 property. Ensure one page view and one copy of each custom event are recorded per action.

Choose one ownership model:

- Keep GA4 configuration and custom events in GTM, removing duplicate direct configuration; or
- Keep direct GA4 configuration and remove the duplicate GA4 configuration from GTM.

Do not remove unrelated consent behavior while resolving duplication.

### Validation

- Test every event in GA4 DebugView.
- Confirm one event is emitted per qualifying action.
- Confirm failed conversions never emit `conversion_completed`.
- Confirm no filename or document data appears in event parameters.
- Confirm consent choices continue to work.

## 4. Complete Visible Localization

### Confirmed issue

Localized pages contain mixed-language content. For example, `/de/tools/compress-image` renders its primary interface in German while the complete benchmark section remains in English. Other visible English text includes items such as `Skip to content`, `My Work`, `Switch to dark mode`, and some tool labels.

### Required implementation

Audit every visible string on:

- Each localized homepage.
- Each localized all-tools page.
- Every localized tool page.
- Shared header and footer components.
- Tool controls and progress/error states.
- Benchmark, methodology, limitations, FAQ, related-tool, and CTA sections.
- Accessibility labels and screen-reader-only text.

Move hardcoded shared strings into the established locale data system.

Update `CompressImageBenchmark.astro` to accept translated content or render a locale-specific data set. Do not display the English benchmark inside non-English pages unless the page clearly changes to the English version.

Translate meaning, not keywords mechanically. Preserve technical values, file formats, dimensions, and measured results exactly.

If a substantial section cannot be professionally translated, do one of the following:

- Keep that entire page English and remove its localized alternate; or
- Temporarily remove the untranslated supplementary section from the localized page.

Do not publish partially translated pages as complete local-language experiences.

### Validation

- Manually review each supported language with a fluent reviewer or qualified translator.
- Search rendered localized HTML for known English interface strings.
- Confirm headings, form labels, errors, buttons, accessibility names, metadata, FAQs, and supporting content use the selected language.
- Confirm `lang`, canonical, and hreflang values remain correct.

## 5. Add the Missing High-Value Tools

### Confirmed issue

The following tools from the approved implementation brief were not found on the live site:

1. Exact-size PDF compressor.
2. Photo and signature resizer.
3. Batch exact-size image compressor.
4. Image to Text.
5. Scan to Word.
6. Visual PDF page organizer.
7. Metadata remover.

### General rules

- Build each as a complete working tool before making its page indexable.
- Reuse the current tool-page layout and controls.
- Do not add placeholder or “coming soon” tool pages.
- Add each tool to the sitemap only after live functional testing passes.
- Give each tool a distinct search intent, title, description, H1, supporting content, FAQ, structured data, and related tools.
- Do not create separate thin pages for every possible target file size or dimension.

### Exact-size PDF compressor

- Accept a maximum size in KB or MB.
- Use iterative compression rather than claiming an exact result after one pass.
- Display the achieved size.
- Explain when a target cannot be reached without unacceptable quality loss.
- Never claim success when the output exceeds the requested maximum.

### Photo and signature resizer

- Support width and height in pixels.
- Support a maximum file size.
- Support common aspect-ratio requirements.
- Provide presets only for requirements that can be accurately maintained.
- Allow custom values for unsupported forms and portals.

### Batch exact-size image compressor

- Accept multiple images.
- Allow one target size for the complete batch.
- Process files independently and report success or failure per file.
- Provide a ZIP download while retaining individual downloads.

### Image to Text and Scan to Word

- Create distinct interfaces only if their outputs are genuinely different.
- Image to Text should return selectable text with an appropriate text download.
- Scan to Word should generate an editable DOCX.
- Clearly disclose OCR limitations for handwriting, low-resolution scans, tables, and complex layouts.

### Visual PDF page organizer

- Render page thumbnails.
- Support reordering, rotation, and deletion.
- Provide accessible buttons and keyboard alternatives to drag-and-drop.
- Confirm destructive page deletion before creating the result.

### Metadata remover

- Show which supported metadata categories will be removed.
- Remove metadata without silently changing the primary content format.
- Explain that some formats may retain structural information required to remain valid.

### Validation

- Test accepted formats, invalid formats, maximum sizes, empty files, encrypted files where relevant, and corrupt files.
- Confirm every published tool completes its primary task.
- Confirm output files open correctly.
- Confirm the tool emits the required analytics events.
- Confirm the new page visually matches existing tool pages.

## 6. Create Dedicated Category Landing Pages

### Confirmed issue

Primary category navigation currently points to fragments such as:

- `/all-tools#pdf`
- `/all-tools#image`
- `/all-tools#document`
- `/all-tools#compress`
- `/all-tools#ai`

The approved dedicated category hubs were not implemented.

### Required implementation

Create useful landing pages for the primary categories using the current visual components:

- PDF tools.
- Image tools.
- Document tools.
- Compression tools.
- OCR tools.

Create an AI hub only if enough complete AI tools exist to make it independently useful.

Each hub must contain:

- A clear category H1 and short introduction.
- Links to every complete tool in that category.
- Short task-focused descriptions.
- Recommended workflows that connect related tools.
- Links to relevant original articles.
- Breadcrumb structured data.
- A unique title, meta description, canonical, and Open Graph metadata.

Update header, homepage category cards, footer, tool pages, and appropriate articles to link to these hubs.

Do not duplicate complete tool-page copy on category hubs. Do not create a hub that is only a grid of links.

### Validation

- Each hub returns HTTP 200.
- Each hub contains one H1.
- Each hub is included once in the sitemap.
- Category navigation no longer depends solely on fragments.
- Every hub links only to working tools.
- Every priority tool links back to its relevant hub.

## 7. Correct Misleading Homepage Category Examples

### Confirmed issue

The homepage OCR category lists `Image to Text` and `Scan to Word`, but those tools do not currently exist. The category link opens only OCR PDF.

### Required implementation

Until those tools are live, remove their names from the homepage category examples or replace them with accurate descriptions of currently available functionality.

Once the tools are complete:

- Add direct links to them from the OCR hub.
- Update the homepage OCR card using the existing card design.
- Ensure each displayed tool name corresponds to a working, discoverable page.

Do not present features or tools as available before they work.

## 8. Add Lightweight Tool Feedback

### Confirmed issue

No tool-level success feedback control was found.

### Required implementation

After a successful conversion, show a compact feedback question using existing form/button styling:

> Did this result work for you?

Provide:

- Yes.
- No.
- An optional controlled reason after “No,” such as quality, formatting, size, download, or other.

Do not request filenames, file contents, personal details, or free-text document information.

Emit `tool_feedback_submitted` with only:

- Tool slug.
- Yes/no result.
- Controlled reason when provided.

The feedback control must not interrupt the download or require an account.

## 9. Improve Weak or Truncated Search Snippets

### Confirmed issue

The crawl found:

- Several titles long enough to risk truncation, especially blog and translated titles.
- Several descriptions above approximately 165 characters.
- Many converter descriptions below 80 characters and too generic to communicate a useful distinction.

Examples of overly short descriptions include format pages that currently say only `Convert JPG images to PNG.` or an equivalent sentence.

### Required implementation

Review every sitemap title and description using pixel-aware SERP preview checks rather than relying only on character counts.

For short converter descriptions, include:

- Exact input and output formats.
- The most important useful differentiator.
- Free/no-sign-up wording only when accurate.
- A natural action phrase.

For long titles and descriptions:

- Put the core query and differentiator first.
- Remove repeated words and unnecessary branding when needed.
- Preserve natural language in every locale.

Do not create duplicate metadata. Do not stuff synonyms or size variations into titles.

### Validation

- Crawl all sitemap pages again.
- Confirm titles and descriptions remain unique.
- Review desktop and mobile SERP previews for priority pages.
- Confirm HTML entities do not distort the measured display length.

## 10. Complete Performance Verification

### Confirmed limitation

A full Core Web Vitals performance trace could not be completed during the audit because the dedicated performance-tracing service was unavailable and the public PageSpeed API quota was unavailable. Mobile layout testing did confirm no horizontal overflow at 390 pixels.

### Required implementation and validation

Run Lighthouse or Chrome DevTools performance traces on production for:

- Homepage.
- All-tools page.
- Compress Image.
- Compress PDF.
- One localized tool page.
- One blog article.

Test mobile and desktop cold loads.

Record:

- LCP.
- CLS.
- INP when field data is available; otherwise TBT as a lab diagnostic.
- FCP.
- TTFB.
- Total transferred JavaScript, CSS, images, and fonts.

Investigate only measured problems. Preserve the existing design while fixing performance through loading strategy, caching, code splitting, script control, image sizing, and asset optimization.

## 11. Remove Remaining Build Hints

### Confirmed issue

`astro check` passed with zero errors but reported 5 hints:

- External scripts in `src/layouts/Layout.astro` are treated as inline implicitly.
- An unnecessary `await` exists in `src/lib/face-detection.ts`.
- An unused `nav` variable exists in `src/pages/[lang]/index.astro`.
- An unused `destination` variable exists in `src/pages/tools/internet-speed-test.astro`.

### Required implementation

- Add explicit `is:inline` where appropriate for external script tags, following Astro’s expected behavior.
- Remove the ineffective `await` only after confirming the face-detection module initializes correctly.
- Remove unused variables.
- Do not change page behavior or appearance while removing these hints.

### Validation

Run:

```bash
npm run astro -- check
npm run build
```

Both commands must finish successfully, and `astro check` should report no errors, warnings, or avoidable hints.

## Final Deployment Validation

Complete every check below after implementing the fixes:

- Crawl every sitemap URL and every internal link.
- Confirm all sitemap URLs return HTTP 200.
- Confirm no internal link returns 4xx or 5xx.
- Confirm one H1 on every indexable page.
- Confirm unique titles and descriptions.
- Confirm self-referencing canonicals.
- Confirm reciprocal hreflang annotations.
- Confirm localized pages contain no unintended English sections.
- Confirm private/account/error pages remain `noindex, follow` where applicable.
- Confirm all new tools work before entering the sitemap.
- Complete the cross-browser conversion test matrix.
- Confirm all analytics events in GA4 DebugView.
- Confirm analytics contains no sensitive file information.
- Confirm the full mobile and desktop layouts retain the current visual design.
- Confirm dark mode still works.
- Confirm keyboard navigation and visible focus still work.
- Run `npm run astro -- check`.
- Run `npm run build`.

## Completion Criteria

This fix set is complete only when:

- The 36 localized broken links are eliminated.
- The normal browser conversion workflow succeeds reliably.
- The complete conversion funnel is measurable without collecting personal file data.
- Localized pages no longer mix substantial English sections with translated content.
- Displayed tool names correspond to working tools.
- The missing approved high-value tools and category hubs are complete and indexable.
- Tool-level feedback is measurable.
- Priority search snippets are clear and non-duplicative.
- Measured performance has no unresolved high-impact regression.
- Validation and production builds pass.
- The existing visual design remains unchanged.
