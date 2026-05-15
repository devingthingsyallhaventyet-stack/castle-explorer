const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json','utf8'));

const decisions = [
["Moorstown Castle","approved"],["Ormond Castle (Ireland)","approved"],["Tristernagh Abbey","approved"],["Ballyfin Demesne","flagged"],["Castle Otway","approved"],["Donegal Castle","approved"],["Doe Castle","approved"],["Glenveagh Castle","approved"],["Grianan of Aileach","approved"],["Boyle Abbey","approved"],["Burt Castle","approved"],["Raphoe Castle","approved"],["Lough Key Castle","approved"],["Carrickabraghy Castle","approved"],["Donamon Castle","approved"],["Cabra Castle","approved"],["Castle Saunderson","approved"],["Castle Leslie","approved"],["Mannan Castle","flagged"],["Castle Balfour","approved"],["Castle Archdale","flagged"],["Mountjoy Castle","approved"],["Newtownstewart Castle","approved"],["Navan Fort","approved"],["Ardglass Castles","flagged"],["Portaferry Castle","approved"],["Castlestrange Stone","approved"],["Kilronan Castle","approved"],["Glinsk Castle","approved"],["Drumboe Castle","approved"],["Movilla Abbey","approved"],["Shane Castle","flagged"],["Harry Avery Castle","approved"],["Florence Court","approved"],["Rathcroghan","flagged"],["Castle Ward","approved"],["Donegal Abbey","approved"],["Strokestown House","approved"],["Drumlane Abbey","approved"],["Downhill House","approved"],["Clonalis House","approved"],["Caledon Castle","approved"],["Ardboe High Cross","approved"],["Gosford Castle","flagged"],["Ballycopeland Windmill","flagged"],["Clonca Church","flagged"],["Springhill House","approved"],["Struell Wells","approved"],["Saul Church","flagged"],["Dunserverick Castle","approved"],["Bunratty Castle","approved"],["Dunguaire Castle","approved"],["Athenry Castle","approved"],["Portumna Castle","approved"],["Thoor Ballylee","approved"],["Aughnanure Castle","approved"],["Claregalway Friary","approved"],["Kilmacduagh Monastery","approved"],["Dysert O'Dea Castle","approved"],["Knappogue Castle","approved"],["Quin Abbey","approved"],["Ennis Friary","approved"],["Sligo Abbey","approved"],["Parke's Castle","approved"],["Kylemore Abbey","approved"],["Ballymote Castle","approved"],["Ross Errilly Friary","approved"],["Oranmore Castle","flagged"],["Tyrone House","approved"],["Newtown Castle","approved"],["Doonagore Castle","approved"],["Ballinalacken Castle","flagged"],["Dromoland Castle","approved"],["Gleninagh Castle","approved"],["Mooghaun Fort","flagged"],["Ballynahinch Castle","approved"],["Clifden Castle","approved"],["Fiddaun Castle","approved"],["Menlo Castle","approved"],["Merlin Park Castle","approved"],["Rockfleet Castle","approved"],["Burrishoole Abbey","approved"],["Moyne Abbey","approved"],["Rosserk Friary","approved"],["Ballintubber Abbey","approved"],["Cong Abbey","approved"],["Clontuskert Abbey","approved"],["Caherkinmonwee Castle","approved"],["Derryhivenny Castle","approved"],["Carrickkildavnet Castle","approved"],["Errew Abbey","approved"],["Markree Castle","approved"],["Lissadell House","flagged"],["Castle Hackett","flagged"],["Clonfert Cathedral","approved"],["Tuam Cathedral","flagged"],["Corcomroe Abbey","approved"],["Kilfenora Cathedral","flagged"],["Turoe Stone","approved"],["Moore Hall","flagged"],["Westport House","approved"],["Murrisk Abbey","approved"],["Strade Abbey","approved"],["Creevelea Abbey","approved"],["Granuaile Tower","flagged"],["Craggaunowen Castle","flagged"],["Killaloe Cathedral","approved"],["Classiebawn Castle","approved"],["Clare Island Abbey","approved"],["Abbey Knockmoy","approved"],["Killala Round Tower","flagged"],["Lough Rynn Castle","approved"],["Magh Adair","flagged"],["Ballinafad Castle","approved"],["Ballindoon Priory","flagged"],["Dunsandle Castle","flagged"]
];

let approvedCount=0, keptCount=0, notFound=[];
decisions.forEach(([name, action]) => {
  const idx = d.findIndex(x => x.name === name && x.reviewStatus === 'flagged' && !x.needsEnrich);
  if (idx >= 0) {
    d[idx].reviewStatus = action;
    if (action === 'flagged') d[idx].needsEnrich = true;
    if (action === 'approved') approvedCount++;
    else keptCount++;
  } else {
    const idx2 = d.findIndex(x => x.name === name && x.reviewStatus === 'approved');
    if (idx2 < 0) notFound.push(name);
  }
});

console.log(`Approved: ${approvedCount}, Kept flagged (→enrich): ${keptCount}`);
if (notFound.length) console.log('Not found:', notFound);
const totalApproved = d.filter(x => x.reviewStatus === 'approved').length;
const totalFlagged = d.filter(x => x.reviewStatus === 'flagged').length;
const totalEnrich = d.filter(x => x.reviewStatus === 'flagged' && x.needsEnrich).length;
const remaining = d.filter(x => x.reviewStatus === 'flagged' && !x.needsEnrich && x.hasWikipedia !== 'no').length;
console.log(`Totals: ${totalApproved} approved, ${totalFlagged} flagged (${totalEnrich} enrich, ${d.filter(x=>x.reviewStatus==='flagged'&&!x.needsEnrich&&x.hasWikipedia==='no').length} dead, ${remaining} remaining)`);
fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
