import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcBase = 'src/assets/games/pocket-puzzle-arcade';
const outDir  = 'src/assets/games/pocket-puzzle-arcade/web';

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processImages() {
  // ──────────────────────────────────────────────────────────────
  // 1. HERO — feature graphic, never upscaled
  // Source: 1024×500
  // ──────────────────────────────────────────────────────────────
  console.log('Processing Hero (feature graphic)…');
  const heroSrc = path.join(srcBase, 'Pocket-Puzzle-Arcade-Feature-Graphic-1024x500.png');

  for (const w of [1024, 768, 512]) {
    await sharp(heroSrc)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(path.join(outDir, `pocket-puzzle-arcade-hero-${w}.webp`));
    console.log(`  hero-${w}.webp`);
  }

  // ──────────────────────────────────────────────────────────────
  // 2. THUMBNAIL — 16:9 crop of feature graphic, preserving branding
  // The 1024×500 source is nearly 16:9 (2.048:1 vs 1.778:1).
  // Crop top/bottom symmetrically to land at exactly 16:9: 1024×576 → crop to 1024×576 (no crop needed as 500 < 576)
  // The source is wider than 16:9, so we crop width to achieve 16:9 at 500px height: width = 500*(16/9) = 888px, centred.
  // This preserves the full vertical composition.
  // ──────────────────────────────────────────────────────────────
  console.log('Processing Thumbnail (16:9 crop)…');
  const thumbCropW = Math.round(500 * (16 / 9)); // 889
  const thumbCropH = 500;
  const thumbLeft  = Math.round((1024 - thumbCropW) / 2); // ~67px

  const thumbBuffer = await sharp(heroSrc)
    .extract({ left: thumbLeft, top: 0, width: thumbCropW, height: thumbCropH })
    .toBuffer();

  await sharp(thumbBuffer).webp({ quality: 88 })
    .toFile(path.join(outDir, 'pocket-puzzle-arcade-thumbnail-889.webp'));
  await sharp(thumbBuffer).resize({ width: 640 }).webp({ quality: 88 })
    .toFile(path.join(outDir, 'pocket-puzzle-arcade-thumbnail-640.webp'));
  // Remove stale derivatives if they exist from a previous run
  for (const stale of ['pocket-puzzle-arcade-thumbnail-960.webp', 'pocket-puzzle-arcade-thumbnail-888.webp']) {
    const staleP = path.join(outDir, stale);
    if (fs.existsSync(staleP)) fs.unlinkSync(staleP);
  }
  console.log('  thumbnail-889.webp (native crop 889×500, no upscale), thumbnail-640.webp');

  // ──────────────────────────────────────────────────────────────
  // 3. GALLERY SCREENSHOTS — 1080×1920, retain portrait aspect ratio
  // ──────────────────────────────────────────────────────────────
  console.log('Processing gallery screenshots…');
  const screenshots = [
    { src: '01_Home_1080x1920.jpg',         out: 'pocket-home.webp' },
    { src: '02_Sliding_Tile_1080x1920.jpg', out: 'pocket-sliding-tile.webp' },
    { src: '03_2048_1080x1920.jpg',         out: 'pocket-2048.webp' },
    { src: '04_Block_Drop_1080x1920.jpg',   out: 'pocket-block-drop.webp' },
    { src: '06_Snake_1080x1920.jpg',        out: 'pocket-snake.webp' },
    { src: '07_Minesweeper_1080x1920.jpg',  out: 'pocket-minesweeper.webp' },
    { src: '08_Sudoku_1080x1920.jpg',       out: 'pocket-sudoku.webp' },
  ];

  for (const { src, out } of screenshots) {
    await sharp(path.join(srcBase, src))
      .resize({ width: 540 }) // Half-density — still crisp on 2x displays, sensible file size
      .webp({ quality: 87 })
      .toFile(path.join(outDir, out));
    console.log(`  ${out}`);
  }

  // ──────────────────────────────────────────────────────────────
  // 4. OPEN GRAPH — 1200×630 canvas
  // Strategy: fit feature graphic (1024×500) inside a 1200×630 canvas
  // with a complementary dark-purple background fill.
  // This avoids upscaling by compositing on a solid background.
  // ──────────────────────────────────────────────────────────────
  console.log('Processing OG image…');
  const ogW = 1200;
  const ogH = 630;
  const fgW = 1024;
  const fgH = 500;

  // Compute placement: scale to fill ~90% of canvas height, centred
  const scale     = (ogH * 0.9) / fgH; // 630*0.9/500 = 1.134 → would upscale, clamp
  const fittedW   = Math.min(Math.round(fgW * scale), fgW); // never go above source width
  const fittedH   = Math.round(fgH * (fittedW / fgW));
  const leftOff   = Math.round((ogW - fittedW) / 2);
  const topOff    = Math.round((ogH - fittedH) / 2);

  const resizedFg = await sharp(heroSrc)
    .resize({ width: fittedW, height: fittedH, fit: 'fill' })
    .toBuffer();

  // Dark purple background matching PPA theme (#0d0b18)
  await sharp({
    create: {
      width: ogW,
      height: ogH,
      channels: 4,
      background: { r: 13, g: 11, b: 24, alpha: 1 }
    }
  })
    .composite([{ input: resizedFg, left: leftOff, top: topOff }])
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'pocket-puzzle-arcade-og-1200x630.webp'));
  console.log('  pocket-puzzle-arcade-og-1200x630.webp');

  // ──────────────────────────────────────────────────────────────
  // Report final sizes
  // ──────────────────────────────────────────────────────────────
  console.log('\n── Output file summary ──');
  const webFiles = fs.readdirSync(outDir);
  for (const f of webFiles) {
    const stats = fs.statSync(path.join(outDir, f));
    const meta  = await sharp(path.join(outDir, f)).metadata();
    console.log(`${f.padEnd(52)} ${meta.width}x${meta.height}  ${(stats.size / 1024).toFixed(1)}KB`);
  }

  console.log('\nDone!');
}

processImages().catch(console.error);
