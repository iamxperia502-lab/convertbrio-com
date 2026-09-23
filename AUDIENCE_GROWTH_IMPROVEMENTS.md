# ConvertBrio Audience Growth Improvements

## Objective

Increase qualified organic visitors, successful tool usage, repeat visits, and recommendations while keeping the existing visual design unchanged.

The website should become the most useful destination for people who need to convert, compress, resize, clean, or prepare files for upload requirements. Improvements must prioritize genuine user value over publishing a large number of near-duplicate pages.

## Mandatory Design Freeze

Do not redesign the website while implementing this document.

The following must remain unchanged unless a separate design change is explicitly approved:

- Overall visual identity and page composition.
- Colors, typography, font sizes, shadows, borders, radii, spacing system, and backgrounds.
- Header, footer, hero, cards, upload box, buttons, forms, FAQ sections, and content-section appearance.
- Desktop and mobile navigation appearance.
- Existing responsive breakpoints and general page layout.
- Logo, icons, visual style, dark mode, and animation style.
- Existing wording that is unrelated to an approved SEO, accuracy, trust, or usability correction.

New functionality must reuse the existing components, CSS tokens, card styles, form controls, content widths, and page templates. New pages must look like native extensions of the current site. Do not introduce a new design system, component library, theme, visual section type, decorative banner, dashboard, or landing-page style.

Content may be added below existing tool interfaces using the established `ToolContent`, FAQ, table, benchmark, and related-tool patterns. Functional controls required by a new tool may be added inside the existing tool form, using the current form styling.

## Current Baseline

Use these facts as the starting point for implementation and later comparison:

- The sitemap contains 150 URLs and is successfully processed by Google Search Console.
- Search Console reported 113 of 150 submitted URLs indexed as of September 18, 2026.
- The remaining 37 submitted URLs were `Discovered – currently not indexed`.
- Search Console reported zero submitted URLs under `Crawled – currently not indexed`.
- The live sitemap URLs passed checks for HTTP 200 responses, titles, meta descriptions, canonical URLs, and one H1 per page.
- The site has 42 live internal tools, 13 blog posts, localized pages, privacy/legal/trust pages, and structured data.
- Google Analytics showed early organic and direct traffic, but no useful conversion event was configured as a key event.

Do not interpret the 37 pending pages as rejected content. Google had discovered but not crawled those URLs. Obtain the URL-level Search Console export before making indexing decisions about them.

## Product Positioning

Use this product focus when deciding whether to add a tool or article:

> ConvertBrio helps people make images, PDFs, photos, signatures, and documents satisfy real upload, application, sharing, and compatibility requirements.

Do not turn ConvertBrio into a collection of unrelated utilities. File preparation, conversion, compression, document handling, OCR, privacy, and upload requirements are in scope. Generic calculators, downloaders, entertainment utilities, networking utilities, and unrelated generators are out of scope.

Move the external Internet Speed Test out of the main tool catalogue. It may remain linked under an unobtrusive “Other projects” area, but it must not be presented as a ConvertBrio file tool or counted as one.

## Measurement and Analytics

Implement useful product analytics before evaluating traffic or content performance.

### Required GA4 events

Add the following events to the homepage quick uploader and every tool form:

- `file_selected`
- `conversion_started`
- `conversion_completed`
- `download_completed`
- `conversion_failed`
- `tool_feedback_submitted`

Use safe, non-personal parameters where applicable:

- `tool_slug`
- `tool_category`
- `input_format`
- `output_format`
- `file_count`
- `size_band`
- `error_category`
- `processing_mode` such as `browser` or `server`

Never send filenames, document contents, extracted text, download URLs, user-entered messages, or other personal data to analytics.

Mark `conversion_completed` as the primary GA4 key event. Optionally mark `download_completed` as a secondary key event.

Create a measurable funnel:

1. Tool page viewed.
2. File selected.
3. Conversion started.
4. Conversion completed.
5. Result downloaded.

Report conversion success by tool, device, country, landing page, and traffic source. Use this data to decide which existing tools to improve and which new workflows to build.

### Prevent duplicate analytics

The global layout currently loads both direct `gtag.js` and Google Tag Manager. Confirm whether the GA4 configuration also exists inside GTM. Use one authoritative GA4 configuration and prevent duplicate `page_view` and custom-event collection.

