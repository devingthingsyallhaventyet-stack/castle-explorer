const fs = require('fs');
const path = require('path');
const vm = require('vm');

let data = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');
const ctx = {};
vm.runInNewContext(data.replace(/\bconst\b/g, 'var'), ctx);
const C = ctx.CASTLES;

// Find all duplicate pairs within ~150m (500ft)
const dupes = [];
for (let i = 0; i < C.length; i++) {
  if (!C[i]) continue;
  for (let j = i + 1; j < C.length; j++) {
    if (!C[j]) continue;
    const dlat = C[i].lat - C[j].lat;
    const dlng = C[i].lng - C[j].lng;
    const d = Math.sqrt(dlat * dlat + dlng * dlng) * 111000;
    if (d < 150) {
      dupes.push({ i, j, a: C[i].name, b: C[j].name, dist: Math.round(d) });
    }
  }
}

console.log(`Found ${dupes.length} duplicate pairs\n`);

// Strategy: for each pair, keep the one with:
// 1. More gallery images
// 2. More reviews
// 3. Longer description
// 4. Shorter/cleaner name (no parenthetical qualifiers)
// Mark losers for deletion

const toNull = new Set();

for (const { i, j, a, b, dist } of dupes) {
  if (toNull.has(i) || toNull.has(j)) continue; // already handled
  
  const ca = C[i];
  const cb = C[j];
  
  // Special case: different types that are legitimately different sites at same location
  // e.g., Durham Castle + Durham Cathedral, St Andrews Castle + Cathedral
  const diffType = ca.type !== cb.type;
  const bothNamed = !a.includes(b) && !b.includes(a) && 
    !a.replace(/\s*\([^)]+\)/, '').includes(b.replace(/\s*\([^)]+\)/, ''));
  
  // Skip pairs that are genuinely different sites (different names, different types)
  if (diffType && bothNamed) {
    console.log(`SKIP (different sites): "${a}" <-> "${b}" (${dist}m)`);
    continue;
  }
  
  // Score each
  const scoreA = (ca.gallery || []).length * 10 + (ca.reviewCount || 0) / 1000 + (ca.description || '').length / 100;
  const scoreB = (cb.gallery || []).length * 10 + (cb.reviewCount || 0) / 1000 + (cb.description || '').length / 100;
  
  // Prefer cleaner name (no parenthetical, no extra qualifiers)
  const cleanA = !a.includes('(') && !a.includes(' - ') && a.length <= b.length;
  const cleanB = !b.includes('(') && !b.includes(' - ') && b.length <= a.length;
  
  let keepIdx, removeIdx, keepName, removeName;
  
  if (scoreA > scoreB || (scoreA === scoreB && cleanA)) {
    keepIdx = i; removeIdx = j;
    keepName = a; removeName = b;
  } else {
    keepIdx = j; removeIdx = i;
    keepName = b; removeName = a;
  }
  
  toNull.add(removeIdx);
  console.log(`DELETE: "${removeName}" (keep "${keepName}") [${dist}m apart, scores ${scoreA.toFixed(1)} vs ${scoreB.toFixed(1)}]`);
}

console.log(`\nTotal to delete: ${toNull.size}`);

// Now null them out in the data string
// We need to find each entry by its _index or position
// Easier approach: rebuild the array
const newCastles = C.map((c, idx) => {
  if (toNull.has(idx)) return null;
  return c;
});

const remaining = newCastles.filter(c => c !== null).length;
console.log(`Remaining sites: ${remaining}`);

// Write as new data.js
const header = 'const CASTLES = ';
const jsonStr = JSON.stringify(newCastles, null, 2);
fs.writeFileSync(path.join(__dirname, 'data.js'), header + jsonStr + ';\n', 'utf8');
console.log('Wrote data.js');
