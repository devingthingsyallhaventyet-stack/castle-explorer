const fs = require('fs');
const b = fs.readFileSync('wales.html');

// The file has Windows-1252 bytes that aren't valid UTF-8
// Read as latin1 to preserve the raw bytes, then map to proper Unicode
let s = b.toString('latin1');

const map = {
  '\x85': '\u2026', // …
  '\x91': '\u2018', // '
  '\x92': '\u2019', // '
  '\x93': '\u201C', // "
  '\x94': '\u201D', // "
  '\x96': '\u2013', // –
  '\x97': '\u2014', // —
};

let total = 0;
for (const [from, to] of Object.entries(map)) {
  const count = (s.split(from).length - 1);
  if (count > 0) {
    console.log(`${to} (0x${from.charCodeAt(0).toString(16)}): ${count} replacements`);
    s = s.split(from).join(to);
    total += count;
  }
}

fs.writeFileSync('wales.html', s, 'utf8');
console.log(`\nFixed ${total} characters. File saved as UTF-8.`);

// Verify no more replacement chars
const check = fs.readFileSync('wales.html', 'utf8');
const bad = (check.match(/\uFFFD/g) || []).length;
console.log(`Verification: ${bad} replacement characters remaining`);
