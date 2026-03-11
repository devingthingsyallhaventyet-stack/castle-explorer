const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync(__dirname + '/data.js','utf8').replace(/\bconst\b/g,'var');
const ctx = {};
vm.runInNewContext(d, ctx);
const C = ctx.CASTLES.filter(c => c && c.name).sort((a,b) => a.name.localeCompare(b.name));

// 1. Name similarity - find entries with very similar names
function normalize(name) {
  return name.toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/castle|abbey|priory|cathedral|hall|house|tower|fort|ruins?|church|chapel|garden|exterior|museum|views?|mound|motte/gi, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, () => Array(n+1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+(a[i-1]!==b[j-1]?1:0));
  return dp[m][n];
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const p = Math.PI/180;
  const a = 0.5 - Math.cos((lat2-lat1)*p)/2 + Math.cos(lat1*p)*Math.cos(lat2*p)*(1-Math.cos((lon2-lon1)*p))/2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

console.log('=== DUPLICATE SCAN: ' + C.length + ' sites ===\n');

// Pass 1: Exact normalized name matches
console.log('--- EXACT NAME MATCHES (after removing castle/abbey/etc) ---');
const normMap = {};
for (let i = 0; i < C.length; i++) {
  const n = normalize(C[i].name);
  if (!n) continue;
  if (!normMap[n]) normMap[n] = [];
  normMap[n].push({idx: i+1, name: C[i].name, lat: C[i].lat, lng: C[i].lng});
}
let exactCount = 0;
for (const [norm, entries] of Object.entries(normMap)) {
  if (entries.length > 1) {
    exactCount++;
    const names = entries.map(e => `  ID-${String(e.idx).padStart(4,'0')}: ${e.name}`).join('\n');
    // Check distance between them
    let dist = '';
    if (entries.length === 2 && entries[0].lat && entries[1].lat) {
      const d = haversine(entries[0].lat, entries[0].lng, entries[1].lat, entries[1].lng);
      dist = ` [${Math.round(d)}m apart]`;
    }
    console.log(`\n"${norm}"${dist}:\n${names}`);
  }
}
console.log(`\nTotal exact matches: ${exactCount}\n`);

// Pass 2: Very similar names (levenshtein <= 3 on normalized)
console.log('--- SIMILAR NAMES (levenshtein <= 3) ---');
const norms = Object.keys(normMap).filter(n => n.length > 3);
let simCount = 0;
const seen = new Set();
for (let i = 0; i < norms.length; i++) {
  for (let j = i+1; j < norms.length; j++) {
    if (Math.abs(norms[i].length - norms[j].length) > 3) continue;
    const d = levenshtein(norms[i], norms[j]);
    if (d <= 3 && d > 0) {
      const key = norms[i] + '|' + norms[j];
      if (seen.has(key)) continue;
      seen.add(key);
      simCount++;
      const e1 = normMap[norms[i]];
      const e2 = normMap[norms[j]];
      console.log(`\nSimilar (dist=${d}):`);
      e1.forEach(e => console.log(`  ID-${String(e.idx).padStart(4,'0')}: ${e.name}`));
      e2.forEach(e => console.log(`  ID-${String(e.idx).padStart(4,'0')}: ${e.name}`));
    }
  }
}
console.log(`\nTotal similar pairs: ${simCount}\n`);

// Pass 3: Geographic proximity (within 200m, different names)
console.log('--- GEOGRAPHIC PROXIMITY (<200m, different names) ---');
let geoCount = 0;
for (let i = 0; i < C.length; i++) {
  if (!C[i].lat) continue;
  for (let j = i+1; j < C.length; j++) {
    if (!C[j].lat) continue;
    // Quick filter
    if (Math.abs(C[i].lat - C[j].lat) > 0.003) continue;
    if (Math.abs(C[i].lng - C[j].lng) > 0.005) continue;
    const d = haversine(C[i].lat, C[i].lng, C[j].lat, C[j].lng);
    if (d < 200 && C[i].name !== C[j].name) {
      geoCount++;
      console.log(`\n${Math.round(d)}m apart:`);
      console.log(`  ID-${String(i+1).padStart(4,'0')}: ${C[i].name} (${C[i].lat}, ${C[i].lng})`);
      console.log(`  ID-${String(j+1).padStart(4,'0')}: ${C[j].name} (${C[j].lat}, ${C[j].lng})`);
    }
  }
}
console.log(`\nTotal proximity pairs: ${geoCount}`);
