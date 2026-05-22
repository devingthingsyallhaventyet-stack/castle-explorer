// Fix Wikipedia links: use wikipediaUrl (audited) when available, fall back to wiki
// Adds timeout per request and resume capability
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

async function api(urlPath, opts = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(API + urlPath, { ...opts, headers: { ...HEADERS, ...(opts.headers || {}) }, signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`${res.status} ${urlPath}`);
    return res;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

async function run() {
  const auditData = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));
  const approved = auditData.filter(d => d.reviewStatus === 'approved');

  const wikiMap = {};
  for (const e of approved) {
    const url = e.wikipediaUrl || e.wiki || null;
    if (url) wikiMap[e.name.toLowerCase().trim()] = url;
  }
  console.log(`Approved: ${approved.length}, with wiki URL: ${Object.keys(wikiMap).length}`);

  let allListings = [], page = 1;
  while (true) {
    const j = await api(`/listings?limit=100&page=${page}&sort=id&order=asc`).then(r => r.json());
    allListings.push(...j.listings);
    if (allListings.length >= j.total) break;
    page++;
  }
  console.log(`DB listings: ${allListings.length}\n`);

  let alreadyCorrect = 0, added = 0, replaced = 0, deleted = 0, noAction = 0, errors = 0, retries = 0;

  for (let i = 0; i < allListings.length; i++) {
    const listing = allListings[i];
    const key = listing.name.toLowerCase().trim();
    const correctUrl = wikiMap[key] || null;

    let attempts = 0;
    while (attempts < 3) {
      try {
        const full = await api(`/listings/${listing.id}`).then(r => r.json());
        const wikiLinks = (full.links || []).filter(l =>
          l.type === 'wikipedia' || (l.url && l.url.includes('wikipedia.org'))
        );

        if (wikiLinks.length === 1 && wikiLinks[0].url === correctUrl) {
          alreadyCorrect++;
          break;
        }
        if (wikiLinks.length === 0 && !correctUrl) {
          noAction++;
          break;
        }

        for (const wl of wikiLinks) {
          await api(`/listings/${listing.id}/links/${wl.id}`, { method: 'DELETE' });
          deleted++;
        }

        if (correctUrl) {
          await api(`/listings/${listing.id}/links`, {
            method: 'POST',
            body: JSON.stringify({ type: 'wikipedia', url: correctUrl, label: 'Wikipedia' })
          });
          if (wikiLinks.length > 0) { replaced++; }
          else { added++; console.log(`  ✅ [${listing.id}] ${listing.name}`); }
        }
        break;
      } catch (err) {
        attempts++;
        if (attempts >= 3) {
          console.error(`  ⚠️ [${listing.id}] ${listing.name}: ${err.message} (gave up)`);
          errors++;
        } else {
          retries++;
          await new Promise(r => setTimeout(r, 2000));
        }
      }
    }

    if ((i + 1) % 100 === 0) {
      console.log(`--- ${i + 1}/${allListings.length} | correct: ${alreadyCorrect} | added: ${added} | replaced: ${replaced} | del: ${deleted} | skip: ${noAction} | err: ${errors} | retry: ${retries} ---`);
    }
  }

  console.log(`\n=== COMPLETE ===`);
  console.log(`Already correct: ${alreadyCorrect}`);
  console.log(`Added (was missing): ${added}`);
  console.log(`Replaced (was wrong): ${replaced}`);
  console.log(`Deleted total: ${deleted}`);
  console.log(`No action: ${noAction}`);
  console.log(`Errors: ${errors}`);
  console.log(`Retries: ${retries}`);
}

run().catch(console.error);
