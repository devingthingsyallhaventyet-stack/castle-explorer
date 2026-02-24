// Fix Wikipedia image URLs in data.js by looking up each castle on Wikipedia
const fs = require('fs');
const https = require('https');

// Read current data
let dataContent = fs.readFileSync('data.js', 'utf8');

// Extract all castle entries with their image URLs
const castleRegex = /name:\s*"([^"]+)".*?image:\s*"([^"]*)"/g;
const entries = [];
let match;
while ((match = castleRegex.exec(dataContent)) !== null) {
  entries.push({ name: match[1], currentImage: match[2] });
}

console.log(`Found ${entries.length} castles`);

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
  // Search Wikipedia for the castle
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
  let failed = 0;
  
  // Process in batches of 5 with delay
  for (let i = 0; i < entries.length; i += 5) {
    const batch = entries.slice(i, i + 5);
    const results = await Promise.all(batch.map(async (entry) => {
      const url = await getWikiImage(entry.name);
      return { ...entry, newImage: url };
    }));
    
    for (const r of results) {
      if (r.newImage) {
        // Escape for regex replacement
        const escaped = r.currentImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (r.currentImage !== r.newImage) {
          dataContent = dataContent.replace(`image: "${r.currentImage}"`, `image: "${r.newImage}"`);
          updated++;
        }
      } else {
        failed++;
      }
    }
    
    process.stdout.write(`\r${i + batch.length}/${entries.length} processed, ${updated} updated, ${failed} no image`);
    
    // Rate limit
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`\nDone! Updated ${updated}, failed ${failed}`);
  fs.writeFileSync('data.js', dataContent, 'utf8');
}

main();
