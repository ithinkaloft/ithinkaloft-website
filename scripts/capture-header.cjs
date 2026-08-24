const { chromium } = require('playwright');
const path = require('path');

const BASE = 'http://localhost:5173';

(async () => {
  const browser = await chromium.launch();

  // Desktop
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await desktopPage.goto(BASE, { waitUntil: 'networkidle' });
  await desktopPage.screenshot({
    path: 'scripts/screenshots/header-desktop.png',
    clip: { x: 0, y: 0, width: 1440, height: 80 }
  });
  console.log('Desktop header saved.');

  // Mobile
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await mobilePage.goto(BASE, { waitUntil: 'networkidle' });
  await mobilePage.screenshot({
    path: 'scripts/screenshots/header-mobile-390.png',
    clip: { x: 0, y: 0, width: 390, height: 80 }
  });
  console.log('Mobile header saved.');

  await browser.close();
})();
