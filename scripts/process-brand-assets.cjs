const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgPath = 'C:/Users/marav/.gemini/antigravity/brain/5dc80c5c-cc86-4a02-a90a-e9259e3d2037/.user_uploaded/media_1787592663668.png';
const brandDir = 'src/assets/brand';
const webDir = path.join(brandDir, 'web');
const publicDir = 'public';

if (!fs.existsSync(brandDir)) fs.mkdirSync(brandDir, { recursive: true });
if (!fs.existsSync(webDir)) fs.mkdirSync(webDir, { recursive: true });
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

async function processAssets() {
  // 1. Copy original master
  fs.copyFileSync(imgPath, path.join(brandDir, 'ithinkaloft-logo.png'));
  console.log('Master copied to src/assets/brand/ithinkaloft-logo.png');

  // 2. Trimmed wordmark (Header) - X: 109, Y: 450, W: 807, H: 133
  await sharp(imgPath)
    .extract({ left: 109, top: 450, width: 807, height: 133 })
    .webp({ quality: 90 })
    .toFile(path.join(webDir, 'ithinkaloft-wordmark.webp'));
  console.log('Wordmark generated: 807x133');

  // 3. Trimmed full logo - X: 109, Y: 78, W: 807, H: 505
  const fullBuffer = await sharp(imgPath)
    .extract({ left: 109, top: 78, width: 807, height: 505 })
    .toBuffer();
  await sharp(fullBuffer)
    .webp({ quality: 90 })
    .toFile(path.join(webDir, 'ithinkaloft-logo.webp'));
  console.log('Full Logo generated: 807x505');

  // 4. Square Symbol for Favicons
  const symbolBuffer = await sharp(imgPath)
    .extract({ left: 226, top: 78, width: 588, height: 340 })
    .extend({
      top: 124,
      bottom: 124,
      left: 0,
      right: 0,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  await sharp(symbolBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(symbolBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(symbolBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
  await sharp(symbolBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Favicon family generated (32, 180, 192, 512)');

  // 5. OG Image: 1200x630
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 13, g: 11, b: 24, alpha: 1 } // #0d0b18
    }
  })
    .composite([{ input: fullBuffer, gravity: 'center' }])
    .webp({ quality: 90 })
    .toFile(path.join(webDir, 'ithinkaloft-og-1200x630.webp'));
  console.log('OG Image generated: 1200x630');
}

processAssets().catch(console.error);
