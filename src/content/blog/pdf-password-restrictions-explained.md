---
title: "PDF Password Restrictions Explained: Open Passwords vs. Permission Passwords"
description: "PDFs actually have two different kinds of password protection that do very different things. Understanding the difference explains what you can and can't unlock."
pubDate: 2026-08-15
tags: ["pdf", "explainer"]
relatedTools: ["unlock-pdf"]
draft: false
---

"This PDF is locked" can mean two genuinely different things, and mixing them up is why people are often confused about what a PDF unlocking tool can and can't do.

## Two kinds of PDF password, not one

**An open password (also called a user password)** encrypts the document itself. Without it, the PDF's content can't be read at all: no viewer, converter, or tool can display it, because the data is genuinely encrypted. This is the same category of protection as a password-protected zip file or an encrypted disk image: without the correct password, there's no legitimate way in.

**A permissions password (also called an owner password)** works differently. The document itself isn't encrypted for reading: anyone can open and view it. Instead, the PDF carries a set of flags saying what a *compliant viewer* should allow: printing, copying text, editing, adding comments, and so on. A well-behaved PDF reader checks these flags and grays out the restricted actions. The permissions password exists to change those flags, not to control whether the file can be opened.

This second category is much more common than people expect. A lot of "locked" PDFs, ones that open fine but won't let you copy text, print, or edit, are locked in this second sense, not the first.

## Why this distinction matters

Because permission flags are enforced by the *viewer*, not by encryption of the actual content, removing them doesn't require breaking any encryption: it's closer to changing a setting than cracking a lock. This is exactly the case an [unlock PDF tool](/tools/unlock-pdf) is built for: removing owner-password restrictions on a document you already have the right to edit, so you can print, copy, or edit a PDF that's otherwise fully readable but has editing permissions turned off.

An open/user password is a different problem entirely. Because it genuinely encrypts the file, there's no legitimate way to remove it without the actual password: anything claiming to "crack" a real open password on a document you don't have rights to is either not doing what it claims, or operating in ethically and often legally dubious territory. If you've lost access to a PDF that's encrypted with an open password, the only real path forward is recovering the password itself, or getting a fresh copy from whoever created it.

## How to tell which one you're dealing with

- If the PDF asks for a password before it will open or display anything at all: that's an open password.
- If the PDF opens and displays normally, but printing, copying text, or editing is grayed out or blocked: that's a permissions password, and the kind an unlock tool can legitimately remove.

Knowing which situation you're actually in saves you from trying the wrong fix, and explains why a PDF "unlock" tool can solve one kind of locked PDF instantly while being the wrong tool entirely for the other.
