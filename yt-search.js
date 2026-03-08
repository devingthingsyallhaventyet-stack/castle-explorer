const https = require('https');

function ytSearch(query) {
  return new Promise((resolve, reject) => {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        // Extract ytInitialData
        const m = data.match(/var ytInitialData = ({.*?});<\/script>/s);
        if (!m) {
          // Try alternate pattern
          const m2 = data.match(/ytInitialData.*?({.*?});\s*<\/script>/s);
          if (!m2) {
            resolve([]);
            return;
          }
          try {
            const json = JSON.parse(m2[1]);
            resolve(extractIds(json));
          } catch(e) { resolve([]); }
          return;
        }
        try {
          const json = JSON.parse(m[1]);
          resolve(extractIds(json));
        } catch(e) { resolve([]); }
      });
    }).on('error', reject);
  });
}

function extractIds(json) {
  const str = JSON.stringify(json);
  const ids = [];
  const re = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
  let m;
  while ((m = re.exec(str)) !== null) {
    if (!ids.includes(m[1])) ids.push(m[1]);
    if (ids.length >= 3) break;
  }
  return ids;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

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
  'Castle Tioram','Belsay Castle','Ripley Castle','Mount Grace Priory','Picton Castle Wales',
  'Dumbarton Castle','Wenlock Priory','Hadleigh Castle','Minster Lovell Hall','Cong Abbey Ireland',
  'Hore Abbey Ireland','Kilbeggan Distillery'
];

async function main() {
  const results = {};
  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    try {
      const ids = await ytSearch(site + ' history');
      results[site] = ids;
      console.log(`${i+1}. ${site}: ${JSON.stringify(ids)}`);
    } catch(e) {
      console.log(`${i+1}. ${site}: ERROR ${e.message}`);
      results[site] = [];
    }
    await sleep(1500 + Math.random() * 1500);
  }
  require('fs').writeFileSync('yt-results.json', JSON.stringify(results, null, 2));
  console.log('Done!');
}

main();
