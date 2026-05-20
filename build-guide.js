const fs = require('fs');
const md = fs.readFileSync('enrichment-guide.md', 'utf8');

let html = md
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/^### (.+)$/gm, '<h3>$1</h3>')
  .replace(/^## (.+)$/gm, '<h2>$1</h2>')
  .replace(/^# (.+)$/gm, '<h1>$1</h1>')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/^\| (.+)$/gm, (match) => {
    const cells = match.split('|').filter(c => c.trim()).map(c => c.trim());
    return '<tr>' + cells.map(c => '<td>' + c + '</td>').join('') + '</tr>';
  })
  .replace(/^- (.+)$/gm, '<li>$1</li>')
  .replace(/^---$/gm, '<hr>')
  .replace(/\n\n/g, '</p><p>')
  .replace(/\n/g, '<br>');

// Wrap consecutive <tr> in tables
html = html.replace(/((<tr>.+<\/tr><br>?)+)/g, '<table>$1</table>');
// First row of each table = header
html = html.replace(/<table><tr>(.*?)<\/tr>/g, (m, row) => {
  return '<table><thead><tr>' + row.replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>') + '</tr></thead>';
});
// Remove separator rows (-----)
html = html.replace(/<tr>(<td>[-\s]+<\/td>)+<\/tr>/g, '');

const page = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<title>Castlecore Enrichment Guide</title>
<style>
body { font-family: Inter, -apple-system, sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 2rem; background: #0f1117; color: #e4e4e7; line-height: 1.7; }
h1, h2, h3 { color: #fff; margin-top: 2rem; }
h1 { border-bottom: 2px solid #8b2335; padding-bottom: .5rem; }
h2 { border-bottom: 1px solid #2a2e3a; padding-bottom: .3rem; }
table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
th, td { border: 1px solid #2a2e3a; padding: .5rem .8rem; text-align: left; font-size: .85rem; }
th { background: #1a1d27; color: #8b2335; font-weight: 600; }
td { color: #a1a1aa; }
code { background: #1a1d27; padding: 2px 6px; border-radius: 3px; font-size: .8rem; color: #f59e0b; }
strong { color: #e4e4e7; }
hr { border: none; border-top: 1px solid #2a2e3a; margin: 2rem 0; }
li { margin: .3rem 0; color: #a1a1aa; }
p { color: #a1a1aa; }
</style>
</head>
<body>${html}</body></html>`;

fs.writeFileSync('enrichment-guide.html', page);
console.log('Built enrichment-guide.html');
