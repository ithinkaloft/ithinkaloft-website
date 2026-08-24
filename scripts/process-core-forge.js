import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = 'src/assets/games/core-forge/web';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processImages() {
  console.log('Processing Hero...');
  // Hero (reactor-chamber.png: 841x1870)
  const heroSrc = 'src/assets/games/core-forge/artwork/reactor-chamber.png';
  const heroWidths = [1600, 1200, 800];
  for (const w of heroWidths) {
    await sharp(heroSrc)
      .resize({ width: w, withoutEnlargement: true }) // if original < 1600, it stays 841
      .webp({ quality: 85 })
      .toFile(path.join(outDir, `core-forge-hero-${w}.webp`));
  }
  // Wait, if withoutEnlargement is true, we might end up with three 841 files.
  // We'll let it upscale slightly if needed for the 1200/1600 versions so they match the requested filenames.
  for (const w of heroWidths) {
    await sharp(heroSrc)
      .resize({ width: w }) // Upscale allowed to fulfill requested sizes
      .webp({ quality: 85 })
      .toFile(path.join(outDir, `core-forge-hero-${w}.webp`));
  }

  console.log('Processing Thumbnail...');
  // Thumbnail (opening-directive.png: 1024x1536 -> 16:9)
  const thumbSrc = 'src/assets/games/core-forge/artwork/opening-directive.png';
  // 16:9 of 1024 is 1024x576
  const thumbCrop = await sharp(thumbSrc)
    .resize(1024, 576, { fit: 'cover', position: 'center' })
    .toBuffer();
  
  await sharp(thumbCrop).resize({ width: 960 }).webp({ quality: 85 }).toFile(path.join(outDir, 'core-forge-thumbnail-960.webp'));
  await sharp(thumbCrop).resize({ width: 640 }).webp({ quality: 85 }).toFile(path.join(outDir, 'core-forge-thumbnail-640.webp'));

  console.log('Processing Screenshots...');
  // Screenshots (Convert to WebP, crop top 40px for phone shots)
  const phoneScreenshots = [
    'gameplay-wave.png',
    'gameplay-boss-crusher.png',
    'weapon-fusion.png',
    'facility-ai-alert.png'
  ];
  const ipadScreenshots = [
    'opening-directive.png',
    'opening-threat.png'
  ];

  for (const file of phoneScreenshots) {
    const p = path.join('src/assets/games/core-forge/screenshots', file);
    const meta = await sharp(p).metadata();
    await sharp(p)
      .extract({ left: 0, top: 40, width: meta.width, height: meta.height - 40 })
      .webp({ quality: 85 })
      .toFile(path.join(outDir, file.replace('.png', '.webp')));
  }

  for (const file of ipadScreenshots) {
    const p = path.join('src/assets/games/core-forge/artwork', file);
    await sharp(p)
      .webp({ quality: 85 })
      .toFile(path.join(outDir, file.replace('.png', '.webp')));
  }

  console.log('Processing OG Image...');
  // OG Image: dark reactor artwork + logo
  // 1200x630
  const ogWidth = 1200;
  const ogHeight = 630;
  
  // 1. Create 1200x630 reactor background
  const reactorBuffer = await sharp(heroSrc)
    .resize(ogWidth, ogHeight, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.7 }) // Darken slightly for the logo
    .toBuffer();

  // 2. Resize logo to fit nicely (e.g., max width 800)
  const logoSrc = 'src/assets/games/core-forge/brand/core-forge-logo.png';
  const logoBuffer = await sharp(logoSrc)
    .resize({ width: 800, withoutEnlargement: true })
    .toBuffer();

  // 3. Composite
  await sharp(reactorBuffer)
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'core-forge-og-1200x630.webp'));

  console.log('Done!');
}

processImages().catch(console.error);
