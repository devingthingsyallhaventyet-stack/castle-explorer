const https = require('https');
const http = require('http');
const { URL } = require('url');

function fetch(urlStr) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === 'https:' ? https : http;
    const opts = {
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Connection': 'close'
      }
    };
    mod.get(opts, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        return fetch(r.headers.location).then(resolve, reject);
      }
      let d = ''; r.on('data', c => d += c); r.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

async function main() {
  try {
    console.log('Fetching megalithicireland...');
    const html1 = await fetch('http://www.megalithicireland.com/Ballykinvarga.html');
    const imgs1 = [...html1.matchAll(/src\s*=\s*["']([^"']+)["']/gi)];
    console.log('=== BALLYKINVARGA IMAGES ===');
    imgs1.forEach(m => console.log(m[1]));
  } catch(e) { console.error('Bally error:', e.message); }

  try {
    console.log('\nFetching historyireland...');
    const html2 = await fetch('https://historyireland.com/mountlong-castle/');
    const imgs2 = [...html2.matchAll(/src\s*=\s*["']([^"']+)["']/gi)];
    console.log('=== MOUNTLONG IMAGES ===');
    imgs2.forEach(m => console.log(m[1]));
  } catch(e) { console.error('Mount error:', e.message); }
}
main();
