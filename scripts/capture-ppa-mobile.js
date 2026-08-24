import { chromium } from 'playwright';

const VIEWPORT = { width: 390, height: 844 };
const BASE     = 'http://localhost:5173';

(async () => {
  const browser = await chromium.launch();
  const page    = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 2 });

  // ── Hero section ──────────────────────────────────────────────
  await page.goto(`${BASE}/games/pocket-puzzle-arcade`, { waitUntil: 'networkidle' });
  // Scroll to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: 'scripts/screenshots/ppa-mobile-hero-390.png',
    clip: { x: 0, y: 0, width: 390, height: 900 }
  });
  console.log('Hero screenshot saved.');

  // ── Gallery section ───────────────────────────────────────────
  // Scroll to the gallery heading
  const galleryEl = await page.$('.game-media-gallery');
  if (galleryEl) {
    const box = await galleryEl.boundingBox();
    if (box) {
      await page.evaluate((y) => window.scrollTo(0, y - 60), box.y);
      await page.waitForTimeout(600);
      await page.screenshot({
        path: 'scripts/screenshots/ppa-mobile-gallery-390.png',
        clip: { x: 0, y: 0, width: 390, height: 900 }
      });
      console.log('Gallery screenshot saved.');
    }
  }

  await browser.close();
})();
