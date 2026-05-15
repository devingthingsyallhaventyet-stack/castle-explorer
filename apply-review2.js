const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json','utf8'));

const decisions = [
["Featherstone Castle","approved"],["Bellister Castle","approved"],["Bewcastle Cross","approved"],["Wray Castle","approved"],["Dalton Castle","flagged"],["Cockle Park Tower","approved"],["Hulne Priory","approved"],["Corby Castle","approved"],["Millom Castle","approved"],["Burgh-by-Sands Castle","flagged"],["Durham Cathedral","approved"],["Segedunum Roman Fort","flagged"],["Cragside House","approved"],["Tower of London","approved"],["Dover Castle","approved"],["Leeds Castle","approved"],["Guildford Castle","approved"],["Blenheim Palace","approved"],["Titchfield Abbey","approved"],["Windsor Castle","approved"],["Hampton Court Palace","approved"],["Richborough Castle","approved"],["Canterbury Cathedral","approved"],["Corfe Castle","approved"],["Christchurch Castle","approved"],["Berkeley Castle","approved"],["Taunton Castle","approved"],["Maiden Castle","flagged"],["Thornbury Castle","approved"],["St Briavels Castle","approved"],["Hailes Abbey","approved"],["Tewkesbury Abbey","approved"],["Cowes Castle","approved"],["Bampton Castle","flagged"],["St Michael's Mount","approved"],["Salcombe Castle","approved"],["Gidleigh Castle","approved"],["Wareham Castle","approved"],["Devizes Castle","flagged"],["Trowbridge Castle","approved"],["Beverston Castle","approved"],["Bridgwater Castle","approved"],["Rougemont Castle","flagged"],["Stanton Drew Stone Circles","approved"],["Gloucester Cathedral","approved"],["Sudeley Castle","approved"],["Llanthony Secunda Priory","approved"],["Gloucester Blackfriars","approved"],["Prinknash Abbey","approved"],["Great Chalfield Manor","approved"],["Ince Castle","approved"],["Cotehele House","approved"],["Godolphin House","approved"],["Chysauster Ancient Village","approved"],["Warwick Castle","approved"],["Kenilworth Castle","approved"],["Thornton Abbey","approved"],["Dudley Castle","approved"],["Wenlock Priory","approved"],["Somerton Castle","approved"],["Baginton Castle","approved"],["Groby Castle","approved"],["Hallaton Castle","approved"],["Alton Castle","approved"],["Bishop's Castle","flagged"],["Newark Castle (Nottinghamshire)","approved"],["Chatsworth House","approved"],["Gainsborough Old Hall","approved"],["Crowland Abbey","approved"],["Hereford Castle","flagged"],["Worcester Cathedral","approved"],["Great Malvern Priory","approved"],["Lyveden New Bield","approved"],["Clifton Hall","flagged"],["Norbury Manor","approved"],["Barnwell Castle","flagged"],["Middleton Hall","approved"],["Brampton Bryan Castle","flagged"],["Burghley House","approved"],["Polesworth Abbey","approved"],["Upton House","flagged"],["Bewdley Museum","flagged"],["Brockhampton Estate","approved"],["Hampton Court Herefordshire","approved"],["Kilpeck Church","approved"],["Abbey Dore","flagged"],["Iron Bridge","flagged"],["Castle Howard","approved"],["Richmond Castle","approved"],["Fountains Abbey","approved"],["Ravensworth Castle","approved"],["Harewood Castle","approved"],["Wilton Castle","approved"],["Wentworth Castle","approved"],["Guisborough Priory","approved"],["Haworth Parsonage","approved"],["Nappa Hall","approved"],["Rippon Cathedral","approved"],["Meaux Abbey","approved"],["Aldborough Roman Town","approved"],["Nostell Priory","approved"],["Bronllys Castle","approved"],["Dolforwyn Castle","approved"],["Painscastle","approved"],["Cwmhir Abbey","flagged"],["Castell Dinas","approved"],["Conwy Castle","approved"],["Caernarfon Castle","approved"],["Harlech Castle","approved"],["Rhuddlan Castle","approved"],["Criccieth Castle","approved"],["Dolwyddelan Castle","approved"],["Ewloe Castle","approved"],["Penmon Priory","approved"],["Hawarden Castle","flagged"],["Caergwrle Castle","approved"],["Deganwy Castle","approved"],["Segontium Roman Fort","approved"],["Plas Newydd","approved"],["Erddig Hall","approved"]
];

let approvedCount=0, keptCount=0, notFound=[];
decisions.forEach(([name, action]) => {
  const idx = d.findIndex(x => x.name === name && x.reviewStatus === 'flagged');
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
console.log(`Totals: ${totalApproved} approved, ${totalFlagged} flagged (${totalEnrich} in enrich)`);
fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
