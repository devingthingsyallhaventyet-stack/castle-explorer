const fs = require('fs');
const path = require('path');

// Load data.js
const s = fs.readFileSync('data.js', 'utf8');
const fn = new Function(s + ';return CASTLES');
const castles = fn();

// Build slug -> image map
const slugMap = new Map();
for (const c of castles) {
  const slug = c.name.toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  slugMap.set(slug, c.image);
}

// Process each HTML file in site/
const siteDir = path.join(__dirname, 'site');
const files = fs.readdirSync(siteDir).filter(f => f.endsWith('.html'));

let updated = 0;
let skipped = 0;

for (const file of files) {
  const slug = file.replace('.html', '');
  const correctImage = slugMap.get(slug);
  
  if (!correctImage) {
    // Try to find by reading the HTML's data-castle-name
    const html = fs.readFileSync(path.join(siteDir, file), 'utf8');
    const nameMatch = html.match(/data-castle-name="([^"]+)"/);
    if (nameMatch) {
      const altSlug = nameMatch[1].toLowerCase()
        .replace(/[''`]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      const altImage = slugMap.get(altSlug);
      if (!altImage) { skipped++; continue; }
    } else {
      skipped++;
      continue;
    }
  }
  
  let html = fs.readFileSync(path.join(siteDir, file), 'utf8');
  
  // Find the current data-original-src
  const origMatch = html.match(/data-original-src="([^"]+)"/);
  if (!origMatch) { skipped++; continue; }
  
  const currentImage = origMatch[1];
  
  // Get the correct image at 1280px size (for HTML pages)
  let correctFull = correctImage;
  if (correctImage.includes('wikipedia') || correctImage.includes('wikimedia')) {
    // Convert 500px to 1280px
    correctFull = correctImage.replace(/\/\d+px-/, '/1280px-');
    // If no size prefix, add thumb path
    if (!correctFull.includes('/thumb/')) {
      // It's a direct file URL, convert to thumb
      correctFull = correctImage.replace('/commons/', '/commons/thumb/') + '/1280px-' + correctImage.split('/').pop();
    }
  }
  
  if (currentImage === correctFull) { continue; } // already correct
  
  // Replace all occurrences of the old image in the HTML
  const oldVariants = [currentImage];
  // Also try 500px version
  const old500 = currentImage.replace(/\/\d+px-/, '/500px-');
  if (old500 !== currentImage) oldVariants.push(old500);
  
  let changed = false;
  for (const oldUrl of oldVariants) {
    if (html.includes(oldUrl)) {
      html = html.replaceAll(oldUrl, correctFull);
      changed = true;
    }
  }
  
  // Also handle the case where the HTML has 1280px but data.js has 500px
  const current1280 = currentImage;
  const dataUrl500 = correctImage; // 500px version from data.js
  const dataUrl1280 = correctFull; // 1280px version
  
  if (!changed) {
    // Try replacing whatever is in the og:image and other tags
    const ogMatch = html.match(/og:image" content="([^"]+)"/);
    if (ogMatch && ogMatch[1] !== correctFull) {
      html = html.replaceAll(ogMatch[1], correctFull);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(path.join(siteDir, file), html, 'utf8');
    updated++;
    if (updated <= 20) console.log(`Updated: ${file}`);
  }
}

console.log(`\nTotal: ${updated} HTML pages updated, ${skipped} skipped`);
