// Minimal surface shared by `puppeteer` (local dev, bundles its own Chromium)
// and `puppeteer-core` (Vercel, paired with @sparticuz/chromium's serverless
// binary) so callers don't need to care which one is actually running.
interface MinimalPage {
  setContent(html: string, options?: { waitUntil?: string }): Promise<void>;
  pdf(options: Record<string, unknown>): Promise<Uint8Array>;
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
