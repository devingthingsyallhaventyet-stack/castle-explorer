const q = require('./enrich-queue.json');
const seen = new Set();
const already = new Set(['Esslemont Castle','Craig y Nos Castle','Inverquharity Castle','Inverallochy Castle','Kinnaird Head Castle','Balquhain Castle','Hallforest Castle','Finavon Castle','Ballindalloch Castle','Muchalls Castle','Kinloss Abbey','Darnaway Castle','Kinneff Church','Leith Hall','Haddo House','Pitmedden Garden','Peel Ring of Lumphanan',"Sueno's Stone",'Aberlemno Sculptured Stones','Ethie Castle','St Vigeans Museum','Balintore Castle','Dean Castle','Brodick Castle','Castle of Park','Dundonald Castle','Drumlanrig Castle','Kirkcudbright Castle','Turnberry Castle','Corsewall Lighthouse','Hoddom Castle','Orford Castle','Bury St Edmunds Abbey','Thetford Priory','Binham Priory','Oxburgh Hall','Wingfield Castle','Mettingham Castle','Bungay Castle','New Buckenham Castle','Haughley Castle']);
for (const item of q.items) {
  if (!item.listing || item.listing.name === 'Test Castle') continue;
  const k = item.listing.name;
  if (seen.has(k)) continue;
  seen.add(k);
  if (already.has(k)) continue;
  const s = item.listing.enrichStatus === 'enriched' ? '✨' : '🔧';
  const n = item.listing.enrichNotes || item.listing.enrichNote || '';
  console.log(s + ' ' + k + (n ? ' — ' + n.trim() : ''));
}
