const fs = require('fs');
const vm = require('vm');
let raw = fs.readFileSync('data.js', 'utf8');
let code = raw.replace(/^const /gm, 'var ');
const ctx = {};
vm.runInNewContext(code, ctx);
const castles = ctx.CASTLES;

const enrichments = [
  {
    name: "Hopton Castle",
    description: "A small Shropshire keep with one of the English Civil War's darkest stories — after a brutal siege, Royalist forces massacred the surrendered Parliamentarian garrison. Restored and reopened in 2011, it's a Time Team favourite with real emotional weight.",
    history: "Possibly founded in the 12th century by the Hopton family. The stone keep was built during the Barons' War of the 1260s. During the Civil War, the Parliamentarian garrison surrendered after a fierce siege — all were massacred by Royalist forces. A ruin by the 18th century, restored 2006-2011. Featured on Time Team in 2010.",
    tags: ["ruins-romantic", "dark-brooding", "medieval", "free-entry", "guided-tours"],
    access: "free", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hopton_Castle"}]
  },
  {
    name: "Danby Castle",
    description: "A 14th-century castle-turned-farmhouse on the North York Moors that may have been home to Catherine Parr, Henry VIII's last wife. The medieval courtroom still hosts the ancient Danby Court Leet — an all-male baronial court managing common land since the Middle Ages.",
    history: "First recorded 1242, ruined by 1336, rebuilt in the late 14th century. May have been the home of Catherine Parr. Part of the southern range was converted to a farmhouse with the medieval great chamber becoming a courtroom. Grade I listed. Now a wedding venue; the ancient Danby Court Leet still meets here.",
    tags: ["medieval", "atmospheric", "wedding-venue", "hidden-gem"],
    access: "paid", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Danby_Castle"}]
  },
  {
    name: "Invergarry Castle",
    description: "A six-storey tower house on the Raven's Rock overlooking Loch Oich — seat of the fierce MacDonells of Glengarry. Burned three times across centuries of Jacobite rebellion, its gaunt shell stands in the Great Glen like a monument to lost causes.",
    history: "Built by the MacDonells of Glengarry after Mackenzie raids in 1602. According to clan tradition, stones were passed hand-to-hand by a chain of clansmen from Ben Tee. Burned by Cromwell's troops in 1654, held for James VII in 1688, burned again after the 1715 and 1745 Jacobite risings by government forces.",
    tags: ["ruins-romantic", "riverside", "atmospheric", "dark-brooding", "remote"],
    access: "free", era: "17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Invergarry_Castle"}]
  },
  {
    name: "Muness Castle",
    description: "The most northerly castle in the British Isles, standing roofless on Unst in Shetland — built by a half-brother to Orkney's tyrannical earl, burned by foreign privateers, and abandoned to the Atlantic winds. Utterly remote, utterly atmospheric.",
    history: "Built in 1598 for Laurence Bruce of Cultmalindie, half-brother to Robert Stewart, 1st Earl of Orkney. Burned by foreign privateers in 1627 and may never have been fully repaired. Abandoned before the century's end. The upper storey was removed to build the boundary wall. Scheduled Monument since 1953.",
    tags: ["island", "remote", "ruins-romantic", "atmospheric", "free-entry"],
    access: "free", era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Muness_Castle"}]
  },
  {
    name: "Maybole Castle",
    description: "A 16th-century L-plan tower on the High Street of a small Ayrshire town, steeped in the dark legend of Johnny Faa — the earl who supposedly murdered a gypsy king and imprisoned his own countess in its upper rooms. Recently restored from the at-risk register.",
    history: "Built in the 16th century for the Earls of Cassillis. Associated with the legend of John Faa, in which an earl killed the gypsy king and imprisoned the Countess of Cassillis. Category A listed building since 1971. Added to the Buildings at Risk Register in 2009 before receiving renovation funding.",
    tags: ["well-preserved", "atmospheric", "dark-brooding", "medieval", "hidden-gem"],
    access: "paid", era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maybole_Castle"}]
  },
  {
    name: "Eccleshall Castle",
    description: "A bishop's fortress in rural Staffordshire where Margaret of Anjou fled after the Battle of Blore Heath and Civil War cannons shattered medieval walls. The castle grounds now host peaceful gardens, but the ruins remember centuries of siege and sanctuary.",
    history: "Built c.1200 by Bishop Geoffrey de Muschamp with a licence to crenellate from King John. Replaced with a larger castle in 1305 by Bishop Walter Langton, Chancellor of England. Margaret of Anjou took refuge here after the Battle of Blore Heath in 1459. Besieged by Parliamentary forces in 1643. Grade II* listed.",
    tags: ["ruins-romantic", "gardens", "medieval", "norman"],
    access: "paid", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eccleshall_Castle"}]
  },
  {
    name: "Trematon Castle",
    description: "A Norman shell keep overlooking Plymouth Sound from the Cornish side — built by the Count of Mortain on the ruins of a Roman fort. Its circular walls and sweeping coastal views rival Restormel, but far fewer visitors know it exists.",
    history: "Built probably by Robert, Count of Mortain on the ruins of a Roman fort. A motte-and-bailey castle with a 12th-century shell keep, similar in style to the later Restormel Castle. Caput of the feudal barony of Trematon. Overlooks Plymouth Sound near Saltash. Scheduled Monument and Grade II* listed.",
    tags: ["ruins-romantic", "coastal", "norman", "medieval", "hidden-gem", "photogenic"],
    access: "exterior-only", era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trematon_Castle"}]
  },
  {
    name: "Harbottle Castle",
    description: "A Grade I ruin deep in the Northumberland wilderness, overlooking the River Coquet — built at the request of Henry II to defend against the Scots, besieged within years, and fought over for centuries. The wild landscape hasn't changed since the border wars.",
    history: "Built c.1160 by the Umfraville family at Henry II's request as a defence against the Scots. Taken by the Scots in 1174, rebuilt more strongly. Besieged in 1296. The motte may have been used by ancient Britons and later by Anglian settlers. Grade I listed and Scheduled Ancient Monument.",
    tags: ["ruins-romantic", "riverside", "remote", "atmospheric", "medieval", "free-entry"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Harbottle_Castle"}]
  },
  {
    name: "Greenan Castle",
    description: "A lone tower house silhouetted on a dramatic sea cliff south of Ayr — built on an ancient promontory fort with concentric ditches that predate it by centuries. One of the most photographed ruins in Ayrshire, dramatic at sunset, wild in a storm.",
    history: "Originally a promontory fort converted to a motte-and-bailey in the 12th century. The 16th-century tower house was built by the Lords of the Isles. Lands forfeited in 1476 for treason against James III, granted to William Douglas by James IV in 1493. Later held by the Kennedy family.",
    tags: ["cliffside", "coastal", "ruins-romantic", "photogenic", "atmospheric", "prehistoric"],
    access: "free", era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Greenan_Castle"}]
  },
  {
    name: "Maxstoke Castle",
    description: "A rare 14th-century moated quadrangular castle still standing intact in rural Warwickshire — built by the 1st Earl of Huntingdon, later owned by the Dukes of Buckingham. Octagonal corner towers, 15th-century doors, and a broad moat make it utterly photogenic.",
    history: "Built in 1345 by Sir William de Clinton, 1st Earl of Huntingdon, to a rectangular plan with octagonal corner towers and a broad moat. Acquired by Humphrey Stafford, 1st Duke of Buckingham in 1437. Still privately owned by the Fetherson-Dilke family. Opens annually to the public.",
    tags: ["well-preserved", "medieval", "gardens", "photogenic", "hidden-gem"],
    access: "paid", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maxstoke_Castle"}]
  },
  {
    name: "Mitford Castle",
    description: "A Norman motte perched above the River Wansbeck in deepest Northumberland — the first of three seats for the ancient Mitford family. On the Buildings at Risk Register but still hauntingly beautiful, with Grade I listed ruins slowly returning to the earth.",
    history: "Dating from the late 11th century, this Norman motte-and-bailey was the first seat of the Mitford family. Built on a natural prominence above the River Wansbeck, the hill was scarped and ditched to form the motte. Grade I listed and Scheduled Ancient Monument. Now on the Buildings at Risk Register.",
    tags: ["ruins-romantic", "riverside", "norman", "medieval", "atmospheric", "free-entry"],
    access: "free", era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mitford_Castle"}]
  },
  {
    name: "Brancepeth Castle",
    description: "A grand medieval castle that once housed the powerful Neville family — confiscated by the Crown after the ill-fated Rising of the North in 1569. Its towers and curtain walls still command the County Durham landscape, blending Norman origins with 19th-century romanticism.",
    history: "First built as a Norman castle by the Bulmers, rebuilt by the Nevilles in the late 14th century. Confiscated by the Crown in 1569 after the Neville family's involvement in the Rising of the North. Grade I listed. Partly open to the public year-round.",
    tags: ["well-preserved", "medieval", "norman", "atmospheric", "dark-brooding"],
    access: "paid", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brancepeth_Castle"}]
  },
  {
    name: "Pleshey Castle",
    description: "One of the finest surviving motte-and-bailey earthworks in England — a massive man-made hill with a 15th-century brick bridge, surrounded by moats and the ghost-outline of a medieval village. Pure, unspoiled Norman engineering in quiet Essex countryside.",
    history: "Completed c.1096-1106, one of the best-preserved motte-and-bailey castles in England. The 15m-high motte is one of the largest in England. Dismantled in 1158 by Henry II, rebuilt in 1167. Associated with the de Mandeville and de Bohun families. Never rebuilt in stone, preserving the earthworks perfectly.",
    tags: ["ruins-romantic", "norman", "medieval", "free-entry", "dog-friendly", "hidden-gem"],
    access: "free", era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pleshey_Castle"}]
  },
  {
    name: "Harewood Castle",
    description: "A 14th-century rectangular tower house visible for miles around, rising from a steep slope on the Harewood Estate. Its chapel sits above the portcullis chamber, and the barrel-vaulted basement still holds the original well — Grade I listed and hauntingly atmospheric.",
    history: "Founded by the De Lisle family in the 12th century, passed to Sir William de Aldeburgh who received a licence to crenellate in 1366. Features a two-storey great hall, four-storey kitchen wing with barrel-vaulted basement, and chapel over the portcullis chamber. Grade I listed building.",
    tags: ["ruins-romantic", "hilltop", "medieval", "atmospheric"],
    access: "exterior-only", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Harewood_Castle"}]
  },
  {
    name: "Nevern Castle",
    description: "A hidden Welsh stronghold in the Pembrokeshire countryside, shrouded in woodland and barely known outside local walking circles. The overgrown earthworks and mysterious atmosphere reward those who seek it out.",
    history: "A Norman motte-and-bailey castle in Pembrokeshire, built to control the Nevern valley. Part of the network of Welsh Marcher castles. The earthworks survive in woodland near the village of Nevern, known for its ancient Celtic cross and 'bleeding yew' tree in the churchyard.",
    tags: ["ruins-romantic", "woodland", "hidden-gem", "free-entry", "norman", "atmospheric"],
    access: "free", era: "12th century",
    sources: []
  },
  {
    name: "Ballintober Castle",
    description: "A mighty Anglo-Norman stronghold in County Roscommon, one of the few Irish castles to have been continuously occupied for over 700 years. Its twin-towered gatehouse and massive curtain walls still impress across the flat Connacht landscape.",
    history: "Built c.1300 by the de Burgh family as part of the Norman consolidation of Connacht. One of the few castles in Ireland to be continuously occupied for over 700 years. Features a large enclosure with round corner towers and an imposing gatehouse.",
    tags: ["well-preserved", "medieval", "norman", "hidden-gem"],
    access: "exterior-only", era: "14th century",
    sources: []
  },
  {
    name: "Llandovery Castle",
    description: "A Norman ruin on a knoll above the River Towy, with a modern bronze warrior guarding what centuries of Welsh princes fought and died for. One of Wales' most contested castles — taken and retaken so many times the history reads like a war diary.",
    history: "Norman motte-and-bailey probably begun in 1116 by Richard Fitz Pons. Repeatedly lost to the Princes of Deheubarth. Henry II spent heavily repairing it 1159-62 but the Welsh recaptured it. Finally fell to Edward I in 1277. Burned in the early 16th century and never repaired. Grade II* listed.",
    tags: ["ruins-romantic", "riverside", "free-entry", "norman", "medieval"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Llandovery_Castle"}]
  },
  {
    name: "Saltwood Castle",
    description: "Where the four knights plotted the murder of Thomas Becket — this Norman castle later became home to art historian Kenneth Clark and politician-diarist Alan Clark. Centuries of intrigue behind private walls, from medieval archbishops to 20th-century eccentrics.",
    history: "11th century origins, expanded in the 13th-14th centuries. Property of the Archbishops of Canterbury until 1540. Reputedly where the four knights met before assassinating Thomas Becket in 1170. Later owned by Kenneth Clark and his son Alan Clark. Grade I listed. Privately occupied.",
    tags: ["norman", "medieval", "atmospheric", "gardens"],
    access: "exterior-only", era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saltwood_Castle"}]
  },
  {
    name: "Eye Castle",
    description: "A Norman motte rising dramatically above the Suffolk town of Eye — once seat of the powerful Honor of Eye that controlled 20 Knight's fees. The castle mound and ruined walls still loom over this tiny town's pastel-coloured medieval streets.",
    history: "Norman motte-and-bailey castle built after the Conquest as the caput of the Honor of Eye, controlling extensive lands across Suffolk. The substantial motte dominates the town. Associated with the de Malet and de Clare families.",
    tags: ["ruins-romantic", "norman", "free-entry", "hilltop", "medieval"],
    access: "free", era: "11th century",
    sources: []
  }
];

let updated = 0;
for (const e of enrichments) {
  const castle = castles.find(c => c.name === e.name);
  if (!castle) { console.log(`SKIP: ${e.name}`); continue; }
  if (e.description) castle.description = e.description;
  if (e.history) castle.history = e.history;
  if (e.tags) castle.tags = e.tags;
  if (e.access) castle.access = e.access;
  if (e.era) castle.era = e.era;
  if (e.sources && e.sources.length) castle.sources = e.sources;
  updated++;
  console.log(`OK: ${e.name}`);
}

const out = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
fs.writeFileSync('data.js', out, 'utf8');
console.log(`\nUpdated ${updated}/${enrichments.length} sites`);
