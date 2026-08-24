import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function check() {
  const dirs = [
    'src/assets/games/core-forge/artwork',
    'src/assets/games/core-forge/brand',
    'src/assets/games/core-forge/screenshots'
  ];

  for (const dir of dirs) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
    for (const file of files) {
      const p = path.join(dir, file);
      const meta = await sharp(p).metadata();
      console.log(`${file}: ${meta.width}x${meta.height}`);
    }
  }
}
check();
