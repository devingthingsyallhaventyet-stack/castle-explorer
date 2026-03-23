const fs = require('fs');
const vm = require('vm');
let src = fs.readFileSync('data.js', 'utf8');
let modSrc = src.replace(/^const /gm, 'var ');
const ctx = {};
vm.runInNewContext(modSrc, ctx);

const enrichments = [
  {
    name: "Dolaucothi Gold Mines",
    description: "The UK's only known Roman gold mines, hidden in a green Welsh valley — where legionaries once dug for treasure and you can still venture underground on guided tours by candlelight.",
    history: "Mined by the Romans from the 1st century AD, possibly a motivation for their invasion of Britain. A Roman military fort guarded the site until c.125 AD when it became civilian-operated. Evidence of sophisticated Roman engineering including aqueducts and hushing techniques survives. Mining continued intermittently through the 19th-20th centuries. Now a National Trust property with guided underground tours.",
    tags: ["atmospheric", "guided-tours", "kid-friendly", "woodland", "remote", "tearoom-cafe"],
    access: "paid",
    era: "1st century Roman",
    youtube: [],
    sources: [
      {name: "National Trust", url: "https://www.nationaltrust.org.uk/dolaucothi-gold-mines"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dolaucothi_Gold_Mines"},
      {name: "History Hit", url: "https://www.historyhit.com/locations/dolaucothi-gold-mines/"}
    ]
  },
  {
    name: "Corbridge Roman Town",
    description: "Walk the actual streets of a Roman frontier town — where legionaries shopped, drank, and stored their treasures in a buried chest unearthed 1,800 years later.",
    history: "Originally a series of military forts at the junction of Dere Street and Stanegate, south of Hadrian's Wall. After the Wall was built, Corbridge (Coria, meaning 'hosting place' in Celtic) developed into a prosperous supply town and leave centre for off-duty garrisons. In 1964, archaeologists discovered the famous 'Corbridge Hoard' — a buried chest containing armour and weapons hidden by a Roman soldier. Managed by English Heritage with a museum.",
    tags: ["museum", "photogenic", "kid-friendly", "guided-tours", "gift-shop"],
    access: "paid",
    era: "1st-4th century Roman",
    youtube: [],
    sources: [
      {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/corbridge-roman-town-hadrians-wall/"},
      {name: "Visit Northumberland", url: "https://www.visitnorthumberland.com/explore/things-to-do/attractions/historic-sites/corbridge-roman-town-hadrian-s-wall"},
      {name: "Historic UK", url: "https://www.historic-uk.com/HistoryMagazine/DestinationsUK/Corbridge-Roman-Site-Northumberland/"}
    ]
  },
  {
    name: "Helmingham Hall",
    description: "A fairy-tale moated Tudor hall where the drawbridge is still raised every single night — surrounded by Grade I gardens, a deer park, and 500 years of the same family's careful stewardship.",
    history: "Begun by John Tollemache in 1480, owned by the Tollemache family ever since — over 500 years. Built around a courtyard in typical late medieval/Tudor style with a working moat and drawbridge. Tudor gables were removed c.1760 and half-timbered walls concealed behind brick. The Grade I listed gardens were redesigned by Lady Tollemache (Chelsea Gold Medallist) and include herbaceous borders, herb gardens, and a 400-acre deer park with red and fallow deer.",
    tags: ["well-preserved", "tudor", "gardens", "photogenic", "romantic", "tearoom-cafe", "dog-friendly"],
    access: "paid",
    era: "15th century",
    youtube: [],
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Helmingham_Hall"},
      {name: "Helmingham Hall", url: "https://www.helmingham.com/history/the-hall/"},
      {name: "Country Life", url: "https://www.countrylife.co.uk/gardens/country-gardens-and-gardening-tips/helmingham-hall-the-ancient-garden-at-medieval-hall-where-the-drawbridge-is-still-pulled-up-every-night"}
    ]
  },
  {
    name: "Dunadd Fort",
    description: "The ancient capital of Dál Riata — climb this rocky outcrop in Kilmartin Glen and place your foot in the same carved footprint where Dark Age kings were crowned in the birthplace of Scotland.",
    history: "An Iron Age hillfort that became the chief stronghold of the Gaelic kingdom of Dál Riata, which spanned northern Ireland and western Scotland. First mentioned in AD 683, already a major power centre. Famous for its summit carvings: a footprint, a boar, and an ogham inscription, likely used in king-making ceremonies. From here, the seeds of what became the Kingdom of Scotland were sown. Free to visit, managed by Historic Environment Scotland.",
    tags: ["atmospheric", "prehistoric", "hilltop", "free-entry", "remote", "photogenic", "celtic"],
    access: "free",
    era: "Iron Age / Early Medieval",
    youtube: [],
    sources: [
      {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/kilmartin-glen-dunadd-fort/history/"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dunadd"},
      {name: "Britannica", url: "https://www.britannica.com/place/Dalriada"}
    ]
  },
  {
    name: "Blaenavon Ironworks",
    description: "A UNESCO World Heritage Site where the fires of the Industrial Revolution still feel close — massive stone furnaces and workers' cottages tell the story of the iron that built the modern world.",
    history: "Built 1788-99 by Thomas Hill, Thomas Hopkins, and Benjamin Pratt as the first purpose-built multi-furnace ironworks in Wales. By 1796, it was Wales's second-largest ironworks. Site of the revolutionary Gilchrist-Thomas process (1878) which allowed cheap, high-sulphur iron ores to be used worldwide, transforming global steel production. Closed 1904. Part of the Blaenavon Industrial Landscape UNESCO World Heritage Site inscribed in 2000. Managed by Cadw.",
    tags: ["atmospheric", "museum", "free-entry", "kid-friendly", "guided-tours"],
    access: "free",
    era: "18th century",
    youtube: [],
    sources: [
      {name: "UNESCO", url: "https://whc.unesco.org/en/list/984/"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Blaenavon_Ironworks"},
      {name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/blaenavon-ironworks"}
    ]
  },
  {
    name: "Wentworth Castle",
    description: "A baroque mansion born from an aristocratic family feud — built to outshine a cousin's nearby estate, set within magnificent gardens hiding a theatrical mock medieval castle on the hilltop.",
    history: "Purchased in 1708 by Thomas Wentworth, Baron Raby, who was disinherited from nearby Wentworth Woodhouse and determined to build a rival estate. A grand Baroque wing was added 1709-15. In 1727, he built a spectacular sham medieval castle ('Stainborough Castle') on the highest point of the estate as a theatrical folly. Gardens include a conservatory, Victorian flower garden, and 60 acres of parkland. Now cared for by the National Trust and undergoing restoration.",
    tags: ["gardens", "photogenic", "atmospheric", "guided-tours", "tearoom-cafe", "dog-friendly", "woodland"],
    access: "paid",
    era: "18th century",
    youtube: [],
    sources: [
      {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/yorkshire/wentworth-castle-gardens/the-history-of-wentworth-castle-gardens"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wentworth_Castle"},
      {name: "Wentworth Castle", url: "https://www.wentworthcastle.org/history-restoration/"}
    ]
  },
  {
    name: "Nunnington Hall",
    description: "A mellow Yorkshire manor nestled beside the River Rye in the Howardian Hills — where Tudor bones hide beneath 17th-century elegance and a celebrated miniature room collection delights visitors.",
    history: "A dwelling has stood here since at least 1249, with the current house growing from a Tudor hall. Purchased by London cloth merchant Ranald Graham in 1655 for £9,500 (c.£2.5M today), whose family made many changes. The house evolved through the centuries and was last renovated in 1921 by the Fife family, who gave it to the National Trust in 1952. Houses the Carlisle Collection of miniature rooms in the attic.",
    tags: ["well-preserved", "tudor", "gardens", "riverside", "tearoom-cafe", "kid-friendly", "gift-shop", "dog-friendly"],
    access: "paid",
    era: "13th-17th century",
    youtube: [],
    sources: [
      {name: "National Trust", url: "https://www.nationaltrust.org.uk/nunnington-hall"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nunnington_Hall"},
      {name: "Visit York", url: "https://visityork.org/business-directory/nunnington-hall"}
    ]
  },
  {
    name: "Rufford Old Hall",
    description: "One of Lancashire's finest Tudor timber-framed halls — where a young William Shakespeare may once have performed in the spectacular Great Hall with its unique moveable screen.",
    history: "Built c.1530 by Sir Robert Hesketh, home to the Hesketh family for over 600 years. The magnificent timber-framed Great Hall survives with a rare hammerbeam roof and an extraordinary moveable carved oak screen — unique among Lancashire houses. Local tradition claims a young Shakespeare performed here as 'William Shakeshafte' in the 1580s. Abandoned c.1798, later restored. National Trust since 1936.",
    tags: ["well-preserved", "tudor", "atmospheric", "gardens", "guided-tours", "tearoom-cafe", "gift-shop", "kid-friendly"],
    access: "paid",
    era: "16th century",
    youtube: [],
    sources: [
      {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/liverpool-lancashire/rufford-old-hall"},
      {name: "National Trust Collections", url: "https://www.nationaltrustcollections.org.uk/place/rufford-old-hall"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rufford_Old_Hall"}
    ]
  },
  {
    name: "Samlesbury Hall",
    description: "A black-and-white medieval hall draped in ghost stories and Lancashire legend — one of Britain's most haunted houses, where the White Lady still drifts through timber-framed rooms.",
    history: "Built in 1325 by Gilbert de Southworth as the family's primary residence. The Southworths were Catholic recusants who suffered under Elizabethan persecution. The hall's ghost, the 'White Lady' (Dorothy Southworth), is said to haunt the corridors after a tragic love affair. First published ghost account dates to 1873. The hall fell into disrepair but was rescued and is now a heritage venue with antiques centre, café, and regular events.",
    tags: ["medieval", "atmospheric", "haunted", "tearoom-cafe", "events-venue", "gift-shop", "guided-tours"],
    access: "free",
    era: "14th century",
    youtube: [],
    sources: [
      {name: "Samlesbury Hall", url: "https://samlesburyhall.co.uk/ghosts-hauntings/"},
      {name: "Visit Preston", url: "https://www.visitpreston.com/article/3057/Haunted-Preston-Samlesbury-Hall-s-Spooky-History"},
      {name: "Haunted Rooms", url: "https://www.hauntedrooms.co.uk/samlesbury-hall-preston-lancashire"}
    ]
  },
  {
    name: "Broughty Ferry Beach Castle",
    description: "A sturdy 15th-century fortress standing guard at the mouth of the Tay — where castle walls meet sandy beach and panoramic views stretch across the Firth to Fife.",
    history: "Built c.1490 by the 4th Lord Gray to control the strategically important mouth of the River Tay near Dundee. Captured by English troops in 1547 during the 'Rough Wooing'. Fell into ruin but was rebuilt in the 1860s as a coastal defence fort. Now houses a museum covering local history, wildlife, and the environment of the Tay estuary. Managed by Dundee City Council.",
    tags: ["coastal", "museum", "photogenic", "kid-friendly", "free-entry", "dog-friendly"],
    access: "free",
    era: "15th century",
    youtube: [],
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Broughty_Castle"},
      {name: "Dundee City Council", url: "https://www.dundeecity.gov.uk/service-area/leisure-and-culture-dundee/leisure-and-culture-dundee-art-galleries-and-museums/broughty-castle-museum"}
    ]
  }
];

let updated = 0;
for (const e of enrichments) {
  const idx = ctx.CASTLES.findIndex(c => c.name === e.name);
  if (idx === -1) { console.log('NOT FOUND: ' + e.name); continue; }
  Object.assign(ctx.CASTLES[idx], {
    description: e.description, history: e.history, tags: e.tags,
    access: e.access, era: e.era, youtube: e.youtube, sources: e.sources
  });
  updated++;
}

const output = 'const CASTLES = ' + JSON.stringify(ctx.CASTLES, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = { CASTLES };\n';
fs.writeFileSync('data.js', output, 'utf8');
console.log('Updated ' + updated + ' sites. File size: ' + output.length);
