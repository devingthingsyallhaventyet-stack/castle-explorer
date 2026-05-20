const fs = require('fs');
const src = fs.readFileSync('data.js','utf8');
eval(src.replace('const CASTLES','globalThis.CASTLES'));

// Build lookup
const sites = CASTLES.map((c,i) => ({
  idx: i, name: c.name, lat: c.lat, lng: c.lng, type: c.type,
  norm: c.name.replace(/\s*\(.*?\)/g,'').replace(/\b(castle|abbey|priory|church|cathedral|hall|house|tower|fort|motte|gardens?|museum|ruins?|old|new|exterior|mound)\b/gi,'').trim().toLowerCase().replace(/\s+/g,' ')
}));

function lev(a,b){
  const m=a.length,n=b.length,d=[];
  for(let i=0;i<=m;i++){d[i]=[i];for(let j=1;j<=n;j++)d[i][j]=i===0?j:0;}
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)
    d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  return d[m][n];
}

function dist(a,b){
  const R=6371000,dLat=(b.lat-a.lat)*Math.PI/180,dLng=(b.lng-a.lng)*Math.PI/180;
  const x=Math.sin(dLat/2)**2+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));
}

const dupes = [];
const seen = new Set();

for(let i=0;i<sites.length;i++){
  for(let j=i+1;j<sites.length;j++){
    const a=sites[i], b=sites[j];
    const nameDist = lev(a.norm, b.norm);
    const geoDist = (a.lat && b.lat) ? dist(a,b) : Infinity;
    
    // High confidence: exact normalized name match
    if(a.norm === b.norm && a.norm.length > 2) {
      const key = `${i}-${j}`;
      if(!seen.has(key)){ seen.add(key); dupes.push({a,b,reason:'EXACT NAME',nameDist,geoDist}); }
    }
    // High confidence: very close name (dist<=1) AND within 50km
    else if(nameDist <= 1 && geoDist < 50000) {
      const key = `${i}-${j}`;
      if(!seen.has(key)){ seen.add(key); dupes.push({a,b,reason:'NEAR NAME+REGION',nameDist,geoDist}); }
    }
    // High confidence: close geographically (<200m) AND similar name (dist<=3)
    else if(geoDist < 200 && nameDist <= 3) {
      const key = `${i}-${j}`;
      if(!seen.has(key)){ seen.add(key); dupes.push({a,b,reason:'SAME LOCATION',nameDist,geoDist}); }
    }
  }
}

// Sort by confidence
dupes.sort((a,b) => {
  if(a.reason !== b.reason) return a.reason === 'EXACT NAME' ? -1 : b.reason === 'EXACT NAME' ? 1 : a.reason === 'NEAR NAME+REGION' ? -1 : 1;
  return a.nameDist - b.nameDist || a.geoDist - b.geoDist;
});

console.log(`\n=== HIGH-CONFIDENCE DUPLICATES (${dupes.length} pairs) ===\n`);
for(const d of dupes){
  const geo = d.geoDist < Infinity ? `${Math.round(d.geoDist)}m apart` : 'no coords';
  console.log(`[${d.reason}] nameDist=${d.nameDist}, ${geo}`);
  console.log(`  "${d.a.name}" (idx ${d.a.idx})`);
  console.log(`  "${d.b.name}" (idx ${d.b.idx})`);
  console.log();
}