Validate the final configuration with GA4 DebugView and Tag Assistant.

### Product feedback

After a successful download, add an optional one-question feedback control using the existing visual style:

- “Did this file work for what you needed?”
- Answers: Yes / No.

If the answer is No, allow the user to select a non-sensitive reason such as incorrect size, incorrect dimensions, unsupported format, quality too low, conversion error, or other. Do not require an account.

## Search Console and Indexing

### Obtain URL-level indexing data

In Search Console, open `Discovered – currently not indexed`, export the Examples table, and group the URLs by:

- Language.
- Homepage, category, tool, article, or system page.
- Date introduced.
- Internal-link depth.

Do not remove, noindex, or rewrite all 37 URLs based only on the aggregate count.

### Prioritize crawling

Ensure the most important URLs are linked from the homepage, relevant category hubs, related-tool sections, and relevant articles. Priority pages include:

- Compress Image.
- HEIC to JPG.
- Compress PDF.
- PDF to Word.
- OCR PDF.
- Word to PDF.
- JPG to PDF.
- Passport Photo Maker.
- Photo & Signature Resizer when implemented.
- Exact-size PDF Compressor when implemented.

Request indexing manually only for a small number of important pages after substantial changes. Do not submit every URL repeatedly.

### Resolve historical URLs

Export the URL examples for `Page with redirect` and `Not found (404)`.

For each redirect:

- Confirm it uses a permanent 301 or 308 when the move is permanent.
- Point directly to the final destination without a redirect chain.
- Remove the redirecting URL from the sitemap.
- Replace internal links with the final URL.

For each 404:

- Add a 301 redirect only when a closely equivalent replacement exists.
- Keep a legitimate 404 or 410 when no equivalent page exists.
- Remove every internal link pointing to the missing URL.
- Never redirect unrelated missing pages to the homepage.

### Sitemap accuracy

- Include only canonical, indexable, HTTP 200 pages.
- Exclude redirects, account pages, errors, API routes, dashboards, and non-indexable unfinished tools.
- Keep `lastmod` accurate for the individual page rather than changing every tool URL when one shared data file changes.
- Continue publishing reciprocal hreflang annotations only for pages with complete, equivalent translations.

## New High-Value Tools

Build complete workflows instead of more basic format permutations.

### 1. Compress PDF to an exact size

Create a working tool that accepts a maximum target such as:

- 100 KB.
- 200 KB.
- 500 KB.
- 1 MB.
- 2 MB.
- Custom target.

Requirements:

- Show original size and output size.
- Explain whether the target was reached.
- Preserve text and vector elements where possible.
- Reduce embedded-image quality and resolution progressively.
- Warn when the requested target is unlikely without removing pages or making the document unreadable.
- Show clear limitations for text-only PDFs, scanned PDFs, forms, signatures, encrypted documents, and very large files.
- Provide a normal best-effort download if the exact target cannot be reached, clearly labelled as such.
- Add measured benchmark results using several representative PDF types.

Do not claim “exact size” unless the output reliably remains at or below the requested maximum.

### 2. Photo & Signature Resizer

Create one unified tool for portal-ready photos and signatures.

Required controls:

- Width and height in pixels.
- Aspect ratio.
- Minimum KB and maximum KB.
- Output format.
- DPI metadata where relevant.
- Crop position.
- Automatic trim around signature ink.
- White-paper/background cleanup.
- Background replacement for photo workflows where supported.
- Preview before download.

Presets may be included, but every value must remain editable. Presets must cite an official, current requirement and show a “last checked” date. Do not claim a preset is universally valid for all application years or portals.

### 3. Batch exact-size image compression

Extend the existing image compressor rather than creating a separate competing design.

Requirements:

- Multiple-file upload.
- Shared target-size selection.
- Presets for 20 KB, 50 KB, 100 KB, 200 KB, and 500 KB.
- Custom target.
- Individual before/after results.
- Per-file warnings.
- Download files separately or as one ZIP.
- Preserve the existing single-file workflow for users who upload one file.

### 4. Image to Text and Scan to Word

Reuse the existing OCR infrastructure to support image uploads.

Requirements:

