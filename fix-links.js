// Fix links: wipe all links + enrichment data, reimport only wiki + source[] + google maps
const API = 'https://castlecore.uk/api';
const fs = require('fs');
const tokenFile = fs.readFileSync(__dirname + '/.cloudflare-access-token', 'utf8').trim().split('\n');
const clientId = tokenFile[0].split(': ')[1].trim();
const clientSecret = tokenFile[1].split(': ')[1].trim();
const AUTH = { 'CF-Access-Client-Id': clientId, 'CF-Access-Client-Secret': clientSecret };
const HEADERS = { 'Content-Type': 'application/json', ...AUTH };

async function api(path, opts = {}) {
  opts.headers = { ...AUTH, ...(opts.headers || {}) };
  const res = await fetch(`${API}${path}`, opts);
  if (path.includes('listings') && opts.method !== 'DELETE') {
    return res.json();
  }
  return res;
}

async function run() {
  const data = JSON.parse(fs.readFileSync(__dirname + '/audit-data.json', 'utf8'));
  const approved = data.filter(d => d.reviewStatus === 'approved');

  // Step 1: Get all listings
  console.log('=== STEP 1: Fetching all listings ===');
  let allListings = [];
  let page = 1;
  while (true) {
    const j = await api(`/listings?limit=100&page=${page}&sort=id&order=asc`);
    allListings.push(...j.listings);
    if (allListings.length >= j.total) break;
    page++;
  }
  console.log(`Fetched ${allListings.length} listings`);

  // Step 2: For each listing, delete all links and sub-resources, reset enriched fields
  console.log('\n=== STEP 2: Wiping links + enrichment data ===');
  let wiped = 0;
  for (const listing of allListings) {
    const full = await api(`/listings/${listing.id}`);

    // Delete all sub-resources
    for (const link of (full.links || [])) {
      await api(`/listings/${listing.id}/links/${link.id}`, { method: 'DELETE' });
    }
    for (const t of (full.timeline || [])) {
      await api(`/listings/${listing.id}/timeline/${t.id}`, { method: 'DELETE' });
    }
    for (const p of (full.people || [])) {
      await api(`/listings/${listing.id}/people/${p.id}`, { method: 'DELETE' });
    }
    for (const d of (full.designations || [])) {
      await api(`/listings/${listing.id}/designations/${d.id}`, { method: 'DELETE' });
    }
    for (const v of (full.videos || [])) {
      await api(`/listings/${listing.id}/videos/${v.id}`, { method: 'DELETE' });
    }
    for (const fr of (full.further_reading || [])) {
      await api(`/listings/${listing.id}/further-reading/${fr.id}`, { method: 'DELETE' });
    }

    // Reset enriched fields
    await api(`/listings/${listing.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: full.name, slug: full.slug, country: full.country, region: full.region,
        subtitle: null, type: 'Castle', century: null,
        town: null, county: null, latitude: null, longitude: null,
        status: null, condition: null,
        google_place_id: null, google_rating: null, google_review_count: null,
        description_short: null, description_expanded: null, architecture: null,
        terrain_description: null, terrain_tags: null,
        getting_there_car: null, getting_there_train: null,
        getting_there_bus: null, getting_there_airport: null,
        tags: null, published: 0
      })
    });

    wiped++;
    if (wiped % 50 === 0) console.log(`  Wiped ${wiped}/${allListings.length}`);
  }
  console.log(`  Wiped ${wiped} listings total`);

  // Step 3: Build name→listing map
  const nameToListing = {};
  for (const l of allListings) {
    nameToListing[l.name.toLowerCase().trim()] = l;
  }

  // Step 4: Reimport links — ONLY wiki + source[] + mapsLink
  console.log('\n=== STEP 3: Reimporting links (wiki + source[] + mapsLink only) ===');
  let linkCount = 0;
  let notFound = 0;
  for (const entry of approved) {
    const listing = nameToListing[entry.name.toLowerCase().trim()];
    if (!listing) { notFound++; continue; }

    const links = [];

    if (entry.wiki) {
      links.push({ type: 'wikipedia', url: entry.wiki, label: 'Wikipedia' });
    }

    if (entry.source && Array.isArray(entry.source)) {
      for (const src of entry.source) {
        if (src.url) {
          const already = links.some(l => l.url === src.url);
          if (!already) {
            links.push({ type: 'heritage', url: src.url, label: src.name || 'Heritage Body' });
          }
        }
      }
    }

    if (entry.mapsLink) {
      links.push({ type: 'google_places', url: entry.mapsLink, label: 'Google Maps' });
    }

    for (const link of links) {
      await api(`/listings/${listing.id}/links`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(link)
      });
      linkCount++;
    }
  }

  console.log(`  Added ${linkCount} links`);
  console.log(`  Not found in DB: ${notFound}`);

  // Verification
  console.log('\n=== VERIFICATION ===');
  for (const name of ['Abbey Dore', 'A La Ronde', 'Edinburgh Castle']) {
    const l = nameToListing[name.toLowerCase().trim()];
    if (!l) continue;
    const full = await api(`/listings/${l.id}`);
    console.log(`${name}: ${full.links.length} links → ${full.links.map(x => x.type + ': ' + x.url).join(' | ')}`);
  }

  console.log('\n=== DONE ===');
}

run().catch(console.error);
