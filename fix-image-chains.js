const fs = require('fs');
const s = fs.readFileSync('data.js', 'utf8');
const fn = new Function(s + ';return CASTLES');
const castles = fn();

// Build a map of castle names for matching
const nameMap = new Map(); // normalized name -> index
castles.forEach((c, i) => {
  const norm = c.name.toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/\bcastle\b|\bhouse\b|\babbey\b|\bpriory\b|\bpalace\b|\btower\b|\bhall\b|\bfort\b|\bchurch\b|\bfriary\b|\bmonastery\b|\bcathedral\b/g, '')
    .replace(/\s+/g, ' ').trim();
  nameMap.set(norm, i);
});

// For each Wikipedia image, try to figure out which castle the filename actually belongs to
function extractCastleFromFilename(url) {
  const parts = url.split('/');
  let filename = decodeURIComponent(parts[parts.length - 1] || parts[parts.length - 2] || '');
  // Remove size prefix like "500px-"
  filename = filename.replace(/^\d+px-/, '');
  // Remove file extension
  filename = filename.replace(/\.\w+$/, '');
  // Clean up
  filename = filename
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/geograph\.org\.uk/g, '')
    .replace(/\d{4,}/g, '') // remove long numbers
    .replace(/\(.*?\)/g, '') // remove parenthetical
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
  return filename;
}

function castleNameMatchScore(castleName, filename) {
  const norm = castleName.toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/\s+/g, ' ').trim();
  const words = norm.split(' ').filter(w => w.length >= 3);
  if (words.length === 0) return 0;
  const matched = words.filter(w => filename.includes(w)).length;
  return matched / words.length;
}

// Step 1: For each castle with a Wikipedia image, check if the filename matches a DIFFERENT castle better
const fixes = []; // { fromIdx, toIdx, url, fromName, toName }
const wikiCastles = [];

castles.forEach((c, i) => {
  if (!c.image) return;
  if (!c.image.includes('wikipedia') && !c.image.includes('wikimedia')) return;
  wikiCastles.push(i);
});

console.log(`Total castles with Wikipedia images: ${wikiCastles.length}`);

// For each wiki image, find the best matching castle name
const imageAssignments = new Map(); // url -> { currentIdx, bestIdx, bestName, bestScore }

for (const idx of wikiCastles) {
  const c = castles[idx];
  const filename = extractCastleFromFilename(c.image);
  const selfScore = castleNameMatchScore(c.name, filename);
  
  let bestScore = selfScore;
  let bestIdx = idx;
  let bestName = c.name;
  
  // Check all other castles
  for (let j = 0; j < castles.length; j++) {
    if (j === idx) continue;
    const score = castleNameMatchScore(castles[j].name, filename);
    if (score > bestScore) {
      bestScore = score;
      bestIdx = j;
      bestName = castles[j].name;
    }
  }
  
  if (bestIdx !== idx && bestScore > selfScore) {
    imageAssignments.set(c.image, {
      currentIdx: idx,
      currentName: c.name,
      bestIdx,
      bestName,
      bestScore,
      selfScore,
      filename
    });
  }
}

console.log(`\nImages that belong to a different castle: ${imageAssignments.size}`);

// Step 2: Build swap chains
// If castle A has castle B's image, and castle B has castle C's image, etc.
// We want to reassign: B gets A's current image (which has B's name), C gets B's current image, etc.

// Build a directed graph: wrongHolder -> rightfulOwner
const graph = new Map(); // currentIdx -> bestIdx (this castle's image belongs to bestIdx)
for (const [url, info] of imageAssignments) {
  graph.set(info.currentIdx, { bestIdx: info.bestIdx, url, bestName: info.bestName, currentName: info.currentName });
}

// Find chains
const visited = new Set();
const chains = [];

for (const startIdx of graph.keys()) {
  if (visited.has(startIdx)) continue;
  
  const chain = [];
  let current = startIdx;
  const chainSet = new Set();
  
  while (current !== undefined && !chainSet.has(current)) {
    chainSet.add(current);
    const entry = graph.get(current);
    if (entry) {
      chain.push({ idx: current, name: castles[current].name, image: entry.url, belongsTo: entry.bestName, belongsToIdx: entry.bestIdx });
      current = entry.bestIdx;
    } else {
      chain.push({ idx: current, name: castles[current].name, image: castles[current].image, terminal: true });
      break;
    }
  }
  
  chain.forEach(c => visited.add(c.idx));
  if (chain.length > 1) chains.push(chain);
}

console.log(`\nFound ${chains.length} chains:`);

// Step 3: For each chain, determine the correct reassignment
// In a chain: A has B's image, B has C's image, C has D's image...
// So B should get A.image, C should get B.image, D should get C.image
// The first castle in the chain needs an image from somewhere (the last in the chain if it's circular)

const reassignments = []; // { idx, name, oldImage, newImage }

for (const chain of chains) {
  const isCircular = !chain[chain.length - 1].terminal && 
    chain.length > 1 && 
    graph.has(chain[chain.length - 1].idx);
    
  console.log(`\nChain (${chain.length} castles${isCircular ? ', circular' : ''}):`);
  
  // Each castle's image belongs to the NEXT castle in the chain
  // So the NEXT castle should receive the CURRENT castle's image
  for (let i = 0; i < chain.length; i++) {
    const c = chain[i];
    if (c.terminal) continue;
    
    const targetIdx = c.belongsToIdx;
    const targetCastle = castles[targetIdx];
    const oldImage = targetCastle.image;
    const newImage = c.image; // this image has the target's name in it
    
    if (newImage !== oldImage) {
      reassignments.push({
        idx: targetIdx,
        name: targetCastle.name,
        oldImage,
        newImage
      });
      console.log(`  ${c.name} -> image goes to ${c.belongsTo}`);
    }
  }
}

