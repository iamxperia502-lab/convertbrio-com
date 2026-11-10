---
title: "What Image Size Do You Actually Need? A Practical Pixel Guide"
description: "Exact pixel dimensions for LinkedIn, Instagram, resumes, and passport photos, plus how to resize an image to those dimensions without distorting it."
pubDate: 2026-07-29
tags: ["images", "how-to"]
relatedTools: ["resize-image", "crop-image"]
draft: false
---

"What size should this photo be?" is one of those questions that seems like it should have one answer and instead has a dozen, depending on where the image is going. Here are the dimensions that actually matter, and how to hit them exactly.

## Common dimensions by use case

- **LinkedIn profile photo**: 400 × 400px minimum (displays as a circle, so keep your face centered).
- **LinkedIn cover banner**: 1584 × 396px.
- **Instagram square post**: 1080 × 1080px.
- **Instagram portrait post**: 1080 × 1350px (4:5 ratio: the largest Instagram will show before cropping).
- **Resume photo** (where one is expected: common in parts of Europe and Asia, less so in the US): typically around 300 × 400px, portrait orientation, at least 2:3 aspect ratio.
- **US passport photo**: 2 × 2 inches, which at the standard 600 DPI works out to exactly 1200 × 1200px.
- **UK/Schengen passport photo**: 35 × 45mm, roughly 413 × 531px at 300 DPI (many photo booths and printers expect specific DPI, so check with whoever is printing it).

These aren't arbitrary: platforms and government forms reject uploads that don't match, sometimes silently by stretching or cropping your photo in ways you didn't intend.

## Resizing to an exact pixel size

A [resize tool](/tools/resize-image) that lets you set width and height in pixels directly is the most reliable way to hit these targets: you're not guessing at a percentage or relying on an app to interpret "medium" or "large." Enter the exact numbers above and you get exactly that output size, every time.

<!-- TODO: screenshot of the Resize Image tool with exact width and height typed in (for example 1080 and 1350) and a photo selected. Save as src/assets/blog/image-size-guide-linkedin-instagram-passport/resize-image-tool.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![The Resize Image tool with exact pixel dimensions entered](../../assets/blog/image-size-guide-linkedin-instagram-passport/resize-image-tool.png) -->

One thing to watch for: setting width and height independently, rather than scaling proportionally, will stretch or squash the image if your original isn't already close to the target ratio. If your source photo is a normal 4:3 or 3:2 phone photo and you resize it directly to a square like 1080 × 1080 or 1200 × 1200, faces and objects will look visibly compressed.

## Crop first, then resize

The fix is to crop to the right *ratio* before you resize to the exact *dimensions*. For a passport photo (1:1) or an Instagram square post (1:1), [crop the image](/tools/crop-image) to a square region first, centered on the subject, and then resize that square crop down to the exact pixel target. For a 4:5 Instagram portrait, crop to a 4:5 region (for example, 1600 × 2000px from a larger photo) before resizing down to 1080 × 1350.

<!-- TODO: screenshot of a 4:3 phone photo with a square crop box centred on the subject (before), next to the cropped square result (after), using the Crop Image tool. Save as src/assets/blog/image-size-guide-linkedin-instagram-passport/crop-then-resize.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![A landscape photo cropped to a square around the subject](../../assets/blog/image-size-guide-linkedin-instagram-passport/crop-then-resize.png) -->

This two-step process, crop to ratio, then resize to exact size, avoids the distortion that comes from forcing a differently-shaped photo into the wrong pixel box, and it's the same approach professional photo labs use for passport and ID photos.

## A quick sanity check

Before you submit a resized photo anywhere official (passport applications especially), reopen the final file and check it visually at 100% zoom. Government photo requirements are stricter about proportions and head size within the frame than most social platforms, and a photo that's the right pixel dimensions but has your head too small or too close to the edge will still get rejected.

<!-- TODO: screenshot of the finished file's Properties/Get Info panel showing the pixel dimensions, next to the image opened at 100% zoom. Save as src/assets/blog/image-size-guide-linkedin-instagram-passport/check-dimensions.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![File properties showing the final pixel dimensions of a resized photo](../../assets/blog/image-size-guide-linkedin-instagram-passport/check-dimensions.png) -->
