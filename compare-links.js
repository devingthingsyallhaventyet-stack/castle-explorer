// Compare links: audit-data.json (approved tab) vs DB (new dashboard)
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

async function api(urlPath) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(API + urlPath, { headers: HEADERS, signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`${res.status} ${urlPath}`);
    return res.json();
  } catch (err) { clearTimeout(timeout); throw err; }
}

async function run() {
  // Load audit data
  const auditData = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));
  const approved = auditData.filter(d => d.reviewStatus === 'approved');

  // Build audit link map: name → { wiki, maps, sources[] }
  const auditMap = {};
  for (const e of approved) {
    const wikiUrl = e.wikipediaUrl || e.wiki || null;
    const mapsLink = e.mapsLink || null;
    const sources = [];
    if (Array.isArray(e.source)) {
      for (const s of e.source) {
        if (s.url) sources.push(s.url);
      }
    }
    auditMap[e.name.toLowerCase().trim()] = {
      name: e.name,
      wiki: wikiUrl,
      maps: mapsLink,
      sources
    };
  }

  // Fetch all DB listings
  let allListings = [], page = 1;
  while (true) {
    const j = await api(`/listings?limit=100&page=${page}&sort=id&order=asc`);
    allListings.push(...j.listings);
    if (allListings.length >= j.total) break;
    page++;
  }
  console.log(`Audit approved: ${approved.length}, DB listings: ${allListings.length}\n`);

  const mismatches = [];
  const missing = [];
  const extra = [];

  for (let i = 0; i < allListings.length; i++) {
    const listing = allListings[i];
    const key = listing.name.toLowerCase().trim();
    const audit = auditMap[key];

    if (!audit) {
      missing.push({ name: listing.name, issue: 'Not in audit data' });
      continue;
    }

    let full;
    let attempts = 0;
    while (attempts < 3) {
      try {
        full = await api(`/listings/${listing.id}`);
        break;
      } catch (err) {
        attempts++;
        if (attempts >= 3) { console.error(`  Failed to fetch ${listing.name}`); full = null; }
        else await new Promise(r => setTimeout(r, 2000));
      }
    }
    if (!full) continue;

    const dbLinks = full.links || [];
    const dbWiki = dbLinks.filter(l => l.type === 'wikipedia' || (l.url && l.url.includes('wikipedia.org')));
    const dbMaps = dbLinks.filter(l => l.type === 'google_places' || (l.url && l.url.includes('google.com/maps')));
    const dbHeritage = dbLinks.filter(l => l.type === 'heritage' || l.type === 'official');
    const dbOther = dbLinks.filter(l => !['wikipedia','google_places','heritage','official'].includes(l.type) && !(l.url && l.url.includes('wikipedia.org')) && !(l.url && l.url.includes('google.com/maps')));

    const issues = [];

    // Check Wikipedia
    if (audit.wiki) {
      if (dbWiki.length === 0) {
        issues.push(`MISSING wiki: expected ${audit.wiki}`);
      } else if (dbWiki[0].url !== audit.wiki) {
        issues.push(`WRONG wiki: DB=${dbWiki[0].url} | Audit=${audit.wiki}`);
      }
    } else {
      if (dbWiki.length > 0) {
        issues.push(`EXTRA wiki in DB: ${dbWiki[0].url} (not in audit)`);
      }
    }

    // Check Maps
    if (audit.maps) {
      if (dbMaps.length === 0) {
        issues.push(`MISSING maps: expected ${audit.maps}`);
      } else if (dbMaps[0].url !== audit.maps) {
        issues.push(`WRONG maps: DB=${dbMaps[0].url} | Audit=${audit.maps}`);
      }
    } else {
      if (dbMaps.length > 0) {
        // Not necessarily wrong — maps could have been auto-generated
      }
    }

    // Check heritage/source links
    const auditSourceUrls = new Set(audit.sources);
    const dbSourceUrls = new Set(dbHeritage.map(l => l.url));

    for (const url of auditSourceUrls) {
      if (!dbSourceUrls.has(url)) {
        issues.push(`MISSING source: ${url}`);
      }
    }
    for (const url of dbSourceUrls) {
      if (!auditSourceUrls.has(url)) {
        issues.push(`EXTRA source in DB: ${url}`);
      }
    }

    if (issues.length > 0) {
      mismatches.push({ name: listing.name, id: listing.id, issues });
    }

    if ((i + 1) % 100 === 0) {
      console.log(`  Checked ${i + 1}/${allListings.length}...`);
    }
  }

  // Summary
  console.log(`\n=== COMPARISON COMPLETE ===`);
  console.log(`Total checked: ${allListings.length}`);
  console.log(`Mismatches: ${mismatches.length}`);
  console.log(`Not in audit: ${missing.length}`);

  if (mismatches.length > 0) {
    console.log(`\n--- MISMATCHES ---`);
    for (const m of mismatches) {
      console.log(`\n[${m.id}] ${m.name}:`);
      for (const issue of m.issues) {
        console.log(`  • ${issue}`);
      }
    }
  }

  if (missing.length > 0) {
    console.log(`\n--- NOT IN AUDIT ---`);
    for (const m of missing) console.log(`  ${m.name}`);
  }

  // Stats
  const wikiMissing = mismatches.filter(m => m.issues.some(i => i.startsWith('MISSING wiki'))).length;
  const wikiWrong = mismatches.filter(m => m.issues.some(i => i.startsWith('WRONG wiki'))).length;
  const wikiExtra = mismatches.filter(m => m.issues.some(i => i.startsWith('EXTRA wiki'))).length;
  const mapsMissing = mismatches.filter(m => m.issues.some(i => i.startsWith('MISSING maps'))).length;
  const mapsWrong = mismatches.filter(m => m.issues.some(i => i.startsWith('WRONG maps'))).length;
  const srcMissing = mismatches.filter(m => m.issues.some(i => i.startsWith('MISSING source'))).length;
  const srcExtra = mismatches.filter(m => m.issues.some(i => i.startsWith('EXTRA source'))).length;

  console.log(`\n--- BREAKDOWN ---`);
  console.log(`Wiki missing: ${wikiMissing}, wrong: ${wikiWrong}, extra: ${wikiExtra}`);
  console.log(`Maps missing: ${mapsMissing}, wrong: ${mapsWrong}`);
  console.log(`Sources missing: ${srcMissing}, extra: ${srcExtra}`);
}

run().catch(console.error);
