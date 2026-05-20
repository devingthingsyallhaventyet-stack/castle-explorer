// Reimport links: ONLY wiki + source[] + mapsLink from audit data
const fs = require('fs');
const path = require('path');
const API = 'https://castlecore.uk/api';
const tokenFile = fs.readFileSync(path.join(__dirname, '.cloudflare-access-token'), 'utf8').trim().split('\n');
const clientId = tokenFile[0].split(': ')[1].trim();
const clientSecret = tokenFile[1].split(': ')[1].trim();
const HEADERS = {
  'Content-Type': 'application/json',
  'CF-Access-Client-Id': clientId,
  'CF-Access-Client-Secret': clientSecret
};

async function run() {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));
  const approved = data.filter(d => d.reviewStatus === 'approved');

  // Get all listings to build name map
  let allListings = [];
  let page = 1;
  while (true) {
    const res = await fetch(`${API}/listings?limit=100&page=${page}&sort=id&order=asc`, { headers: HEADERS });
    const j = await res.json();
    allListings.push(...j.listings);
    if (allListings.length >= j.total) break;
    page++;
  }
  console.log(`Fetched ${allListings.length} listings`);

  const nameToId = {};
  for (const l of allListings) {
    nameToId[l.name.toLowerCase().trim()] = l.id;
  }

  let added = 0, notFound = 0, errors = 0;
  const batch = []; // collect all link inserts

  for (const entry of approved) {
    const id = nameToId[entry.name.toLowerCase().trim()];
    if (!id) { notFound++; continue; }

    const links = [];

    if (entry.wiki) {
      links.push({ type: 'wikipedia', url: entry.wiki, label: 'Wikipedia' });
    }

    // ONLY source[] — NOT sources[]
    if (entry.source && Array.isArray(entry.source)) {
      for (const src of entry.source) {
        if (src.url && !links.some(l => l.url === src.url)) {
          links.push({ type: 'heritage', url: src.url, label: src.name || 'Heritage Body' });
        }
      }
    }

    if (entry.mapsLink) {
      links.push({ type: 'google_places', url: entry.mapsLink, label: 'Google Maps' });
    }

    // Fire all link posts in parallel per listing
    const results = await Promise.all(links.map(link =>
      fetch(`${API}/listings/${id}/links`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(link)
      }).then(r => r.ok ? 1 : 0).catch(() => 0)
    ));

    added += results.reduce((a, b) => a + b, 0);
    errors += results.filter(r => r === 0).length;

    if ((added + errors) % 500 === 0) console.log(`  Progress: ${added} added, ${errors} errors`);
  }

  console.log(`\n=== DONE ===`);
  console.log(`Added: ${added}`);
  console.log(`Not found in DB: ${notFound}`);
  console.log(`Errors: ${errors}`);

  // Verify Abbey Dore
  const adId = nameToId['abbey dore'];
  if (adId) {
    const res = await fetch(`${API}/listings/${adId}`, { headers: HEADERS });
    const full = await res.json();
    console.log(`\nAbbey Dore: ${full.links.length} links`);
    full.links.forEach(l => console.log(`  ${l.type}: ${l.url}`));
  }
}

run().catch(console.error);
