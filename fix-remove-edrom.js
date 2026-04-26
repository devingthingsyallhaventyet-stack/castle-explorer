const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

const lines = data.split('\n');
let startLine = -1, endLine = -1, depth = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"name": "Edrom Castle"')) {
    for (let j = i; j >= 0; j--) {
      if (lines[j].trimStart().startsWith('{')) { startLine = j; break; }
    }
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
const removed = lines.splice(startLine, endLine - startLine + 1);

const prevLine = lines[startLine - 1];
const nextLine = lines[startLine];
if (prevLine && prevLine.trim().endsWith(',') && nextLine && nextLine.trim().startsWith(']')) {
  lines[startLine - 1] = prevLine.replace(/,\s*$/, '');
}

data = lines.join('\n');
const fn = new Function(data + ';return CASTLES');
const c = fn();
console.log('Total:', c.length);
console.log('Edrom exists?', c.some(x => x.name === 'Edrom Castle'));

fs.writeFileSync('data.js', data, 'utf8');
console.log('Saved');