- Accept common image formats and scanned PDFs.
- Display recognized text for copying.
- Allow TXT and DOCX download.
- Clearly distinguish plain OCR text from layout-preserving document conversion.
- State supported languages and known accuracy limits.
- Provide sample results from clean scans, phone photos, receipts, and low-quality images.

### 5. Visual PDF page organizer

Create a unified PDF page workspace supporting:

- Thumbnail preview.
- Reordering.
- Rotation.
- Removing pages.
- Extracting selected pages.
- Downloading the reorganized PDF.

Reuse existing merge, split, and rotate functionality. Do not create disconnected duplicated back-end implementations when shared operations can be used.

### 6. Metadata remover

Create privacy-focused metadata removal for supported images and PDFs.

Requirements:

- Remove EXIF, GPS, camera, author, producer, and other supported metadata.
- Show which metadata categories were found and removed without transmitting their values to analytics.
- Process locally in the browser where feasible.
- Explain which metadata cannot be removed safely.

## Improvements to Existing Tools

### Compress Image

Treat Compress Image as the flagship acquisition page.

Add without redesigning the page:

- Target-size preset buttons.
- Batch processing.
- Output-format choice.
- Optional exact dimensions.
- Before/after preview.
- Original and output dimensions.
- Percentage saved.
- A clear target-reached result.
- A warning when resizing was required to hit the target.
- A checklist explaining why a portal may still reject a file because of format, pixel dimensions, DPI, orientation, filename, or minimum-size rules.
- Browser-local processing for suitable image formats when technically reliable.

Retain the existing measured benchmark and expand it with additional representative photos, scans, screenshots, transparent graphics, and signatures.

### HEIC to JPG

- Support batch conversion.
- Preserve orientation.
- Explain metadata handling.
- Allow optional output-quality control.
- Test results on iPhone portrait, Live Photo still, transparency, wide-gamut color, and large-resolution inputs.

### Compress PDF

- Show original and output size before download.
- Explain what was compressed.
- Distinguish scanned PDFs from text PDFs.
- Link directly to the exact-size mode when implemented.
- Publish measured results for multiple PDF types.

### PDF to Word

- State clearly what formatting is preserved.
- Provide sample before/after downloads.
- Explain multi-column, table, image, font, and scanned-document limitations.
- Route scanned documents through OCR when appropriate, with the user’s knowledge.

### OCR PDF

- State supported languages.
- Provide a text preview.
- Allow copy, TXT, searchable PDF, and DOCX output where supported.
- Provide confidence or warnings for low-quality pages without pretending OCR is perfectly accurate.

### Passport Photo Maker

- Make requirements editable.
- Add a visible crop/head-position preview.
- Allow background selection where regulations permit.
- Provide print-sheet output only when physical dimensions can be generated accurately.
- Avoid claiming that an automatically created photo is guaranteed to be accepted by any authority.

## Category Hubs and Internal Linking

Create dedicated indexable category hubs while preserving the existing header appearance. Existing navigation labels may point to the new URLs without visual changes.

Required hubs:

- `/image-tools`
- `/pdf-tools`
- `/document-tools`
- `/photo-upload-tools`

Each hub must include:

- A concise explanation of the problems covered.
- Links to every live relevant tool.
- A “Which tool should I use?” comparison table.
- Common workflows.
- Relevant original guides.
- Common failure messages and solutions.
- Links to privacy and file-handling information where appropriate.

Do not create a hub containing only a grid of links. Each hub needs useful editorial guidance.

### Internal-link rules

- Every indexable tool must be linked from at least one category hub.
- Every article must link to the relevant working tool near the first actionable instruction.
- Every tool page must link to genuinely related tools and guides.
- Use descriptive anchor text, not repeated “click here” links.
- Do not overlink every keyword variation.
- Keep localized internal links within the same language when the destination exists.
- Fall back to English only when the absence of a translation is clear to the user.

## Content Improvements

### Content standard

Do not publish content merely to increase the page count. A new page must contribute at least one of the following:

- A working tool.
- Original measurements.
- A reproducible test.
- A useful decision table.
- Screenshots or sample files created by ConvertBrio.
- A detailed troubleshooting workflow.
- Current, cited requirements.
- First-hand technical explanation or limitations.

### Upgrade priority tool pages

Upgrade these pages with original evidence:

- Compress Image.
- Compress PDF.
- HEIC to JPG.
- PDF to Word.
- OCR PDF.
- Word to PDF.
- JPG to PDF.
- Passport Photo Maker.

