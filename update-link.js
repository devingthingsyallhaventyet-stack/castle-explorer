const fs = require('fs');
const path = require('path');

const CF_ID = '79def16569188b63fa6ba3cfab437619.access';
const CF_SECRET = '3e0e150e790bdc325469f796d67f4607948fbbdcd438071267fe82b8dd44f736';
const headers = { 'CF-Access-Client-Id': CF_ID, 'CF-Access-Client-Secret': CF_SECRET };

async function updateLink(castleName, oldUrl, newUrl, newLabel) {
  const searchRes = await fetch(`https://castlecore.uk/api/listings?search=${encodeURIComponent(castleName)}`, { headers });
  const body = await searchRes.json();
  const listings = body.listings || body;
  const listing = listings.find(l => l.name === castleName);
  if (!listing) { console.log(`NOT FOUND: ${castleName}`); return false; }

  const fullRes = await fetch(`https://castlecore.uk/api/listings/${listing.id}`, { headers });
  const full = await fullRes.json();
  
  const newLinks = (full.links || []).map(l => 
    l.url === oldUrl ? { url: newUrl, label: newLabel || 'Official Website' } : l
  );

  const updateRes = await fetch(`https://castlecore.uk/api/listings/${listing.id}`, {
    method: 'PATCH',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ links: newLinks })
  });
  
  console.log(`${castleName}: ${updateRes.status === 200 ? 'OK' : 'FAIL ' + updateRes.status}`);
  return updateRes.status === 200;
}

// Apply updates
async function main() {
  await updateLink('Newgrange Cursus', 'https://whc.unesco.org/en/list/659/', 'https://www.newgrange.com/', 'Official Website');
}

main().catch(console.error);
