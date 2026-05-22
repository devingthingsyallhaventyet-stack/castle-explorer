// Update source links in the DB based on E's review decisions
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

// Updates: { name, oldUrl, newUrl } for UPDATE actions
// Deletes: { name, url } for DELETE actions
const UPDATES = [
  { name: "Newgrange Cursus", oldUrl: "https://whc.unesco.org/en/list/659/", newUrl: "https://www.newgrange.com/" },
];
const DELETES = [];

async function run() {
  // Fetch all listings
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

  const nameToListing = {};
  for (const l of allListings) nameToListing[l.name] = l;

  let updated = 0, deleted = 0, errors = 0;

  // Process UPDATES
  for (const u of UPDATES) {
    const listing = nameToListing[u.name];
    if (!listing) { console.log(`  NOT FOUND: ${u.name}`); errors++; continue; }
    
    // Fetch full listing to get links
    const res = await fetch(`${API}/listings/${listing.id}`, { headers: HEADERS });
    const full = await res.json();
    const links = full.links || [];
    
    const idx = links.findIndex(l => l.url === u.oldUrl);
    if (idx === -1) {
      console.log(`  LINK NOT FOUND: ${u.name} — ${u.oldUrl}`);
      console.log(`  Available:`, links.map(l=>l.url));
      errors++; continue;
    }
    
    links[idx].url = u.newUrl;
    
    const patchRes = await fetch(`${API}/listings/${listing.id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify({ links })
    });
    if (patchRes.ok) {
      console.log(`  UPDATED: ${u.name} — ${u.oldUrl} → ${u.newUrl}`);
      updated++;
    } else {
      console.log(`  PATCH FAILED: ${u.name} — ${patchRes.status}`);
      errors++;
    }
  }

  // Process DELETES
  for (const d of DELETES) {
    const listing = nameToListing[d.name];
    if (!listing) { console.log(`  NOT FOUND: ${d.name}`); errors++; continue; }
    
    const res = await fetch(`${API}/listings/${listing.id}`, { headers: HEADERS });
    const full = await res.json();
    const links = (full.links || []).filter(l => l.url !== d.url);
    
    const patchRes = await fetch(`${API}/listings/${listing.id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify({ links })
    });
    if (patchRes.ok) {
      console.log(`  DELETED: ${d.name} — ${d.url}`);
      deleted++;
    } else {
      console.log(`  DELETE FAILED: ${d.name} — ${patchRes.status}`);
      errors++;
    }
  }

  console.log(`\nDone: ${updated} updated, ${deleted} deleted, ${errors} errors`);
}

run().catch(console.error);
