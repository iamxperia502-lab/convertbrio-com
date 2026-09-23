---
title: "How to Compress a PDF to a Specific Size (100 KB, 500 KB, 2 MB)"
description: "Portals and forms often cap a PDF at an exact size. Here's how to get a document under 100 KB, 500 KB, 1 MB, or 2 MB without deleting pages you need."
pubDate: 2026-09-05
tags: ["pdf", "compression", "how-to"]
relatedTools: ["compress-pdf-to-size", "compress-pdf", "split-pdf", "compress-image"]
draft: false
---

Visa applications, tax portals, university uploads, and job sites don't just ask for a PDF: they cap it at an exact size. "Maximum file size: 100 KB." "Upload must be under 2 MB." A 6 MB scan gets rejected with no advice on how to shrink it. This is how to get a PDF under a hard limit without dropping content you actually need.

## First, figure out where the size is coming from

A PDF's weight almost always comes from **embedded images**, not text. That single fact decides which method will work:

- **A scanned document** (photos of pages) is nothing *but* images: it compresses dramatically, often 40–70% in one pass.
- **A report with a few embedded photos or screenshots** compresses moderately.
- **A text-only PDF** (a contract, an invoice, an ebook) is already small. If one of those is somehow over a limit, the problem is usually page count, not compression.

Open the PDF and try to highlight a sentence with your cursor. If the text selects, there's a real text layer and it's staying sharp no matter what you do. If nothing selects, it's a scan: an image of each page.

## The fastest route: compress, then check

1. **Run the PDF through a [PDF compressor](/tools/compress-pdf).** It re-encodes the embedded images at an efficient quality and resolution and strips metadata the file doesn't need. Text and vector graphics are untouched.
2. **Open the result and check the file size.** For a scanned document this single pass is often enough to clear a 500 KB or 1 MB limit outright.
3. **If it's still over, keep reading**: the next steps stack on top.

## Getting under a very tight limit (100 KB or less)

A 100 KB cap on a multi-page scan is aggressive. Combine these:

- **Reduce the page count.** If the form only needs pages 2 and 5, don't upload all ten. [Split the PDF](/tools/split-pdf) and keep just what's required: fewer pages is the biggest lever there is.
- **Compress the images before rebuilding.** If one or two enormous photos are the problem, pull them out, run each through [Compress Image](/tools/compress-image) with an exact KB target, and reassemble. Compress Image lets you name a size and hits it; the standard PDF compressor applies one efficient pass rather than targeting a number. For a PDF you can also use [Compress PDF to Exact Size](/tools/compress-pdf-to-size), which works toward the limit you enter and tells you the size it reached.
- **Scan smarter next time.** If you control the scan, scan in greyscale (not colour) at 200 DPI rather than 600. A greyscale 200 DPI scan of a text document is a fraction of the size and still perfectly legible.

## Common size limits and what usually clears them

| Limit | Typical fix |
| --- | --- |
| 2 MB | One compression pass clears almost any normal document |
| 1 MB | One pass for scans; one pass plus trimming pages for longer files |
| 500 KB | Compress, then drop pages you don't need |
| 200 KB | Compress + greyscale + only the required pages |
| 100 KB | All of the above, and compress the individual images to an exact size first |

## What compression won't do

It won't target an exact kilobyte figure on its own: it applies one sensible pass. And it won't shrink a text-only PDF much, because there's very little to remove. If you're stuck, the two highest-impact moves are almost always **removing pages you don't need** and **compressing the largest embedded images separately** before putting the document back together.

Once you've got a version under the limit, open it one more time before uploading to confirm the pages are still readable: a scan crushed too hard to fit 100 KB isn't worth submitting if the reviewer can't read it.
