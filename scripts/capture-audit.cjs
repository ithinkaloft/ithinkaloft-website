const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:5173';
const OUT_DIR = 'scripts/screenshots/audit';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const routes = [
  { name: 'home', path: '/' },
  { name: 'games', path: '/games' },
  { name: 'cf', path: '/games/core-forge' },
  { name: 'ppa', path: '/games/pocket-puzzle-arcade' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'privacy', path: '/privacy' }
];

(async () => {
  const browser = await chromium.launch();
  
  // Desktop
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  for (const route of routes) {
    await desktop.goto(BASE + route.path, { waitUntil: 'networkidle' });
    await desktop.waitForTimeout(500); // animations
    await desktop.screenshot({ path: path.join(OUT_DIR, `${route.name}-desktop.png`), fullPage: true });
    console.log(`Captured ${route.name} Desktop`);
  }
  
  // Mobile
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  for (const route of routes) {
    if (route.name === 'privacy') continue; // Optional for mobile
    await mobile.goto(BASE + route.path, { waitUntil: 'networkidle' });
    await mobile.waitForTimeout(500);
    // For mobile, capturing full page can be incredibly tall, but let's try
    await mobile.screenshot({ path: path.join(OUT_DIR, `${route.name}-mobile.png`), fullPage: true });
    console.log(`Captured ${route.name} Mobile`);
  }

  await browser.close();
})();