Add the following where relevant:

- Test methodology.
- Sample input.
- Sample output.
- Measured result.
- Limitations.
- Supported and unsupported cases.
- Date last tested.
- Browser/device information when behavior differs.
- Links to related tools and articles.

Do not add filler paragraphs simply to reach a word count.

### Article topics

Create or substantially expand content addressing complete user problems:

- Why a portal rejects an image even when the KB size is correct.
- How to resize a photo and signature to both pixels and KB.
- Minimum versus maximum file-size requirements.
- How to determine whether a PDF is scanned or contains real text.
- How small a scanned PDF can become before it becomes unreadable.
- Why PDF-to-Word conversion loses formatting.
- How to remove GPS and camera metadata from a photo.
- Browser-side versus server-side file processing and privacy.
- How image format affects compression at strict size limits.
- What to do when a PDF compressor barely changes the file size.
- How to prepare a phone photo for an application upload.
- How to combine, reorder, and reduce document pages before submission.

Each article must connect to a working tool and help the user complete the task.

### Avoid scaled-content problems

Do not create separate low-value pages for every minor keyword variation, such as one nearly identical page for 20 KB, 30 KB, 40 KB, 50 KB, and 100 KB.

Size-specific URLs may be created only when they:

- Load the tool in a genuinely useful preset state.
- Contain distinct, tested information about that limit.
- Serve a meaningfully different user need.
- Are not mass-generated from a template with swapped numbers.

Otherwise, keep one authoritative exact-size compressor page and allow users to choose the target.

## Authorship, Trust, and Expertise

### Blog authorship

Add an `author` field to the blog content schema and render a visible byline on every article using the existing typography and spacing.

Add Article/BlogPosting structured-data properties:

- `author` as a Person.
- `datePublished`.
- `dateModified`.
- `publisher`.
- `mainEntityOfPage`.

Add a concise author section or link to the existing About page. Explain relevant experience honestly without inventing credentials.

### Review and update signals

- Display the published date and updated date when different.
- Add “Tested with ConvertBrio” information to technical guides when applicable.
- Record substantive corrections and update dates.
- Cite authoritative sources for standards, official upload requirements, browser support, and policy statements.

### Real usage evidence

Add truthful aggregate evidence only when it can be measured reliably, such as:

- Successful conversions by tool.
- Target sizes achieved.
- Typical processing time bands.
- Anonymous user feedback rate.

Do not add fake reviews, fabricated conversion counts, unsupported accuracy percentages, or guaranteed acceptance claims.

## Localization

Keep localized pages only when the complete visible page, metadata, structured data, form messages, FAQs, limitations, and internal links are properly translated.

Requirements:

- Human-review Spanish and Portuguese first because early analytics show traffic from the Americas and these languages have strong relevance.
- Review French, German, Italian, and Indonesian pages for accuracy before expanding their page counts.
- Give localized home and all-tools pages distinct meta descriptions appropriate to their purposes.
- Use correct locale-specific terminology rather than literal English translations.
- Add locale-specific examples only when they are accurate and maintainable.
- Maintain reciprocal hreflang links.
- Do not automatically translate all English articles merely to increase URL count.
- Do not publish incomplete mixed-language pages.

## Technical SEO

### Titles and descriptions

- Keep every title unique and aligned with the exact tool function.
- Put the main task near the beginning of the title.
- Avoid excessive repetition of “free,” “online,” and “no signup.”
- Keep descriptions accurate about formats, limits, privacy, and output behavior.
- Rewrite titles based on Search Console impression and CTR data, not keyword guessing alone.

### Canonical and hreflang

- Maintain self-referencing canonicals for indexable pages.
- Do not canonicalize translated pages to English when the translated page is complete and intended for indexing.
- Omit canonicals on real 404/500 pages.
- Test canonical and hreflang changes in built HTML.

### Structured data

Continue using structured data only when the visible page supports it.

- SoftwareApplication for working tools only.
- HowTo only when the steps are visible.
- FAQPage only when the questions and answers are visible.
- BreadcrumbList for tools, category hubs, and articles.
- BlogPosting/Article with author and dates.
- Organization/WebSite on appropriate site-level pages.

Do not add review ratings or aggregate ratings without genuine visible review data.

