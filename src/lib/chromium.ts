// Minimal surface shared by `puppeteer` (local dev, bundles its own Chromium)
// and `puppeteer-core` (Vercel, paired with @sparticuz/chromium's serverless
// binary) so callers don't need to care which one is actually running.
interface MinimalPage {
  setContent(html: string, options?: { waitUntil?: string }): Promise<void>;
  pdf(options: Record<string, unknown>): Promise<Uint8Array>;
  close(): Promise<void>;
}

interface MinimalBrowser {
  newPage(): Promise<MinimalPage>;
  close(): Promise<void>;
}

async function launchBrowser(): Promise<MinimalBrowser> {
  if (process.env.VERCEL) {
    const { default: chromium } = await import("@sparticuz/chromium");
    const puppeteer = await import("puppeteer-core");
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
    return browser as unknown as MinimalBrowser;
  }

  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({ headless: true });
  return browser as unknown as MinimalBrowser;
}

export async function withPage<T>(fn: (page: MinimalPage) => Promise<T>): Promise<T> {
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    return await fn(page);
  } finally {
    await browser.close();
  }
}

// Renders each HTML string to its own PDF page, reusing a single browser
// across the whole batch instead of paying Chromium's launch cost — which
// is especially steep for @sparticuz/chromium on Vercel — once per item.
// Each item still gets its own `page`: reusing one `page` across repeated
// setContent()/pdf() calls causes the second setContent's `networkidle0`
// wait to hang indefinitely (observed empirically), so a fresh page per
// item is used instead — still far cheaper than a fresh browser launch.
export async function renderPdfPages(
  htmlPages: string[],
  pdfOptions: (index: number) => Record<string, unknown>,
): Promise<Buffer[]> {
  const browser = await launchBrowser();
  try {
    const buffers: Buffer[] = [];
    for (let i = 0; i < htmlPages.length; i++) {
      const page = await browser.newPage();
      await page.setContent(htmlPages[i], { waitUntil: "networkidle0" });
      const bytes = await page.pdf(pdfOptions(i));
      await page.close();
      buffers.push(Buffer.from(bytes));
    }
    return buffers;
  } finally {
    await browser.close();
  }
}
