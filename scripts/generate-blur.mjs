import sharp from "sharp";
import { readdir, writeFile } from "fs/promises";
import { join, extname } from "path";

const PUBLIC_DIR = "public";
const OUTPUT = "data/blur-data.json";
const EXTENSIONS = new Set([".webp", ".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function generateBlur(filePath) {
  const buffer = await sharp(filePath)
    .resize(10)
    .blur()
    .webp({ quality: 20 })
    .toBuffer();
  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function main() {
  const files = await walk(PUBLIC_DIR);
  const result = {};

  for (const file of files) {
    const key = "/" + file.slice(PUBLIC_DIR.length + 1);
    try {
      result[key] = await generateBlur(file);
      console.log(`Generated blur for ${key}`);
    } catch (e) {
      console.warn(`Skipped ${key}: ${e.message}`);
    }
  }

  await writeFile(OUTPUT, JSON.stringify(result, null, 2));
  console.log(`\nWrote ${Object.keys(result).length} entries to ${OUTPUT}`);
}

main();
