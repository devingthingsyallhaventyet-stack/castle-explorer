const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json','utf8'));

const decisions = [
["Kilchurn Castle","approved"],["Duart Castle","approved"],["Sween Castle","approved"],["Finlaggan Castle","approved"],["Dunoon Castle","approved"],["Castle Lachlan","flagged"],["Innis Chonnel Castle","approved"],["Breachacha Castle","approved"],["Claig Castle","flagged"],["Toward Castle","flagged"],["Dunollie Castle","approved"],["Dunaverty Castle","approved"],["Dunderave Castle","approved"],["St Blane's Church","flagged"],["Cranshaws Castle","flagged"],["Castle Craig","flagged"],["Abbotsford House","approved"],["Edinburgh Castle","approved"],["Cramond Tower","approved"],["Merchiston Castle","flagged"],["Liberton Tower","approved"],["Temple Church","flagged"],["Loch Leven Castle","approved"],["Methven Castle","approved"],["Grandtully Castle","approved"],["Megginch Castle","approved"],["Balhousie Castle","approved"],["Macduff's Castle","approved"],["Kinclaven Castle","flagged"],["Dunfermline Palace","approved"],["Balmerino Abbey","flagged"],["Balgonie Castle","approved"],["Kinfauns Castle","approved"],["Stirling Castle","approved"],["Castle Levan","approved"],["Cathcart Castle","flagged"],["Mearns Castle","approved"],["Dunmore Pineapple","approved"],["Kinneil House","approved"],["Callendar House","approved"],["Eilean Donan Castle","approved"],["Castle of Mey","approved"],["Ardvreck Castle","approved"],["Strome Castle","approved"],["Mingary Castle","flagged"],["Clickimin Broch","approved"],["Mousa Broch","approved"],["Old Scatness","approved"],["Varrich Castle","approved"],["Tor Castle","approved"],["Dalcross Castle","flagged"],["Cromarty Courthouse","approved"],["Dunnottar Castle","approved"],["Delgatie Castle","approved"],["Dudhope Castle","approved"],["New Slains Castle","approved"],["Pitsligo Castle","approved"],["Esslemont Castle","approved"],["Cairnbulg Castle","approved"],["Inverallochy Castle","approved"],["Hallforest Castle","approved"],["Finavon Castle","approved"],["Baikie Castle","flagged"],["Tillycairn Castle","flagged"],["Castle of Fiddes","flagged"],["Muchalls Castle","approved"],["Kinloss Abbey","approved"],["Darnaway Castle","approved"],["Kinneff Church","approved"],["Leith Hall","flagged"],["Haddo House","approved"],["Peel Ring of Lumphanan","approved"],["Sueno's Stone","approved"],["Durris Castle","flagged"],["Raemoir House","approved"],["Aberlemno Sculptured Stones","flagged"],["Ethie Castle","flagged"],["Cortachy Castle","flagged"],["St Vigeans Museum","approved"],["Castle of Park","approved"],["Kirkcudbright Castle","flagged"],["Turnberry Castle","flagged"],["Amisfield Tower","approved"],["Auchinleck House","approved"],["Mauchline Castle","flagged"],["Ayr Castle","flagged"],["Sundrum Castle","approved"],["Hedingham Castle","approved"],["Oxburgh Hall","approved"],["Wingfield Castle","approved"],["Bungay Castle","approved"],["New Buckenham Castle","approved"],["Haughley Castle","approved"],["Mountfitchet Castle","approved"],["Bishop's Stortford Castle","approved"],["St Albans Abbey","approved"],["Ickworth House","approved"],["Caistor Roman Site","approved"],["Buckden Palace","approved"],["Wolterton Hall","flagged"],["Blickling Hall","approved"],["Alnwick Castle","approved"],["Bamburgh Castle","approved"],["Auckland Castle","approved"],["Belsay Castle","approved"],["Sizergh Castle","approved"],["Dacre Castle","approved"],["Halton Castle","approved"],["Lyme Park","approved"],["Lumley Castle","approved"],["Greystoke Castle","approved"],["Hornby Castle","flagged"],["Langley Castle","approved"]
];

let approved=0, kept=0, notFound=[];
decisions.forEach(([name, action]) => {
  const idx = d.findIndex(x => x.name === name && x.reviewStatus === 'flagged');
  if (idx >= 0) {
    d[idx].reviewStatus = action;
    if (action === 'approved') approved++;
    else kept++;
  } else {
    const idx2 = d.findIndex(x => x.name === name && x.reviewStatus === 'approved');
    if (idx2 < 0) notFound.push(name);
  }
});

console.log(`Approved: ${approved}, Kept flagged: ${kept}`);
if (notFound.length) console.log('Not found:', notFound);
const totalApproved = d.filter(x => x.reviewStatus === 'approved').length;
const totalFlagged = d.filter(x => x.reviewStatus === 'flagged').length;
console.log(`Totals: ${totalApproved} approved, ${totalFlagged} flagged`);
fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
