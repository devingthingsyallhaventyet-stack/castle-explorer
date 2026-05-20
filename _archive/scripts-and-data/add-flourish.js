const fs = require('fs');
let html = fs.readFileSync('castles/index.html', 'utf8');

// Find what's actually in the divider ornaments
const matches = html.match(/divider-ornament">[^<]+</g);
if (matches) {
  matches.forEach(m => {
    const content = m.replace('divider-ornament">', '').replace('<', '');
    console.log('Found:', JSON.stringify(content), 'charCodes:', [...content].map(c => c.charCodeAt(0)));
  });
}

const svg = `<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M55 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M33 3c2 0 3.5 1.5 3.5 3.5S35 10 33 10s-3.5-1.5-3.5-3.5S31 3 33 3z" opacity=".7"/><path d="M47 3c-2 0-3.5 1.5-3.5 3.5S45 10 47 10s3.5-1.5 3.5-3.5S49 3 47 3z" opacity=".7"/><path d="M36 10c1.5-3 3-4.5 4-4.5s2.5 1.5 4 4.5c-1.5 3-3 4.5-4 4.5s-2.5-1.5-4-4.5z" opacity=".5"/><circle cx="40" cy="10" r="1.5"/></svg>`;

// Replace using regex
const count = (html.match(/divider-ornament">[^<]*<\/span>/g) || []).length;
html = html.replace(/(<span class="divider-ornament">)[^<]*(<\/span>)/g, `$1${svg}$2`);

fs.writeFileSync('castles/index.html', html);
console.log('Replaced', count, 'dividers');
