const https = require('https');
const http = require('http');

const sites = [
  'Caldicot Castle','Dolforwyn Castle','Newcastle Emlyn Castle','Bolton Priory','Haddon Hall',
  'Dudley Castle','Muncaster Castle','Sizergh Castle','Cardigan Castle','White Castle Monmouthshire',
  'Weobley Castle','Hay Castle','Swansea Castle','Clun Castle','Sandal Castle',
  'Bolingbroke Castle','Narberth Castle','Oxwich Castle','Bowes Castle','Fonmon Castle',
  'Usk Castle','Dunmoe Castle','Whorlton Castle','Neath Castle','Caergwrle Castle',
  'Castell Aberlleiniog','Balvaird Castle','Snape Castle','Sissinghurst Castle','Hardwick Hall',
  'Inveraray Castle','Belvoir Castle','Battle Abbey','Scotney Castle','Adare Manor',
  'Herstmonceux Castle','Lowther Castle','Witton Castle','Aberglasney House','Oxburgh Hall',
  'Powderham Castle','Peckforton Castle','Dartmouth Castle','Brodie Castle','Lumley Castle',
  'Tioram Castle','Belsay Castle','Ripley Castle','Mount Grace Priory','Picton Castle',
  'Dumbarton Castle','Wenlock Priory','Hadleigh Castle','Minster Lovell Hall','Cong Abbey',
  'Hore Abbey','Kilbeggan Distillery'
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
  });
}

function extractVideoIds(html) {
  const ids = [];
  const re = /\/watch\?v=([a-zA-Z0-9_-]{11})/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (!ids.includes(m[1])) ids.push(m[1]);
    if (ids.length >= 3) break;
  }
  return ids;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  const results = {};
  
  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    const query = encodeURIComponent(site + ' history tour');
    const url = `https://html.duckduckgo.com/html/?q=${query}+youtube`;
    
    try {
      const html = await fetch(url);
      if (html.includes('bots use DuckDuckGo')) {
        console.log(`BLOCKED at ${i}: ${site}`);
        // Wait longer and retry
        await sleep(10000);
        const html2 = await fetch(url);
        if (html2.includes('bots use DuckDuckGo')) {
          console.log(`STILL BLOCKED: ${site}`);
          results[site] = [];
          continue;
        }
        results[site] = extractVideoIds(html2);
      } else {
        results[site] = extractVideoIds(html);
      }
      console.log(`${site}: ${JSON.stringify(results[site])}`);
    } catch(e) {
      console.log(`ERROR ${site}: ${e.message}`);
      results[site] = [];
    }
    
    await sleep(2000 + Math.random() * 2000);
  }
  
  require('fs').writeFileSync('yt-results.json', JSON.stringify(results, null, 2));
  console.log('Done! Written to yt-results.json');
}

main();
