const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'audit-data.json');
const DELAY = 150;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function wikiName(name) {
  // "Kilchurn Castle" -> "Kilchurn_Castle"
  return encodeURIComponent(name.replace(/ /g, '_'));
}

async function fetchCoords(name) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiName(name)}`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'CastleCore/1.0 (clawzisabot@proton.me)' } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.coordinates) {
      return { lat: data.coordinates.lat, lng: data.coordinates.lon };
    }
  } catch {}
  return null;
}

async function main() {
  const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
  const targets = data.filter(e => e.country === 'scotland' && (!e.lat || !e.lng));
  console.log(`Found ${targets.length} Scottish castles missing coordinates`);

  let filled = 0, failed = 0;
  const missing = [];

  for (let i = 0; i < targets.length; i++) {
    const entry = targets[i];
    const coords = await fetchCoords(entry.name);
    if (coords) {
      entry.lat = String(coords.lat);
      entry.lng = String(coords.lng);
      filled++;
    } else {
      failed++;
      missing.push(entry.name);
    }
    if ((i + 1) % 50 === 0) {
      console.log(`Progress: ${i + 1}/${targets.length} | Filled: ${filled} | Failed: ${failed}`);
    }
    await sleep(DELAY);
  }

  // Second pass: try with " castle" appended or removed for failures
  console.log(`\nPass 2: Retrying ${missing.length} failures with name variations...`);
  let pass2 = 0;
  for (let i = 0; i < missing.length; i++) {
    const name = missing[i];
    const entry = data.find(e => e.name === name && e.country === 'scotland');
    // Try variations
    const variations = [];
    if (!name.toLowerCase().includes('castle')) {
      variations.push(name + ' Castle');
    } else {
      variations.push(name.replace(/\s*Castle\s*/i, '').trim());
      variations.push(name + ' (castle)');
    }
    // Also try with county
    if (entry.county) {
      variations.push(name + ', ' + entry.county);
    }
    
    let found = false;
    for (const v of variations) {
      const coords = await fetchCoords(v);
      if (coords) {
        entry.lat = String(coords.lat);
        entry.lng = String(coords.lng);
        pass2++;
        found = true;
        break;
      }
      await sleep(DELAY);
    }
    if ((i + 1) % 50 === 0) {
      console.log(`Pass 2 progress: ${i + 1}/${missing.length} | Extra filled: ${pass2}`);
    }
    if (!found) await sleep(DELAY);
  }

  const totalFilled = filled + pass2;
  const totalMissing = targets.length - totalFilled;

  console.log(`\n=== SUMMARY ===`);
  console.log(`Total Scottish castles processed: ${targets.length}`);
  console.log(`Pass 1 filled: ${filled}`);
  console.log(`Pass 2 filled: ${pass2}`);
  console.log(`Total filled: ${totalFilled}`);
  console.log(`Still missing: ${totalMissing}`);

  if (totalMissing > 0) {
    const stillMissing = data.filter(e => e.country === 'scotland' && (!e.lat || !e.lng));
    console.log(`\nStill missing coords:`);
    stillMissing.forEach(e => console.log(`  - ${e.name} (${e.county})`));
  }

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2), 'utf8');
  console.log(`\nSaved updated audit-data.json`);
}

main().catch(console.error);
