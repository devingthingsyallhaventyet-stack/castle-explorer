const fs = require('fs');
console.log('Reading...');
const raw = fs.readFileSync('data.js', 'utf8');
const castles = JSON.parse(raw.replace(/^const CASTLES\s*=\s*/, '').replace(/;\s*$/, ''));
console.log('Parsed', castles.length);

(async () => {
  console.log('Fetching...');
  const start = Date.now();
  const res = await fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Edinburgh+Castle&prop=pageimages&format=json&pithumbsize=500', {
    headers: { 'User-Agent': 'castlecore-bot/1.0 (castle explorer project; contact@example.com)' }
  });
  const data = await res.json();
  console.log('Done in', Date.now() - start, 'ms');
  console.log(JSON.stringify(data).substring(0, 100));
})();
