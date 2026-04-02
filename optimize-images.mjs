import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const INPUT = process.argv[2] || './referencie';
const OUTPUT = process.argv[3] || './public/images/salon';
const MAX_WIDTH = 1200;
const QUALITY = 80;

const files = readdirSync(INPUT).filter(f => /\.(jpe?g|png)$/i.test(f));

console.log(`Optimalizujem ${files.length} fotiek z ${INPUT} → ${OUTPUT}\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const inputPath = join(INPUT, file);
  const outputPath = join(OUTPUT, file);
  const before = statSync(inputPath).size;
  totalBefore += before;

  try {
    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_WIDTH, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outputPath);

    const after = statSync(outputPath).size;
    totalAfter += after;
    const reduction = ((1 - after / before) * 100).toFixed(0);
    console.log(`  ${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${reduction}%)`);
  } catch (e) {
    console.log(`  ${file}: ERROR - ${e.message}`);
  }
}

console.log(`\nCelkom: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (-${((1-totalAfter/totalBefore)*100).toFixed(0)}%)`);