console.log(`\n\nTotal reassignments: ${reassignments.length}`);

// Step 4: Apply reassignments to data.js
let data = fs.readFileSync('data.js', 'utf8');
let applied = 0;
let failed = 0;

for (const r of reassignments) {
  // We need to find this castle's image field and replace it
  // The image URL in data.js might have a different size prefix than what we computed
  const oldInData = castles[r.idx].image;
  if (data.includes(oldInData)) {
    // Make sure we only replace in the right context (near the castle name)
    const namePos = data.indexOf(`"${castles[r.idx].name}"`);
    if (namePos === -1) {
      // Try with smart quotes
      const namePos2 = data.indexOf(`\u201C${castles[r.idx].name}\u201D`);
      if (namePos2 === -1) {
        console.log(`  WARN: Can't find name for ${castles[r.idx].name}`);
        failed++;
        continue;
      }
    }
    
    // Find the image field near this castle entry
    // Since entries are objects, find the image field between this name and the next name
    applied++;
  } else {
    console.log(`  WARN: Can't find old image URL for ${r.name}`);
    failed++;
  }
}

// Actually, simpler approach: since each URL appears only once in data.js (it's assigned to one castle),
// we can just do direct URL replacement
console.log('\n--- Applying fixes ---');
data = fs.readFileSync('data.js', 'utf8');
applied = 0;

// But wait - if A has B's image and B has C's image, and we reassign B's image to A,
// then when we try to reassign C's image to B, B's old image is gone.
// We need to do all replacements simultaneously.

// Collect all: oldURL -> newURL
const urlSwaps = new Map();
for (const r of reassignments) {
  const oldUrl = r.oldImage;
  const newUrl = r.newImage;
  urlSwaps.set(oldUrl, newUrl);
}

// Check for conflicts (an image being both removed and assigned)
// Actually since these are chains, let's just do it differently:
// For each castle that needs fixing, record its index and what its new image should be.
// Then rewrite the data.js by finding each castle entry and updating the image field.

// Parse castle entries to find their positions
const castleEntries = [];
const nameRegex = /[""\u201C]name[""\u201D]\s*:\s*[""\u201C](.*?)[""\u201D]/g;
let match;
while ((match = nameRegex.exec(data)) !== null) {
  castleEntries.push({ name: match[1], pos: match.index });
}

console.log(`Found ${castleEntries.length} castle entries in data.js`);

// Build a map of castle name -> new image URL
const nameToNewImage = new Map();
for (const r of reassignments) {
  nameToNewImage.set(r.name, r.newImage);
}

// For each castle that needs updating, find its image field and replace
let updatedData = data;
let offset = 0;
let updates = 0;

// Work backwards to preserve positions
const entriesToFix = [];
for (let i = 0; i < castleEntries.length; i++) {
  const entry = castleEntries[i];
  if (nameToNewImage.has(entry.name)) {
    const nextEntryPos = i + 1 < castleEntries.length ? castleEntries[i + 1].pos : data.length;
    const entryText = data.substring(entry.pos, nextEntryPos);
    
    // Find image field in this entry
    const imgMatch = entryText.match(/[""\u201C]image[""\u201D]\s*:\s*[""\u201C](.*?)[""\u201D]/);
    if (imgMatch) {
      entriesToFix.push({
        name: entry.name,
        oldImage: imgMatch[1],
        newImage: nameToNewImage.get(entry.name),
        absPos: entry.pos + imgMatch.index,
        fullMatch: imgMatch[0]
      });
    }
  }
}

// Apply fixes in reverse order to preserve positions
entriesToFix.sort((a, b) => b.absPos - a.absPos);
for (const fix of entriesToFix) {
  const oldField = fix.fullMatch;
  const quoteChar = oldField[0]; // could be " or smart quote
  const newField = oldField.replace(fix.oldImage, fix.newImage);
  updatedData = updatedData.substring(0, fix.absPos) + newField + updatedData.substring(fix.absPos + oldField.length);
  updates++;
  console.log(`  Fixed: ${fix.name}`);
  console.log(`    was: ${fix.oldImage.substring(fix.oldImage.lastIndexOf('/') + 1).substring(0, 60)}`);
  console.log(`    now: ${fix.newImage.substring(fix.newImage.lastIndexOf('/') + 1).substring(0, 60)}`);
}

console.log(`\nApplied ${updates} image fixes`);

// Validate
const fn2 = new Function(updatedData + ';return CASTLES');
const castles2 = fn2();
console.log(`Validation: ${castles2.length} castles parsed OK`);

// Write
fs.writeFileSync('data.js', updatedData, 'utf8');
console.log('data.js updated!');

// Also output the full list of fixes for the HTML pages
fs.writeFileSync('audit/image-chain-fixes.json', JSON.stringify(entriesToFix.map(f => ({
  name: f.name,
  oldImage: f.oldImage,
  newImage: f.newImage
})), null, 2), 'utf8');
console.log('Fixes saved to audit/image-chain-fixes.json');
