const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');
const fn = new Function(data + ';return CASTLES');
const castles = fn();

// Find line range for Caisteal Maol entry
const lines = data.split('\n');
let startLine = -1, endLine = -1, depth = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"name": "Caisteal Maol"') || lines[i].includes('"name":"Caisteal Maol"')) {
    // Walk back to find opening {
    for (let j = i; j >= 0; j--) {
      if (lines[j].trimStart().startsWith('{')) { startLine = j; break; }
    }
    // Walk forward to find closing }
    depth = 0;
    for (let j = startLine; j < lines.length; j++) {
      for (const ch of lines[j]) {
        if (ch === '{') depth++;
        if (ch === '}') depth--;
      }
      if (depth === 0) { endLine = j; break; }
    }
    break;
  }
}

console.log(`Entry at lines ${startLine}-${endLine}`);

// Remove trailing comma from the line before if needed
// Or remove leading comma on the endLine
if (lines[endLine].trim().endsWith('},')) {
  // Just remove the whole block including the comma
} else if (startLine > 0 && lines[startLine - 1].trim() === '') {
  startLine--;
}

// Remove lines
const removed = lines.splice(startLine, endLine - startLine + 1);

// Fix potential double comma or trailing comma
// Check if the line before now ends with , and line after starts with ]
const prevLine = lines[startLine - 1];
const nextLine = lines[startLine];
if (prevLine && prevLine.trim().endsWith(',') && nextLine && nextLine.trim().startsWith(']')) {
  lines[startLine - 1] = prevLine.replace(/,\s*$/, '');
}

data = lines.join('\n');

const fn2 = new Function(data + ';return CASTLES');
const c2 = fn2();
console.log('Before:', castles.length, 'After:', c2.length);
console.log('Caisteal Maol exists?', c2.some(x => x.name === 'Caisteal Maol'));
console.log('Castle Moil exists?', c2.some(x => x.name === 'Castle Moil'));

fs.writeFileSync('data.js', data, 'utf8');
console.log('Saved');
