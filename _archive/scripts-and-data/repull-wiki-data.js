const fs = require('fs');
const path = require('path');

const AUDIT_FILE = path.join(__dirname, 'audit-data.json');

const entries = [
  { name: "Dough Castle", article: "Dough_Castle", full: true },
  { name: "Ormond Castle (Ireland)", article: "Ormonde_Castle", full: true },
  { name: "Ormond Castle (Scotland)", article: "Ormond_Castle", full: true },
  { name: "Grallagh Castle", article: "Grallagh_Castle", full: true },
  { name: "Dromineer Castle", article: "Dromineer", full: true },
  { name: "Skryne Church", article: "Skryne_Church", full: true },
  { name: "Dromaneen Castle", article: "Dromaneen_Castle", full: false },
  { name: "Roche Castle", article: "Castle_Roche", full: false },
  { name: "Dynevor Castle", article: "Dinefwr_Castle", full: false },
  { name: "Thornbury Castle", article: "Thornbury_Castle", full: false },
  { name: "Sudeley Castle", article: "Sudeley_Castle", full: false },
  { name: "Prinknash Abbey", article: "Prinknash_Abbey", full: false },
  { name: "Innis Chonnel Castle", article: "Innes_Chonnel_Castle", full: false },
  { name: "Duiske Abbey", article: "Duiske_Abbey", full: false },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchSummary(article) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${article}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CastleCoreBot/1.0 (clawzisabot@proton.me)' } });
  if (!res.ok) throw new Error(`Failed to fetch ${article}: ${res.status}`);
  return res.json();
}

function findEntry(data, entry) {
  const matches = data.filter(e => e.name === entry.name);
  if (matches.length === 1) return matches[0];
  if (matches.length > 1 && entry.match) return matches.find(entry.match);
  // fallback: match by wiki url
  if (matches.length > 1) {
    const byWiki = matches.find(e => e.wiki?.includes(entry.article));
    if (byWiki) return byWiki;
  }
  return matches[0];
}

async function main() {
  const data = JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf8'));
  
  for (const entry of entries) {
    console.log(`\n--- ${entry.name} (${entry.article}) ---`);
    await sleep(1500);
    const wiki = await fetchSummary(entry.article);
    const item = findEntry(data, entry);
    if (!item) { console.log("  NOT FOUND in audit-data.json!"); continue; }

    const changes = [];

    if (entry.full) {
      // Update desc
      if (wiki.extract && item.desc !== wiki.extract) {
        changes.push(`desc: "${item.desc?.substring(0,60)}..." → "${wiki.extract.substring(0,60)}..."`);
        item.desc = wiki.extract;
      }
      // Update image
      if (wiki.thumbnail?.source && item.image !== wiki.thumbnail.source) {
        changes.push(`image: changed`);
        item.image = wiki.thumbnail.source;
      }
    }

    // Update coords (for all entries)
    if (wiki.coordinates) {
      if (item.lat !== wiki.coordinates.lat) {
        changes.push(`lat: ${item.lat} → ${wiki.coordinates.lat}`);
        item.lat = wiki.coordinates.lat;
      }
      if (item.lng !== wiki.coordinates.lon) {
        changes.push(`lng: ${item.lng} → ${wiki.coordinates.lon}`);
        item.lng = wiki.coordinates.lon;
      }
    } else {
      console.log("  No coordinates from Wikipedia");
    }

    if (changes.length === 0) {
      console.log("  No changes needed");
    } else {
      changes.forEach(c => console.log(`  ${c}`));
    }
  }

  fs.writeFileSync(AUDIT_FILE, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log("\n✅ audit-data.json saved");
}

main().catch(e => { console.error(e); process.exit(1); });
