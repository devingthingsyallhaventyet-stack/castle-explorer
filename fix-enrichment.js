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

async function api(method, endpoint, body) {
  const opts = { method, headers: HEADERS };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${API}${endpoint}`, opts);
  return res.json();
}

async function run() {
  // 1. Add subtitles
  console.log('=== SUBTITLES ===');
  
  await api('PUT', '/listings/596', {
    subtitle: "A 16-sided Georgian folly in Devon, built by two cousins who filled it floor to ceiling with shells, feathers and souvenirs from their Grand Tour."
  });
  console.log('A La Ronde: subtitle set');

  await api('PUT', '/listings/829', {
    subtitle: "A Cistercian abbey in the fields of Galway, founded by a king who was buried within its walls and decorated with some of Ireland's rarest medieval wall paintings."
  });
  console.log('Abbey Knockmoy: subtitle set');

  await api('PUT', '/listings/63', {
    subtitle: "Sir Walter Scott's baronial fantasy on the banks of the Tweed — the house that nearly bankrupted him and launched Scotland's Gothic Revival."
  });
  console.log('Abbotsford House: subtitle set');

  // 2. Update people with portrait URLs
  console.log('\n=== PORTRAITS ===');

  // Walter Scott (person id 15)
  await api('PUT', '/listings/63/people/15', {
    portrait_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sir_Thomas_Lawrence_%281769-1830%29_-_Sir_Walter_Scott_%281771-1832%29_-_RCIN_400644_-_Royal_Collection.jpg/250px-Sir_Thomas_Lawrence_%281769-1830%29_-_Sir_Walter_Scott_%281771-1832%29_-_RCIN_400644_-_Royal_Collection.jpg'
  });
  console.log('Walter Scott: portrait set');

  // Cathal Crobhdearg (person id 13)
  await api('PUT', '/listings/829/people/13', {
    portrait_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Possible_Depiction_of_Cathal_Crobhdearg.jpg/250px-Possible_Depiction_of_Cathal_Crobhdearg.jpg'
  });
  console.log('Cathal Crobhdearg: portrait set');

  console.log('\n=== DONE ===');
}

run().catch(console.error);
