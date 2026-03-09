const fs = require('fs');
const vm = require('vm');
let code = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(code.replace(/^const /gm, 'var '), ctx);

const updates = [
  {
    name: "Scalloway Castle",
    description: "A Shetland tower house built by a tyrannical earl who forced islanders into slave labour — legend says their blood mixed with the mortar, and his execution followed shortly after.",
    history: "Built in 1600 by Patrick Stewart, 2nd Earl of Orkney, during his brief tyrannical rule over Shetland. Local tradition holds that forced labour was used and eggs and blood mixed into the mortar. Patrick was executed in 1615 for treason. The castle fell into disuse shortly after. Free to visit, managed by Historic Environment Scotland.",
    tags: ["ruins-romantic", "dark-brooding", "coastal", "remote", "atmospheric", "free-entry"],
    access: "free", era: "17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Scalloway_Castle"}]
  },
  {
    name: "Odiham Castle",
    description: "King John's octagonal keep — one of only three castles he built, halfway between Windsor and Winchester, where the Magna Carta king left for Runnymede and Scottish kings were imprisoned.",
    history: "Built 1207-1214 by King John, one of only three fortresses he constructed. Possibly chosen because it lay halfway between Windsor and Winchester. Features a unique octagonal keep, double moats, and two baileys. King John departed from here on his way to sign the Magna Carta at Runnymede. Later used as a prison for Scottish King David II. Owned by Hampshire County Council.",
    tags: ["ruins-romantic", "medieval", "riverside", "free-entry", "atmospheric", "dog-friendly"],
    access: "free", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Odiham_Castle"}]
  },
  {
    name: "Pendragon Castle",
    description: "A ruined castle above the River Eden named for King Arthur's father — where legend says Uther Pendragon tried to divert the river for his moat, and Lady Anne Clifford later rebuilt the walls.",
    history: "According to legend, built by Uther Pendragon, father of King Arthur, who unsuccessfully tried to divert the River Eden for its moat. In reality, likely built in the 12th century by Ranulph de Meschines. Stands in remote Mallerstang Dale near Kirkby Stephen, overlooked by Wild Boar Fell. Grade I listed. Restored by Lady Anne Clifford in the 17th century before falling into ruin again.",
    tags: ["ruins-romantic", "riverside", "remote", "atmospheric", "medieval", "dark-brooding"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pendragon_Castle"}]
  },
  {
    name: "Crookston Castle",
    description: "Glasgow's only surviving medieval castle — built by the Stewarts of Darnley on a hilltop with 12th-century earthworks, where Mary Queen of Scots may have spent her honeymoon.",
    history: "Built by the Stewarts of Darnley around 1400, set within earthworks dating to the 12th century when Sir Robert de Croc first fortified the site. Property of the earls and dukes of Lennox. Extensively repaired after a siege in 1544. The only surviving medieval castle in Glasgow. Located on a hill overlooking the Levern Water. Managed by Historic Environment Scotland.",
    tags: ["ruins-romantic", "hilltop", "medieval", "atmospheric", "free-entry"],
    access: "free", era: "12th-15th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Crookston_Castle"}, {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/crookston-castle/"}]
  },
  {
    name: "Fortrose Cathedral",
    description: "The red sandstone remains of a Highland cathedral on the Black Isle — where medieval bishops held power and the Brahan Seer was reportedly burned alive for his too-accurate prophecies.",
    history: "Episcopal seat of the medieval diocese of Ross, founded around 1200. Originally sited at Rosemarkie before the canons relocated to Fortrose. Built in Late Gothic style from distinctive red sandstone. Much of the stone was reputedly taken by Cromwell's troops to build a fort in Inverness. The surviving aisle and chapter house are atmospheric ruins. Managed by Historic Environment Scotland.",
    tags: ["ruins-romantic", "atmospheric", "medieval", "gothic", "coastal", "free-entry", "photogenic"],
    access: "free", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fortrose_Cathedral"}]
  },
  {
    name: "Athassel Priory",
    description: "Ireland's largest medieval priory, sprawling across four acres of Tipperary farmland — burned twice in its turbulent history, its Gothic arches still frame the sky above the River Suir.",
    history: "The largest medieval priory in Ireland, stretching over 4 acres. Founded in the late 12th century by William de Burgh (founder of the Burke dynasty) for the Augustinians. Burned in 1329 by Brian, King of Thomond, and again in 1581 by John Fitzgerald of Desmond. A large town that grew around the priory was destroyed in both raids. Dissolved in 1537 and given to the 10th Earl of Ormond.",
    tags: ["ruins-romantic", "atmospheric", "medieval", "gothic", "riverside", "free-entry", "photogenic"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Athassel_Priory"}]
  },
  {
    name: "Newport Castle",
    description: "A 14th-century castle on the River Usk, built to control the crossing and collect tolls — sacked by Glyndwr, taken by Cromwell, and now a quiet Grade II* ruin in the heart of the city.",
    history: "Built in the 14th century, probably by Hugh de Audley, 1st Earl of Gloucester, to manage the crossing of the River Usk. Served as administrative offices, residence, and garrison. Sacked by Owain Glyndwr in 1402. In disrepair by 1522. Taken by Cromwell's forces during the Civil War. Grade II* listed.",
    tags: ["ruins-romantic", "medieval", "riverside", "free-entry"],
    access: "free", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Newport_Castle"}]
  },
  {
    name: "Monk Bretton Priory",
    description: "A Cluniac-turned-Benedictine priory with remarkably complete domestic buildings — its gatehouse and administrative wing surviving in the South Yorkshire suburbs like a medieval time capsule.",
    history: "Originally founded as a Cluniac monastery, later becoming Benedictine. Features remarkably well-preserved domestic buildings including the gatehouse and administrative wing. Complete with two medieval fishponds within the monastic precinct. Grade I listed, managed by English Heritage in the village of Lundwood near Barnsley.",
    tags: ["ruins-romantic", "medieval", "free-entry", "atmospheric"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Monk_Bretton_Priory"}]
  },
  {
    name: "Longtown Castle",
    description: "A Norman fortress built on Roman earthworks in the Welsh border hills — with a rare cylindrical keep rising from its motte, offering wild views across the Black Mountains of Herefordshire.",
    history: "Established in the 11th century by Walter de Lacy, reusing former Roman earthworks. Rebuilt in stone by Gilbert de Lacy after 1148, who established the adjacent town to fund construction. Features a rare cylindrical keep. Declined by the 14th century but pressed into service during the Owain Glyndwr rising in 1403. Managed by English Heritage.",
    tags: ["ruins-romantic", "norman", "hilltop", "free-entry", "atmospheric", "remote", "photogenic"],
    access: "free", era: "11th-13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Longtown_Castle"}]
  },
  {
    name: "Leiston Abbey",
    description: "A Premonstratensian abbey twice rebuilt — first fleeing the sea, then a fire — its cloister garth catches the Suffolk dawn light through Gothic arches with a haunting, holy stillness.",
    history: "Founded c.1183 by Ranulf de Glanville, Chief Justiciar to Henry II, as a Premonstratensian house originally on a marshland isle near the sea called 'St Mary de Insula.' Rebuilt inland around 1363 due to flooding, then damaged by a great fire in 1379. Suppressed in 1537. The impressive ruins stand in Suffolk fields. Used as a music and arts retreat. The abbey's court of wreck rolls (1378-1481) are an important historical resource.",
    tags: ["ruins-romantic", "atmospheric", "medieval", "photogenic", "events-venue"],
    access: "free", era: "12th-14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Leiston_Abbey"}]
  }
];

for (const u of updates) {
  const castle = ctx.CASTLES.find(c => c.name === u.name);
  if (!castle) { console.log('NOT FOUND:', u.name); continue; }
  Object.assign(castle, {description: u.description, history: u.history, tags: u.tags, access: u.access, era: u.era, sources: u.sources});
  console.log('UPDATED:', u.name);
}

fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(ctx.CASTLES, null, 2) + ';\n');
console.log('Batch 6 written');
