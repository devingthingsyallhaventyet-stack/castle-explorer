const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'audit-data.json');

function extractFilename(url) {
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/');
    // For thumb URLs like /wikipedia/commons/thumb/6/6a/Castle_Stalker.jpg/500px-Castle_Stalker.jpg
    const thumbIdx = parts.indexOf('thumb');
    if (thumbIdx !== -1 && parts.length > thumbIdx + 4) {
      return decodeURIComponent(parts[thumbIdx + 3]);
    }
    // For direct URLs like /wikipedia/commons/6/6a/Castle_Stalker.jpg
    return decodeURIComponent(parts[parts.length - 1]);
  } catch {
    return null;
  }
}

function stripHtml(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchAttribution(filename) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=extmetadata&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CastleCoreBot/1.0 (clawzisabot@proton.me)', 'Accept': 'application/json' } });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { return null; }
  const pages = data.query?.pages;
  if (!pages) return null;
  const page = Object.values(pages)[0];
  const meta = page?.imageinfo?.[0]?.extmetadata;
  if (!meta) return null;
  return {
    artist: stripHtml(meta.Artist?.value || ''),
    license: meta.LicenseShortName?.value || '',
    description: stripHtml(meta.ImageDescription?.value || ''),
    credit: stripHtml(meta.Credit?.value || ''),
    source: 'Wikimedia Commons'
  };
}

async function main() {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  
  let wikiCount = 0, noImageCount = 0, attrSuccess = 0, attrFail = 0;
  const approved = data.filter(e => e.reviewStatus === 'approved');
  console.log(`Processing ${approved.length} approved entries...`);

  // Step 1: Clean images
  for (const entry of approved) {
    if (entry.image && entry.image.includes('upload.wikimedia.org')) {
      // keep
    } else {
      entry.image = '';
    }
    entry.gallery = [];
    if (!entry.image && entry.wikiImage && entry.wikiImage.includes('upload.wikimedia.org')) {
      entry.image = entry.wikiImage;
    }
  }

  // Step 2: Fetch attribution
  const withImages = approved.filter(e => e.image && e.image.includes('upload.wikimedia.org'));
  console.log(`${withImages.length} entries have Wikipedia images, fetching attribution...`);
  
  for (let i = 0; i < withImages.length; i++) {
    const entry = withImages[i];
    const filename = extractFilename(entry.image);
    if (!filename) { attrFail++; continue; }
    try {
      const attr = await fetchAttribution(filename);
      if (attr) {
        entry.imageAttribution = attr;
        attrSuccess++;
      } else {
        attrFail++;
      }
    } catch (err) {
      attrFail++;
    }
    if ((i + 1) % 50 === 0) console.log(`  Progress: ${i + 1}/${withImages.length}`);
    await sleep(100);
  }

  // Count
  wikiCount = approved.filter(e => e.image && e.image.includes('upload.wikimedia.org')).length;
  noImageCount = approved.filter(e => !e.image).length;

  // Save
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  console.log(`\n=== SUMMARY ===`);
  console.log(`Approved entries with Wikipedia images: ${wikiCount}`);
  console.log(`Approved entries with no image: ${noImageCount}`);
  console.log(`Attributions fetched successfully: ${attrSuccess}`);
  console.log(`Attributions failed: ${attrFail}`);
}

main().catch(console.error);
