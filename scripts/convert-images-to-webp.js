const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const QUALITY = 95;

function findJpgFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findJpgFiles(fullPath));
    } else if (/\.(jpg|jpeg)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convert() {
  const files = findJpgFiles(PUBLIC_DIR);

  console.log(`Found ${files.length} JPG/JPEG images in public/\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const inputPath of files) {
    const outputPath = inputPath.replace(/\.(jpg|jpeg)$/i, ".webp");
    const relativePath = path.relative(PUBLIC_DIR, inputPath);
    const relativeOutput = path.relative(PUBLIC_DIR, outputPath);

    const inputSize = fs.statSync(inputPath).size;

    await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);

    const outputSize = fs.statSync(outputPath).size;

    totalBefore += inputSize;
    totalAfter += outputSize;

    const reduction = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);

    console.log(
      `${relativePath} → ${relativeOutput}  |  ${formatSize(inputSize)} → ${formatSize(outputSize)}  (-${reduction}%)`
    );
  }

  console.log(`\n---`);
  console.log(
    `Total: ${formatSize(totalBefore)} → ${formatSize(totalAfter)}  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`
  );
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(0)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

convert().catch(console.error);
