// Apply E's broken link review: UPDATE, DELETE, OK
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
  const t = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(API + urlPath, { ...opts, headers: { ...HEADERS, ...(opts.headers || {}) }, signal: controller.signal });
    clearTimeout(t);
    if (!res.ok) throw new Error(`${res.status} ${urlPath}`);
    return res;
  } catch (err) { clearTimeout(t); throw err; }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  // Parse review file
  const raw = fs.readFileSync('C:\\Users\\Clawzisabot\\.openclaw\\media\\inbound\\file_434---be43ff27-4fac-4115-bfdf-578f4133d8fc.txt', 'utf8');
  const lines = raw.trim().split('\n').slice(1); // skip header
  const actions = lines.map(line => {
    const parts = line.split(' | ');
    return { name: parts[0].trim(), action: parts[1].trim(), url: parts[2].trim() };
  });

  const updates = actions.filter(a => a.action === 'UPDATE');
  const deletes = actions.filter(a => a.action === 'DELETE');
  const oks = actions.filter(a => a.action === 'OK');
  console.log(`Review: ${updates.length} UPDATEs, ${deletes.length} DELETEs, ${oks.length} OKs\n`);

  // Fetch all listings to build name→id map
  let allListings = [], page = 1;
  while (true) {
    const j = await api(`/listings?limit=100&page=${page}&sort=id&order=asc`).then(r => r.json());
    allListings.push(...j.listings);
    if (allListings.length >= j.total) break;
    page++;
  }
  const nameToId = {};
  for (const l of allListings) nameToId[l.name.toLowerCase().trim()] = l.id;
  console.log(`Loaded ${allListings.length} listings\n`);

  // Also update audit-data.json
  const auditData = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));
  const auditMap = {};
  for (const e of auditData) auditMap[e.name.toLowerCase().trim()] = e;

  let updated = 0, deleted = 0, errors = 0;

  // Process UPDATEs: find the old link, delete it, add new one
  console.log('--- UPDATES ---');
  for (const item of updates) {
    const id = nameToId[item.name.toLowerCase().trim()];
    if (!id) { console.log(`  ⚠️ ${item.name}: not found in DB`); errors++; continue; }

    try {
      const full = await api(`/listings/${id}`).then(r => r.json());
      const oldLinks = (full.links || []).filter(l =>
        l.type === 'heritage' || l.type === 'official'
      );

      // Delete all heritage/official links (there should be one)
      for (const ol of oldLinks) {
        await api(`/listings/${id}/links/${ol.id}`, { method: 'DELETE' });
      }

      // Add new link
      // Determine label from URL
      let label = 'Heritage';
      if (item.url.includes('heritageireland.ie')) label = 'Heritage Ireland';
      else if (item.url.includes('cadw.gov.wales')) label = 'Cadw';
      else if (item.url.includes('historicenvironment.scot')) label = 'Historic Environment Scotland';
      else if (item.url.includes('nts.org.uk')) label = 'National Trust for Scotland';
      else if (item.url.includes('nationaltrust.org.uk')) label = 'National Trust';

      await api(`/listings/${id}/links`, {
        method: 'POST',
        body: JSON.stringify({ type: 'heritage', url: item.url, label })
      });

      // Update audit-data.json
      const ae = auditMap[item.name.toLowerCase().trim()];
      if (ae && Array.isArray(ae.source)) {
        // Replace the matching source URL or add if not found
        let replaced = false;
        for (let i = 0; i < ae.source.length; i++) {
          if (oldLinks.some(ol => ol.url === ae.source[i].url)) {
            ae.source[i] = { name: label, url: item.url };
            replaced = true;
            break;
          }
        }
        if (!replaced) ae.source.push({ name: label, url: item.url });
      }

      updated++;
      console.log(`  ✅ ${item.name} → ${item.url}`);
    } catch (err) {
      console.error(`  ⚠️ ${item.name}: ${err.message}`);
      errors++;
    }
    await sleep(200);
  }

  // Process DELETEs: find and remove the heritage link
  console.log('\n--- DELETES ---');
  for (const item of deletes) {
    const id = nameToId[item.name.toLowerCase().trim()];
    if (!id) { console.log(`  ⚠️ ${item.name}: not found in DB`); errors++; continue; }

    try {
      const full = await api(`/listings/${id}`).then(r => r.json());
      const targetLinks = (full.links || []).filter(l =>
        (l.type === 'heritage' || l.type === 'official') && l.url === item.url
      );

      if (targetLinks.length === 0) {
        // Try broader match
        const allHeritage = (full.links || []).filter(l => l.type === 'heritage' || l.type === 'official');
        for (const h of allHeritage) {
          await api(`/listings/${id}/links/${h.id}`, { method: 'DELETE' });
        }
        if (allHeritage.length > 0) {
          deleted++;
          console.log(`  🗑️ ${item.name} — deleted ${allHeritage.length} heritage link(s)`);
        } else {
          console.log(`  ⚠️ ${item.name}: no matching link found to delete`);
        }
      } else {
        for (const tl of targetLinks) {
          await api(`/listings/${id}/links/${tl.id}`, { method: 'DELETE' });
        }
        deleted++;
        console.log(`  🗑️ ${item.name} — deleted`);
      }

      // Update audit-data.json
      const ae = auditMap[item.name.toLowerCase().trim()];
      if (ae && Array.isArray(ae.source)) {
        ae.source = ae.source.filter(s => s.url !== item.url);
      }
    } catch (err) {
      console.error(`  ⚠️ ${item.name}: ${err.message}`);
      errors++;
    }
    await sleep(200);
  }

  // Save audit-data.json
  fs.writeFileSync(path.join(__dirname, 'audit-data.json'), JSON.stringify(auditData, null, 2));

  console.log(`\n=== COMPLETE ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Deleted: ${deleted}`);
  console.log(`OK (no action): ${oks.length}`);
  console.log(`Errors: ${errors}`);
}

run().catch(console.error);
