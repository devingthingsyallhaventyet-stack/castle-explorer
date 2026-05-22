const https = require('https');

const BASE = 'https://castle-explorer2.devingthingsyallhaventyet.workers.dev';

function api(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(BASE + path);
    const opts = { method, hostname: url.hostname, path: url.pathname, headers: { 'Content-Type': 'application/json' } };
    const req = https.request(opts, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function fixEncoding(text) {
  if (!text) return text;
  // Fix common mojibake patterns for em dash (—)
  return text
    .replace(/â€"/g, '—')
    .replace(/â€˜/g, ''')
    .replace(/â€™/g, ''')
    .replace(/â€œ/g, '"')
    .replace(/â€\u009d/g, '"')
    .replace(/\u00e2\u20ac\u201c/g, '—')
    .replace(/\u00e2\u20ac\u201d/g, '—')
    .replace(/\u00e2\u20ac\u2122/g, ''')
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00e2\u20ac\u0153/g, '—')
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00e2\u20ac\u009c/g, '—');
}

async function main() {
  const listing = await api('GET', '/api/listings/1');
  
  const fields = ['subtitle', 'description_expanded', 'architecture'];
  const updates = {};
  let changed = false;
  
  for (const f of fields) {
    if (listing[f]) {
      const fixed = fixEncoding(listing[f]);
      if (fixed !== listing[f]) {
        updates[f] = fixed;
        changed = true;
        console.log(`Fixed ${f}:`);
        console.log(`  Before: ${listing[f].substring(0, 100)}...`);
        console.log(`  After:  ${fixed.substring(0, 100)}...`);
      }
    }
  }
  
  // Also check timeline and people descriptions
  if (listing.timeline) {
    for (const t of listing.timeline) {
      const fixed = fixEncoding(t.description);
      if (fixed !== t.description) {
        console.log(`Fixing timeline ${t.id}: ${t.title}`);
        await api('PUT', `/api/listings/1/timeline/${t.id}`, { description: fixed });
      }
    }
  }
  
  if (listing.people) {
    for (const p of listing.people) {
      const fixed = fixEncoding(p.role_description);
      if (fixed !== p.role_description) {
        console.log(`Fixing person ${p.id}: ${p.name}`);
        await api('PUT', `/api/listings/1/people/${p.id}`, { role_description: fixed });
      }
    }
  }
  
  if (changed) {
    await api('PUT', '/api/listings/1', updates);
    console.log('\nListing fields updated.');
  } else {
    console.log('No mojibake found in main fields (might be a different encoding issue).');
  }
}

main().catch(console.error);
