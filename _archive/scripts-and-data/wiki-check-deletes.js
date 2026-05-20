const fs = require('fs');
const candidates = JSON.parse(fs.readFileSync('delete-candidates.json','utf8'));

async function checkWiki(name) {
  const title = name.replace(/ /g, '_');
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=1280&format=json`;
  try {
    const r = await fetch(url);
    const j = await r.json();
    const pages = j.query.pages;
    const page = Object.values(pages)[0];
    if (page && page.thumbnail && page.thumbnail.source) {
      return { name, img: page.thumbnail.source };
    }
  } catch(e) {}
  return null;
}

async function run() {
  const found = [];
  const notFound = [];
  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    const result = await checkWiki(c.name);
    if (result) {
      found.push(result);
      process.stdout.write(`✓ ${c.name}\n`);
    } else {
      notFound.push(c.name);
    }
    // Rate limit
    if (i % 10 === 9) await new Promise(r => setTimeout(r, 500));
  }
  console.log(`\n=== RESULTS ===`);
  console.log(`Found: ${found.length} / ${candidates.length}`);
  found.forEach(f => console.log(`  ${f.name} → ${f.img.substring(0,80)}...`));
  console.log(`Not found: ${notFound.length}`);
  fs.writeFileSync('wiki-delete-results.json', JSON.stringify({found, notFound}, null, 2));
}

run();
