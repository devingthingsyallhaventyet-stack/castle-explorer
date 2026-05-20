const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'audit-data.json');
const REPORT_FILE = path.join(__dirname, 're-enrich-scotland-report.json');
const DELAY = 100;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchJSON(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'CastleCore/1.0 (castle enrichment script)' }
  });
  if (!res.ok) return null;
  return res.json();
}

async function getSummary(title) {
  const encoded = encodeURIComponent(title.replace(/ /g, '_'));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
  return fetchJSON(url);
}

async function searchWikipedia(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=5&format=json`;
  return fetchJSON(url);
}

function getAlternateNames(name) {
  const alts = [];
  // "Castle X" -> "X Castle" and vice versa
  if (name.startsWith('Castle ')) {
    alts.push(name.slice(7) + ' Castle');
  }
  if (name.endsWith(' Castle')) {
    alts.push('Castle ' + name.slice(0, -7));
  }
  return alts;
}

async function findWikiArticle(name) {
  // Try direct match
  let summary = await getSummary(name);
  if (summary && summary.type !== 'disambiguation' && summary.extract) return summary;
  await sleep(DELAY);

  // Try alternate names
  for (const alt of getAlternateNames(name)) {
    summary = await getSummary(alt);
    if (summary && summary.type !== 'disambiguation' && summary.extract) return summary;
    await sleep(DELAY);
  }

  // Try with " castle" appended if not already there
  if (!name.toLowerCase().includes('castle')) {
    summary = await getSummary(name + ' Castle');
    if (summary && summary.type !== 'disambiguation' && summary.extract) return summary;
    await sleep(DELAY);
  }

  // Search
  const results = await searchWikipedia(name + ' castle scotland');
  if (results && results[1] && results[1].length > 0) {
    await sleep(DELAY);
    // Try the first result that looks relevant
    for (const title of results[1].slice(0, 3)) {
      summary = await getSummary(title);
      if (summary && summary.extract) return summary;
      await sleep(DELAY);
    }
  }

  return null;
}

async function main() {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const scottish = [];
  const indices = [];

  data.forEach((entry, i) => {
    if (entry.country === 'scotland') {
      scottish.push(entry);
      indices.push(i);
    }
  });

  console.log(`Found ${scottish.length} Scottish entries`);

  const report = { matched: [], unmatched: [], imageFixed: [], coordsUpdated: [], descUpdated: [] };

  for (let i = 0; i < scottish.length; i++) {
    const entry = scottish[i];
    const name = entry.name;

    if ((i + 1) % 25 === 0) console.log(`Progress: ${i + 1}/${scottish.length}`);

    try {
      const summary = await findWikiArticle(name);
      await sleep(DELAY);

      if (!summary) {
        report.unmatched.push(name);
        continue;
      }

      report.matched.push(name);

      // Wiki URL
      entry.wiki = summary.content_urls?.desktop?.page || '';

      // Description
      if (summary.extract) {
        entry.desc = summary.extract;
        report.descUpdated.push(name);
      }

      // Coordinates
      if (summary.coordinates) {
        entry.lat = String(summary.coordinates.lat);
        entry.lng = String(summary.coordinates.lon);
        report.coordsUpdated.push(name);
      }

      // Image handling
      const wikiThumb = summary.thumbnail?.source || '';
      if (wikiThumb) {
        if (!entry.image) {
          // No image — use Wikipedia's
          entry.image = wikiThumb;
          entry.imgSource = 'wikipedia';
          report.imageFixed.push(name);
        } else if (entry.image.includes('upload.wikimedia.org')) {
          // Current image is from Wikipedia — check if it matches
          if (entry.image !== wikiThumb) {
            entry.image = wikiThumb;
            report.imageFixed.push(name);
          }
        } else if (entry.image.includes('img.castlecore.uk')) {
          // CDN image — store wiki image for comparison
          entry.wikiImage = wikiThumb;
        }
      }
    } catch (err) {
      console.error(`Error processing "${name}": ${err.message}`);
      report.unmatched.push(name);
    }
  }

  // Save
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2), 'utf8');

  console.log(`\n=== SUMMARY ===`);
  console.log(`Matched: ${report.matched.length}`);
  console.log(`Unmatched: ${report.unmatched.length}`);
  console.log(`Images fixed: ${report.imageFixed.length}`);
  console.log(`Coords updated: ${report.coordsUpdated.length}`);
  console.log(`Descriptions updated: ${report.descUpdated.length}`);
  console.log(`Unmatched names: ${report.unmatched.join(', ')}`);
}

main().catch(console.error);
