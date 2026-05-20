// Add Google Maps links from audit-data.json to existing listings
const API = 'https://castlecore.uk/api';

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function run() {
  const fs = require('fs');
  const data = JSON.parse(fs.readFileSync('./audit-data.json', 'utf8'));
  const approved = data.filter(d => d.reviewStatus === 'approved');
  
  console.log(`Processing ${approved.length} approved listings for Google Maps links...`);
  
  // First, get all listings from DB to match by slug
  const res = await fetch(`${API}/listings?limit=9999`);
  const { listings } = await res.json();
  
  // Build slug -> id map
  const slugToId = {};
  for (const l of listings) {
    slugToId[l.slug] = l.id;
  }
  
  let added = 0;
  let skipped = 0;
  let notFound = 0;

  for (let i = 0; i < approved.length; i++) {
    const entry = approved[i];
    if (!entry.mapsLink) { skipped++; continue; }
    
    const slug = slugify(entry.name.trim());
    const listingId = slugToId[slug];
    
    if (!listingId) {
      notFound++;
      continue;
    }

    try {
      const r = await fetch(`${API}/listings/${listingId}/links`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'google_places',
          url: entry.mapsLink,
          label: 'Google Maps'
        })
      });
      
      if (r.ok) added++;
      else skipped++;
    } catch(e) {
      console.error(`Error for ${entry.name}: ${e.message}`);
    }

    if ((added + skipped) % 100 === 0) {
      console.log(`Progress: ${added} added, ${skipped} skipped, ${notFound} not found (${i + 1}/${approved.length})`);
    }
  }

  console.log('\n=== MAPS LINKS IMPORT COMPLETE ===');
  console.log(`Added: ${added}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Not found in DB: ${notFound}`);
}

run().catch(console.error);
