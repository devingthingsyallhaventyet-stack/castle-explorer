const fs = require('fs');
const path = require('path');
const API = 'https://castlecore.uk/api';
const tokenFile = fs.readFileSync(path.join(__dirname, '.cloudflare-access-token'), 'utf8').trim().split('\n');
const HEADERS = {
  'Content-Type': 'application/json',
  'CF-Access-Client-Id': tokenFile[0].split(': ')[1].trim(),
  'CF-Access-Client-Secret': tokenFile[1].split(': ')[1].trim()
};

async function run() {
  const updates = [
    { id: 596, google_place_id: 'ChIJ6xc09RCgbUgR1SqzQ7aSA1c' },
    { id: 829, google_place_id: 'ChIJa1bPi__1W0gRaNGjkTV_tyw' },
    { id: 63, google_place_id: 'ChIJp_-CWveCh0gRR03hg4dwjmU' },
  ];
  for (const u of updates) {
    const res = await fetch(`${API}/listings/${u.id}`, {
      method: 'PUT', headers: HEADERS,
      body: JSON.stringify({ google_place_id: u.google_place_id })
    });
    const d = await res.json();
    console.log(u.id, d);
  }
}
run();
