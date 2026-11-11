# Claude Code Task: Publish and Validate ConvertBrio `ads.txt`

## Objective

Add the required Google AdSense `ads.txt` file to the ConvertBrio Astro project, validate it locally, and verify it on the production domain after deployment.

Do not apply for AdSense, request an AdSense review, or operate the AdSense account. The website owner will complete those account actions manually after the production file is verified.

## Project Context

- Project: ConvertBrio
- Framework: Astro
- Production URL: `https://www.convertbrio.com/`
- Required production URL: `https://www.convertbrio.com/ads.txt`
- Project public-assets directory: `public/`
- Publisher ID currently present in the site’s AdSense script: `ca-pub-4630473399054348`
- Corresponding ads.txt publisher identifier: `pub-4630473399054348`

## Strict Scope

Only implement the `ads.txt` setup and its necessary validation.

Do not:

- Change the website’s design, layout, colors, typography, spacing, components, navigation, or responsive behavior.
- Change ad placement or add new ad units.
- Modify consent behavior.
- Modify Google Analytics, Google Tag Manager, or Microsoft Clarity.
- Change SEO content, tool content, blog content, metadata, routes, or the sitemap.
- Add an Astro page or API route for `ads.txt` when a static public file is sufficient.
- Add explanatory HTML to the file.
- Submit or request an AdSense review.
- Make unrelated formatting, dependency, or code changes.

## Step 1: Inspect the Existing Configuration

Before editing:

1. Inspect `src/layouts/Layout.astro` and confirm the active AdSense client identifier.
2. Search the repository for every occurrence of:
   - `ca-pub-`
   - `pub-`
   - `ads.txt`
3. Confirm that the expected publisher ID is `pub-4630473399054348`.
4. If the repository contains a different active publisher ID, stop and report the discrepancy instead of guessing which ID is correct.
5. If `public/ads.txt` already exists, inspect it and update it idempotently rather than creating a duplicate file or duplicate seller entry.

## Step 2: Create the Static File

Create this file:

```text
public/ads.txt
```

Its complete content must be exactly:

```text
google.com, pub-4630473399054348, DIRECT, f08c47fec0942fa0
```

File requirements:

- Plain UTF-8 text.
- No HTML.
- No Markdown formatting.
- No quotation marks.
- No duplicate lines.
- No byte-order mark.
- A single newline at the end of the file is acceptable.

Do not add entries for any advertising network that is not currently authorized by the website owner.

## Step 3: Validate the Repository Change

Run these checks from the project root:

```bash
npm run astro -- check
npm run build
```

Both commands must complete successfully.

After the build, confirm that the generated/static deployment output contains `ads.txt` and that its content is unchanged.

Also verify:

```bash
test -f public/ads.txt
wc -l public/ads.txt
grep -Fx "google.com, pub-4630473399054348, DIRECT, f08c47fec0942fa0" public/ads.txt
```

Expected results:

- `public/ads.txt` exists.
- It contains exactly one seller entry.
- The exact expected line is present.

Check the file for accidental HTML or duplicate entries. The task is not complete if either is found.

## Step 4: Deploy Through the Existing Workflow

Inspect the repository documentation and existing deployment configuration before deploying.

- Use only the project’s already-established deployment workflow.
- Do not create a new hosting project.
- Do not change domains, DNS, hosting providers, environment variables, or deployment configuration.
- Do not deploy if the repository does not clearly identify the established deployment workflow; in that case, finish the code change and report that deployment remains for the website owner.
- Do not use a destructive Git command.
- Preserve all unrelated user changes in the working tree.

If the existing workflow automatically deploys after a push, prepare the validated change but do not invent or bypass repository publishing rules.

## Step 5: Verify Production

After the established deployment completes, run:

```bash
curl -i https://www.convertbrio.com/ads.txt
```

Production acceptance requirements:

- HTTP status is `200`.
- The response is plain text, not the HTML 404 page.
- The response body contains exactly:

```text
google.com, pub-4630473399054348, DIRECT, f08c47fec0942fa0
```

Also verify both domain forms:

```bash
curl -I https://convertbrio.com/ads.txt
curl -I https://www.convertbrio.com/ads.txt
```

It is acceptable for the non-`www` URL to redirect permanently to the `www` URL. The final `www` destination must return HTTP 200.

If production still returns 404 immediately after a successful deployment:

1. Confirm the file is located at `public/ads.txt`, not the repository root or `src/pages/`.
2. Confirm the deployed build includes the file.
3. Confirm the correct production deployment was updated.
4. Allow for CDN propagation, then retry without changing unrelated code.
5. Report the exact headers and response body if it continues to fail.

## Step 6: Report the Result

At completion, report:

- The file created or updated.
- The publisher ID used.
- Results of `astro check` and the production build.
- Whether deployment was performed.
- The final HTTP status and content type for the production `ads.txt` URL.
- The exact production response body.
- Any blocker preventing production verification.

Do not claim completion merely because the local file exists. Clearly distinguish among:

- Implemented locally.
- Build validated.
- Deployed.
- Verified on production.

## Actions the Website Owner Will Perform Manually

After Claude Code confirms that `https://www.convertbrio.com/ads.txt` returns HTTP 200 with the correct line, the website owner will:

1. Sign in to Google AdSense.
2. Open **Sites**.
3. Select `convertbrio.com`.
4. Use **Check for updates** for the ads.txt status.
5. Confirm the status becomes **Authorized**.
6. Request the site review.

Do not automate these account actions.

## Final Acceptance Criteria

The coding task is complete only when:

- `public/ads.txt` contains the correct single entry.
- No unrelated website or design files were changed.
- `npm run astro -- check` passes.
- `npm run build` passes.
- The established deployment is complete, if deployment was available and authorized.
- `https://www.convertbrio.com/ads.txt` returns HTTP 200.
- The production response is the expected plain-text seller line rather than an HTML page.
- The final report accurately states what was and was not completed.
