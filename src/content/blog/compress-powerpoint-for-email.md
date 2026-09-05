---
title: "How to Compress a PowerPoint That's Too Big to Email"
description: "Why .pptx files balloon to 40 MB and three free ways to shrink one for email — inside PowerPoint, image by image, or by routing it through PDF."
pubDate: 2026-09-05
tags: ["powerpoint", "compression", "how-to"]
relatedTools: ["powerpoint-to-pdf", "compress-pdf", "compress-image"]
draft: false
---

You finish a deck, hit send, and the email bounces: "attachment exceeds the maximum size." A presentation that felt like a dozen slides is somehow 45 MB. Here's why, and three free ways to fix it depending on whether you still need to edit the file.

## Why PowerPoint files get so large

It's the images, almost every time. A modern phone shoots photos at 12 to 48 megapixels — several megabytes each. Drop four of those across your slides, add a couple of exported charts and a screenshot or two, and the deck is carrying 20–30 MB of image data before a single word of text.

The catch is that PowerPoint keeps each image at its **original full resolution** even though the slide only ever displays it a few inches wide. A 6000-pixel photo shown at 400 pixels is storing roughly 200 times more data than the slide can show. Compressing a presentation is really about fixing that mismatch.

## Option 1: Compress the images inside PowerPoint (keeps it editable)

Best when you still need to edit the deck.

1. Click any image, then open the **Picture Format** tab.
2. Click **Compress Pictures**.
3. **Untick "Apply only to this picture"** so it processes the whole deck.
4. Choose a resolution. **150 ppi ("Web")** is plenty for on-screen viewing; 220 ppi if it might be printed.
5. Tick **"Delete cropped areas of pictures"** — cropped-out parts are still stored otherwise.
6. Click OK, then **File → Save As** and check the new size.

This often halves a photo-heavy deck. If it's still large, one or two images are probably enormous — replace them with smaller versions (next option).

## Option 2: Shrink images before you place them

If you're still building the deck, resize each photo *before* inserting it. Run every image through [Compress Image](/tools/compress-image), either to a target size or a lower quality, and insert the smaller version. A photo shown at half-slide width almost never needs to be more than about 1500 pixels wide.

## Option 3: Convert to PDF and compress that (best for sending)

If the deck is finished and you're sending it out for review or to a client, this gives the smallest, most portable file:

1. Run the .pptx through [PowerPoint to PDF](/tools/powerpoint-to-pdf) — one slide per page.
2. Run that PDF through [Compress PDF](/tools/compress-pdf), which re-encodes every embedded image at an efficient quality.

The result opens on any device with no PowerPoint needed and can't be accidentally edited. The trade-off: it's a PDF, so animations and transitions are gone and the recipient can't modify the slides. For most "here's the deck" emails, that's exactly what you want.

## Which one should you use?

| Situation | Best option |
| --- | --- |
| Still editing the deck | Compress Pictures inside PowerPoint |
| Building it now | Shrink each image before inserting |
| Sending a final version | Convert to PDF, then compress the PDF |
| Recipient needs to edit it | Compress Pictures, then Save As |

## A note on the automatic route

A one-click "upload a .pptx, get back a smaller editable .pptx" tool is on our roadmap. Until it ships, the three methods above are all free and cover every case — the PDF route in particular needs nothing installed and works entirely in the browser.