### Account and system pages

Apply `noindex, follow` to:

- Sign-in.
- Sign-up.
- Dashboard.
- Error pages.
- Other private, account, or system-only pages.

Do not rely only on robots.txt to keep these pages out of search because a blocked crawler cannot read their HTML `noindex` directive. Keep these pages out of the sitemap.

## Privacy and File Handling

Align public claims with the actual implementation.

The current implementation uses private Vercel Blob uploads and may store converted output through Supabase conversion jobs. Update Privacy and Trust content to explain accurately:

- Where original files are uploaded.
- When the original is normally deleted.
- Where converted output may be retained.
- Maximum retention period.
- What conversion metadata is retained.
- What happens when immediate deletion fails.
- Which providers process or store data.
- Which tools run locally in the browser.
- Which tools require server processing.

Do not use a general “processed in your browser” claim on tools that upload files to a server.

Where technically practical, move common image conversion, resizing, rotation, cropping, compression, and metadata removal into the browser. Keep server processing for operations that cannot be performed reliably on the client. Show the processing mode accurately without changing the design.

## Performance and Reliability

### Core Web Vitals

- Keep LCP below 2.5 seconds at the 75th percentile where possible.
- Keep INP below 200 milliseconds.
- Keep CLS below 0.1.
- Monitor both mobile and desktop field data.
- Measure homepage and high-traffic tool pages separately.

### Implementation improvements

- Preserve explicit image dimensions to prevent layout shift.
- Add width and height to the benchmark images.
- Continue lazy-loading below-the-fold media.
- Keep critical fonts self-hosted and preloaded appropriately.
- Avoid `transition-all`; transition only the properties that animate.
- Keep heavy conversion and AI libraries out of initial page bundles.
- Load tool-specific code only when that tool requires it.
- Avoid loading analytics, advertising, authentication, and account logic unnecessarily on public static pages.
- Skip Supabase authentication initialization on public prerendered pages when no session-dependent UI is needed.
- Review direct GA4, GTM, consent, Clarity, and Speed Insights scripts for duplication and loading impact.

### Reliability

- Test every live tool with valid, oversized, corrupted, unsupported, multi-page, and password-protected inputs where applicable.
- Show actionable error messages.
- Never claim a conversion succeeded when the output is empty or unchanged unexpectedly.
- Record anonymous error categories so high-failure tools can be fixed.
- Add automated tests for file-size limits, output content types, content-disposition filenames, and cleanup behavior.

### Cleanup endpoint security

Require `CRON_SECRET` for the cleanup endpoint. Fail closed when it is missing. Do not allow unauthenticated public requests to invoke cleanup behavior.

## User Retention and Cross-Tool Workflows

After a successful conversion, provide relevant next actions using the existing component styles:

- Convert another file.
- Compress the result.
- Resize the result.
- Remove metadata.
- Combine files into a PDF.
- Run OCR when the document is scanned.

Show only actions relevant to the completed tool and output format.

Examples:

- Resize photo → Compress to target KB → Remove metadata → Download.
- Scan to PDF → OCR → PDF to Word.
- Merge PDF → Reorder/remove pages → Compress PDF.
- HEIC to JPG → Resize → Compress for upload.

Do not create forced multi-step flows. The user must always be able to download the current result immediately.

Add a bookmark suggestion or copyable tool link after success. Do not request browser-notification permission for this purpose.

## Distribution and Authority Building

SEO improvements alone are not sufficient for a new domain. Distribute genuinely useful tools and original research.

### Reusable promotional assets

For each flagship tool, prepare:

- A short demonstration video.
- One clear screenshot.
- A concise problem/solution description.
- A sample input and output where safe.
- A technical explanation or benchmark.
- A direct link to the specific tool, not only the homepage.

### Relevant distribution channels

- Publish useful build stories and test results on appropriate developer and maker communities.
- Share problem-solving guides in relevant communities only when they directly answer the discussion.
- Submit the site to reputable software and alternative-product directories.
- Contact writers covering application forms, digital documents, photography workflows, privacy, and file compatibility.
- Offer accurate, embeddable resources or referenced benchmarks to universities, coaching sites, support blogs, and documentation authors.
- Produce short video tutorials for common tasks and link to the relevant tool.
- Publish original benchmark data that other sites can cite.

