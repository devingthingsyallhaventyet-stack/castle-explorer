const fs = require('fs');
let raw = fs.readFileSync('data.js', 'utf8');

const fixes = [
  ['Old Wardour Castle', 'https://img.castlecore.uk/scraped-wardour.jpg'],
  ['Lohort Castle', 'https://img.castlecore.uk/scraped-lohort.jpg'],
  ['Kiltinan Castle', 'https://img.castlecore.uk/scraped-kiltinan.jpg'],
  ['Dromore Castle (Limerick)', 'https://img.castlecore.uk/scraped-dromore-limerick.jpg'],
  ['Roughan Castle', 'https://img.castlecore.uk/scraped-roughan.jpg'],
  ['Bruree Castle', 'https://img.castlecore.uk/wiki-bruree.jpg'],
];

for (const [name, url] of fixes) {
  const needle = `"name": "${name}"`;
  const idx = raw.indexOf(needle);
  if (idx === -1) { console.log('NOT FOUND:', name); continue; }
  
  // Find the closing brace of this object
  let braceCount = 0;
  let objStart = raw.lastIndexOf('{', idx);
  let objEnd = objStart;
  for (let i = objStart; i < raw.length; i++) {
    if (raw[i] === '{') braceCount++;
    if (raw[i] === '}') braceCount--;
    if (braceCount === 0) { objEnd = i; break; }
  }
  
  let entry = raw.substring(objStart, objEnd + 1);
  
  if (entry.includes('"image"')) {
    entry = entry.replace(/"image":\s*"[^"]*"/, `"image": "${url}"`);
    console.log('Replaced:', name);
  } else {
    // Add image after name line
    entry = entry.replace(`"name": "${name}"`, `"name": "${name}",\n    "image": "${url}"`);
    console.log('Added:', name);
  }
  
  raw = raw.substring(0, objStart) + entry + raw.substring(objEnd + 1);
}

fs.writeFileSync('data.js', raw);
console.log('Done!');
