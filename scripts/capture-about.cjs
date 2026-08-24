const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  
  await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  
  const el = await page.$('.about-closing');
  if (el) {
    await el.screenshot({ path: 'scripts/screenshots/about-closing.png' });
    console.log('About closing captured.');
  }
  
  await browser.close();
})();
