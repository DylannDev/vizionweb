const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "public", "blog");

function normalize(filename) {
  const ext = path.extname(filename);
  const name = path.basename(filename, ext);

  const normalized = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[''"]/g, "-")          // apostrophes → dash
    .replace(/[_]/g, "-")            // underscores → dash
    .replace(/\s+/g, "-")            // spaces → dash
    .replace(/[^a-z0-9-]/g, "")      // remove remaining special chars
    .replace(/-+/g, "-")             // collapse multiple dashes
    .replace(/^-|-$/g, "");          // trim leading/trailing dashes

  return `${normalized}.webp`;
}

const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.(webp|jpg|jpeg)$/i.test(f));

console.log(`Renaming ${files.length} files:\n`);

for (const file of files) {
  const newName = normalize(file);
  if (file === newName) {
    console.log(`  ${file}  (unchanged)`);
    continue;
  }

  const oldPath = path.join(BLOG_DIR, file);
  const newPath = path.join(BLOG_DIR, newName);

  fs.renameSync(oldPath, newPath);
  console.log(`  ${file}\n  → ${newName}\n`);
}

console.log("Done.");
