const fs = require('fs');
const https = require('https');
const http = require('http');
const { URL } = require('url');

function downloadBinary(urlStr, dest) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === 'https:' ? https : http;
    mod.get({ hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0', 'Connection': 'close' } }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        return downloadBinary(r.headers.location, dest).then(resolve, reject);
      }
      const ws = fs.createWriteStream(dest);
      r.pipe(ws);
      ws.on('finish', () => {
        ws.close();
        const stats = fs.statSync(dest);
        const buf = Buffer.alloc(4);
        const fd = fs.openSync(dest, 'r');
        fs.readSync(fd, buf, 0, 4, 0);
        fs.closeSync(fd);
        const isJPEG = buf[0] === 0xFF && buf[1] === 0xD8;
        const isPNG = buf[0] === 0x89 && buf[1] === 0x50;
        console.log(`Downloaded ${dest}: ${stats.size} bytes, JPEG=${isJPEG}, PNG=${isPNG}`);
        resolve({ size: stats.size, isJPEG, isPNG });
      });
    }).on('error', reject);
  });
}

async function main() {
  const raw = fs.readFileSync('data.js', 'utf8');
  const m = raw.match(/const CASTLES = (\[[\s\S]*\]);/);
  let arr = JSON.parse(m[1]);
  
  // TASK 1: Delete 4 castles
  const deleteNames = ['Castlecoote', 'Castle Ellen', "Wolf's Castle", 'Moatfarrell'];
  const before = arr.length;
  arr = arr.filter(c => !deleteNames.some(n => c.name.includes(n)));
  console.log(`Deleted ${before - arr.length} castles (${before} -> ${arr.length})`);

  // TASK 2a: Ballykinvarga - download from megalithicireland
  console.log('\n--- Ballykinvarga ---');
  const ballyUrl = 'http://www.megalithicireland.com/Clare/Ballykinvarga%20Cashel%20001L.jpg';
  await downloadBinary(ballyUrl, 'img/ballykinvarga-fort.jpg');
  const bi = arr.findIndex(c => c.name.includes('Ballykinvarga'));
  if (bi >= 0) {
    arr[bi].image = 'https://img.castlecore.uk/ballykinvarga-fort.jpg';
    console.log('Updated Ballykinvarga at index', bi);
  }

  // TASK 2b: Ardmore Cathedral - Wikipedia thumbnail
  console.log('\n--- Ardmore Cathedral ---');
  const wikiImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/01_St._Declan%27s_Monastery%2C_Ardmore.png/500px-01_St._Declan%27s_Monastery%2C_Ardmore.png';
  const ai = arr.findIndex(c => c.name.includes('Ardmore Cathedral'));
  if (ai >= 0) {
    arr[ai].image = wikiImg;
    console.log('Updated Ardmore Cathedral at index', ai);
  }

  // TASK 2c: Mountlong Castle - download from historyireland
  console.log('\n--- Mountlong ---');
  const mountUrl = 'https://historyireland.com/wp-content/uploads/2017/12/Mountlong-Castle-County-Cork-01-Representative-View-1.jpg';
  await downloadBinary(mountUrl, 'img/mountlong-castle.jpg');
  const mi = arr.findIndex(c => c.name.includes('Mountlong'));
  if (mi >= 0) {
    arr[mi].image = 'https://img.castlecore.uk/mountlong-castle.jpg';
    console.log('Updated Mountlong at index', mi);
  }

  // Reindex
  arr.forEach((c, i) => c._index = i);

  // Write back
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(arr, null, 2) + ';');
  console.log('\nWrote data.js with', arr.length, 'castles');
}

main().catch(e => { console.error(e); process.exit(1); });
