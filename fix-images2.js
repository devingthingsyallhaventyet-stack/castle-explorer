const fs = require('fs');
const https = require('https');

let dataContent = fs.readFileSync('data.js', 'utf8');

// Find entries with empty image or old-style broken URLs (250px which we just broke)
const castleRegex = /name:\s*"([^"]+)".*?image:\s*"([^"]*)"/g;
const entries = [];
let match;
while ((match = castleRegex.exec(dataContent)) !== null) {
  // Only process ones with empty image or ones still pointing to old broken commons/thumb URLs
  if (!match[2] || match[2].includes('/250px-') || match[2].includes('/320px-')) {
    entries.push({ name: match[1], currentImage: match[2] });
  }
}

console.log(`${entries.length} castles need fixing`);

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'CastleExplorer/1.0 (clawzisabot@proton.me)' } }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function getWikiImage(castleName) {
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(castleName)}&prop=pageimages&pithumbsize=120&format=json&redirects=1`;
  try {
    const data = await fetchJSON(searchUrl);
    const pages = data.query?.pages;
    if (!pages) return '';
    const page = Object.values(pages)[0];
    if (page?.thumbnail?.source) return page.thumbnail.source;
    return '';
  } catch(e) {
    return '';
  }
}

async function main() {
  let updated = 0;
  
  // Process ONE at a time with 500ms delay to avoid rate limit
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const url = await getWikiImage(entry.name);
    if (url) {
      dataContent = dataContent.replace(`image: "${entry.currentImage}"`, `image: "${url}"`);
      updated++;
    }
    process.stdout.write(`\r${i+1}/${entries.length} — ${updated} fixed`);
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(`\nDone! Fixed ${updated}/${entries.length}`);
  fs.writeFileSync('data.js', dataContent, 'utf8');
}

main();
