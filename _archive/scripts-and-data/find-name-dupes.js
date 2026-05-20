const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync(__dirname + '/data.js', 'utf8').replace(/\bconst\b/g, 'var');
const ctx = {};
vm.runInNewContext(d, ctx);
const C = ctx.CASTLES.filter(c => c && c.name);

function norm(n) { return n.toLowerCase().replace(/[^a-z]+/g, ' ').trim(); }

// Build adjacency: name A relates to name B if one contains the other (normalized)
const edges = [];
for (let i = 0; i < C.length; i++) {
  for (let j = i + 1; j < C.length; j++) {
    const a = norm(C[i].name);
    const b = norm(C[j].name);
    if (a === b || a.includes(b) || b.includes(a)) {
      edges.push([i, j]);
    }
  }
}

// Union-Find to cluster
const parent = C.map((_, i) => i);
function find(x) { return parent[x] === x ? x : (parent[x] = find(parent[x])); }
function union(a, b) { parent[find(a)] = find(b); }
edges.forEach(([a, b]) => union(a, b));

// Group clusters
const clusters = {};
C.forEach((c, i) => {
  const root = find(i);
  if (!clusters[root]) clusters[root] = [];
  clusters[root].push(c);
});

// Filter to clusters with 2+ members
const dupeGroups = Object.values(clusters)
  .filter(g => g.length > 1)
  .map(g => {
    g.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    return {
      keep: g[0],
      remove: g.slice(1),
      all: g
    };
  })
  .sort((a, b) => a.keep.name.localeCompare(b.keep.name));

console.log(`Found ${dupeGroups.length} duplicate groups (${dupeGroups.reduce((s, g) => s + g.remove.length, 0)} entries to remove)\n`);

dupeGroups.forEach((g, i) => {
  console.log(`${i + 1}. KEEP: ${g.keep.name} (${g.keep.type}, ${g.keep.reviewCount || 0} reviews)`);
  g.remove.forEach(r => {
    console.log(`   DEL: ${r.name} (${r.type}, ${r.reviewCount || 0} reviews)`);
  });
  console.log('');
});

// Save to JSON for automated removal
fs.writeFileSync(__dirname + '/name-dupes.json', JSON.stringify(dupeGroups.map(g => ({
  keep: g.keep.name,
  remove: g.remove.map(r => r.name)
})), null, 2), 'utf8');
