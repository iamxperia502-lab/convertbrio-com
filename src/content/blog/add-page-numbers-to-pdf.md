---
title: "How to Add Page Numbers to a PDF (Reports, Theses, Contracts)"
description: "Page numbers matter more in a PDF than most formatting details: here's when they're expected, and how to stamp them onto a document that doesn't have them."
pubDate: 2026-08-12
tags: ["pdf", "how-to"]
relatedTools: ["add-page-numbers", "merge-pdf"]
draft: false
---

Page numbers are one of those details nobody notices when they're there and everybody notices when they're not, especially in longer documents where "see page 14" only means something if page 14 actually says "14" on it.

## Where page numbers actually matter

- **Academic work.** Theses, dissertations, and papers are almost always required to have numbered pages, often with a specific style (roman numerals for front matter, arabic numerals for the body).
- **Contracts and legal documents.** Page numbers, often combined with a "page X of Y" format, make it possible to confirm a printed or scanned copy is complete and to reference specific clauses unambiguously.
- **Reports with a table of contents.** A table of contents that references page numbers is only useful if the pages are actually numbered, otherwise readers are stuck counting manually.
- **Any document assembled from multiple sources.** If a PDF has been merged together from several files (a cover page, a report, an appendix), it often inherits inconsistent or missing numbering from its original pieces.

## How to add them

If a document doesn't have page numbers already, commonly the case for PDFs exported directly from a word processor without a header/footer set up, or for scanned documents, a dedicated [page numbering tool](/tools/add-page-numbers) stamps sequential numbers onto every page after the fact, without needing to go back into the original source file (which you may not still have, especially for scanned or received documents).

This matters because re-adding numbering by editing the original file requires that file to still exist in an editable form. A PDF you received from someone else, or a scan of a paper document, has no "original" to go back to: stamping the numbers directly onto the PDF is the only practical option.

## If you're combining documents first

If the PDF you need numbered is actually several documents that need to become one first, a cover page plus a report plus appendices, [merge them into a single PDF](/tools/merge-pdf) before adding page numbers. Numbering after merging keeps the sequence continuous across the whole document; numbering each piece separately first and then merging will leave you with page numbers that restart partway through, which defeats the purpose.

## A note on numbering style

Simple sequential numbering (1, 2, 3...) covers most cases, but be aware that formal requirements sometimes specify more than that: a different numbering scheme for a table of contents versus the body, or numbers that should start from a specific value rather than 1 (common when a document is meant to be inserted into a larger one at a later page). If a style guide or institution has specific numbering requirements, check them before finalizing, since fixing numbering after a document has already been submitted or printed is more work than getting it right the first time.