Do not buy links, automate promotional comments, post repetitive community submissions, use mass guest-post networks, or submit to low-quality directories.

## Search Performance Review Rules

Use Search Console query and page data to decide what to improve.

### High impressions, low CTR

- Confirm the page satisfies the query.
- Improve the title and description.
- Make the title more specific without clickbait.
- Ensure the visible H1 and introduction match the search intent.
- Add the exact answer or tool capability near the beginning of the page.

### Average position 5–20

- Add original evidence or examples.
- Improve internal linking.
- Add relevant screenshots or samples.
- Answer the related sub-problems visible in Search Console queries.
- Seek relevant editorial links.

### Traffic but poor conversion completion

- Test the tool with the actual input type suggested by the query.
- Improve error handling and compatibility.
- Clarify controls and limits without redesigning them.
- Remove unnecessary steps.
- Add the missing workflow feature instead of adding more SEO text.

### Indexed but no impressions

- Confirm that the page targets a real, distinct task.
- Merge or noindex the page if it exists only as a weak variation and has no independent value.
- Strengthen useful pages with original evidence and internal links.
- Do not keep low-value pages solely to increase the index count.

## Code-Level Corrections Identified During Audit

Implement these without visual changes:

- Replace `transition-all` in `src/components/PopularTools.astro` with explicit transitioned properties.
- Add explicit width and height attributes to images in `src/components/CompressImageBenchmark.astro`.
- Add author information to `src/content.config.ts` and `src/pages/blog/[slug].astro`.
- Prevent duplicate GA4 configuration between `gtag.js` and GTM in `src/layouts/Layout.astro`.
- Add `noindex, follow` to sign-in, sign-up, and dashboard pages.
- Skip unnecessary Supabase authentication work for public prerendered pages in `src/middleware.ts`.
- Update `src/pages/privacy.astro` and `src/pages/trust.astro` to match Vercel Blob and Supabase usage accurately.
- Require authentication for `src/pages/api/cleanup.ts` even when configuration is incomplete.
- Give localized homepage and all-tools pages distinct meta descriptions.
- Verify that all advertised homepage capabilities correspond to working discoverable tools.

## Validation Before Deployment

Run all of the following after implementation:

- `npm run astro -- check`
- `npm run build`
- Crawl every sitemap URL.
- Confirm every sitemap URL returns HTTP 200.
- Confirm one H1 per indexable page.
- Confirm unique titles and meta descriptions.
- Confirm self-referencing canonicals.
- Confirm reciprocal hreflang annotations.
- Confirm account and error pages are noindex.
- Confirm redirects and 404s are absent from the sitemap.
- Validate structured data on representative home, tool, hub, and article pages.
- Test mobile and desktop layouts without altering the approved design.
- Test keyboard navigation and visible focus.
- Test dark mode.
- Test conversion events in GA4 DebugView.
- Test that no filename or file content enters analytics.
- Test the cookie-consent and preference-reopening flow.
- Verify file deletion and retention behavior against public claims.
- Check Core Web Vitals or equivalent field data after deployment.

## Success Metrics

Track these metrics by landing page and tool:

- Search impressions.
- Organic clicks.
- Search CTR.
- Average search position.
- Indexed submitted URLs.
- Tool page views.
- File-selection rate.
- Conversion-start rate.
- Conversion-completion rate.
- Download-completion rate.
- Conversion-error rate.
- Repeat visitor rate.
- Related-tool continuation rate.
- Feedback acceptance rate.
- Referring domains and editorial backlinks.
- Core Web Vitals pass rate.

Traffic alone is not the final success measure. Growth should increase successful conversions and repeat usage without weakening privacy, reliability, search quality, or the existing design.

## Final Acceptance Criteria

The improvement work is complete only when:

- The existing design remains visually unchanged.
- Analytics measures the full conversion funnel without collecting sensitive information.
- Important existing tools contain original, useful evidence.
- New tools solve complete file-preparation workflows and work reliably.
- Category hubs and internal links make important pages easy to discover.
- Search Console exclusions have been reviewed at the URL level.
- Privacy and retention claims match the actual implementation.
- Blog authorship and update information are visible and included in structured data.
- Localized pages are complete and reviewed rather than mass-published.
- All validation checks pass before deployment.

## Authoritative References

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- Sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
