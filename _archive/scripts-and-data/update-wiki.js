const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));

const updates = [
  {name: 'Moylough Castle', hasWikipedia: 'no'},
  {name: 'Monivea Castle', hasWikipedia: 'no'},
  {name: 'Loughrea Castle', hasWikipedia: 'no'},
  {name: 'Garbally Castle', hasWikipedia: 'no'},
  {name: 'Clonbrock Castle', hasWikipedia: 'no'},
  {name: "Hen's Castle", hasWikipedia: 'no'},
  {name: 'Carna Castle', hasWikipedia: 'no'},
  {name: 'Ardamullivan Castle', hasWikipedia: 'no'},
  {name: 'Pallas Castle', hasWikipedia: 'no'},
  {name: 'Carrickkildavnet Castle', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Carrickkildavnet_Castle'},
  {name: 'Ballylahan Castle', hasWikipedia: 'no'},
  {name: 'Castlecarra', hasWikipedia: 'no'},
  {name: 'Shrule Castle', hasWikipedia: 'no'},
  {name: 'Castleaffy', hasWikipedia: 'no'},
  {name: 'Aille Castle', hasWikipedia: 'no'},
  {name: 'Castlehill House', hasWikipedia: 'no'},
  {name: 'Errew Abbey', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Errew_Abbey'},
  {name: 'Markree Castle', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Markree_Castle'},
  {name: 'Lissadell House', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Lissadell_House'},
  {name: 'Castlebaldwin', hasWikipedia: 'no'},
  {name: 'Skreen Castle', hasWikipedia: 'no'},
  {name: 'Aclare Castle', hasWikipedia: 'no'},
  {name: 'Leitrim Castle', hasWikipedia: 'no'},
  {name: 'Jamestown Castle', hasWikipedia: 'no'},
  {name: 'Mohill Castle', hasWikipedia: 'no'},
  {name: 'Killone Abbey', hasWikipedia: 'no'},
  {name: 'Termon Castle', hasWikipedia: 'no'},
  {name: 'Castle Taylor', hasWikipedia: 'no'},
  {name: 'Kilcogan Castle', hasWikipedia: 'no'},
  {name: 'Ardfry Castle', hasWikipedia: 'no'},
  {name: 'Castle Hackett', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Castle_Hackett'},
  {name: 'Clonfert Cathedral', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Clonfert_Cathedral'},
  {name: 'Tuam Cathedral', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Tuam_Cathedral'},
  {name: 'Corcomroe Abbey', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Corcomroe_Abbey'},
  {name: 'Kilfenora Cathedral', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Kilfenora_Cathedral'},
  {name: 'Turoe Stone', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Turoe_Stone'},
  {name: 'Moore Hall', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Moore_Hall,_County_Mayo'},
  {name: 'Westport House', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Westport_House'},
  {name: 'Murrisk Abbey', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Murrisk_Abbey'},
  {name: 'Strade Abbey', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Strade_Abbey'},
  {name: 'Creevelea Abbey', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Creevelea_Abbey'},
  {name: 'Portumna Priory', hasWikipedia: 'no'},
  {name: 'Granuaile Tower', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Granuaile%27s_Castle'},
  {name: 'Craggaunowen Castle', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Craggaunowen'},
  {name: 'Killaloe Cathedral', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Killaloe_Cathedral'},
  {name: 'Classiebawn Castle', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Classiebawn_Castle'},
  {name: 'Clare Island Abbey', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Clare_Island_Abbey'},
  {name: 'Abbey Knockmoy', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Knockmoy_Abbey'},
  {name: 'Killala Round Tower', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Killala_Round_Tower'},
  {name: 'Dun Eochla', hasWikipedia: 'no'}, // mentioned in Dún Aonghasa article
  {name: 'Magheraghanrush Court Tomb', hasWikipedia: 'no'},
  {name: 'Dunmoran Castle', hasWikipedia: 'no'},
  {name: 'Lough Rynn Castle', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Lough_Rynn_Castle'},
  {name: 'Magh Adair', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Magh_Adhair'},
  {name: 'Ballinafad Castle', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Ballinafad_Castle'},
  {name: 'Cregg Castle', hasWikipedia: 'no'},
  {name: 'Ballindoon Priory', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Ballindoon_Friary'},
  {name: 'Dunsandle Castle', hasWikipedia: 'yes', wikipediaUrl: 'https://en.wikipedia.org/wiki/Dunsandle_Castle'},
];

let c = 0;
updates.forEach(u => {
  audit.forEach(e => {
    if (e.name === u.name && e.reviewStatus === 'flagged' && e.hasWikipedia === 'unknown') {
      Object.assign(e, u);
      c++;
    }
  });
});

fs.writeFileSync('audit-data.json', JSON.stringify(audit, null, 2));
const f = audit.filter(x => x.reviewStatus === 'flagged');
console.log('Updated:', c);
console.log('Wiki yes:', f.filter(x => x.hasWikipedia === 'yes').length);
console.log('Wiki no:', f.filter(x => x.hasWikipedia === 'no').length);
console.log('Unknown:', f.filter(x => x.hasWikipedia === 'unknown').length);