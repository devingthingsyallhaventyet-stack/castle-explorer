const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const updates = [
  {
    name: "Taunton Castle",
    description: "A Norman fortress reborn as the Museum of Somerset — where the Bloody Assizes were held and centuries of West Country history unfold within ancient walls.",
    history: "Originally built as the administrative centre for the Somerset estates of the bishops of Winchester. Site of the notorious Bloody Assizes in 1685, where Judge Jeffreys sentenced Monmouth Rebellion supporters. Fell into decay but rescued in 1874 by the Somerset Archaeological Society, who established a museum. Refurbished as the Museum of Somerset in 2011 after £7 million investment.",
    tags: ["well-preserved", "museum", "atmospheric", "medieval", "norman", "tearoom-cafe", "gift-shop"],
    access: "free",
    era: "12th-17th century",
    sources: [{name: "Museum of Somerset", url: "https://swheritage.org.uk/museum-of-somerset/explore/taunton-castle/"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Taunton_Castle"}]
  },
  {
    name: "Caerhays Castle",
    description: "A romantic John Nash castle overlooking a private Cornish beach, surrounded by 140 acres of world-famous spring gardens blazing with camellias, magnolias, and rhododendrons.",
    history: "Designed by architect John Nash (who also designed Buckingham Palace) and built in 1808 for the Trevanion family. Home to the Williams family, who created internationally acclaimed gardens with plant-hunter specimens from China. Houses the National Magnolia Collection. The gardens are particularly spectacular in spring with massed displays of camellias and rhododendrons.",
    tags: ["photogenic", "gardens", "coastal", "romantic", "guided-tours", "tearoom-cafe"],
    access: "paid",
    era: "19th century",
    sources: [{name: "Caerhays Estate", url: "https://visit.caerhays.co.uk/"}, {name: "Visit Cornwall", url: "https://www.visitcornwall.com/things-to-do/history-and-heritage/caerhays-castle-and-gardens"}]
  },
  {
    name: "Kendal Castle",
    description: "Hilltop ruins where Catherine Parr — Henry VIII's last queen — spent her childhood, with sweeping views over the Lake District gateway town and the Kent Valley.",
    history: "Built in the 13th century as the seat of the Barony of Kendal, atop a glacial drumlin overlooking the town. By the 15th century, owned by the Parr family — birthplace of Catherine Parr, sixth and last wife of Henry VIII. Abandoned by the 16th century and gradually fell into ruin. The earlier castle site (Castle Howe) is visible across the river.",
    tags: ["ruins-romantic", "hilltop", "free-entry", "atmospheric", "medieval", "dog-friendly", "photogenic"],
    access: "free",
    era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kendal_Castle"}, {name: "Britain Express", url: "https://www.britainexpress.com/attractions.htm?attraction=2329"}, {name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1008901"}]
  },
  {
    name: "Burgh Island",
    description: "A tidal island with a 1930s Art Deco hotel where Agatha Christie wrote mysteries and Noël Coward held court — reached by sea tractor at high tide like a scene from a novel.",
    history: "The island has a long history including a 14th-century pilchard fishery and smuggling connections — the Pilchard Inn dates to this era. In the 1930s, the Art Deco hotel was built, attracting the glamorous set. Agatha Christie stayed here and wrote 'And Then There Were None' and 'Evil Under the Sun'. Features a captain's cabin salvaged from the 1891 warship HMS Ganges. Restored to 1930s glory.",
    tags: ["photogenic", "coastal", "island", "romantic", "atmospheric", "tearoom-cafe", "wedding-venue"],
    access: "paid",
    era: "1930s Art Deco",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Burgh_Island"}, {name: "Burgh Island Hotel", url: "https://www.burghisland.com/"}]
  },
  {
    name: "Penshaw Monument",
    description: "A half-scale replica of the Temple of Hephaestus crowning a Wearside hilltop — Sunderland's most beloved landmark, visible for miles across the Durham coalfields.",
    history: "Built in 1844 as a memorial to John George Lambton, 1st Earl of Durham, Governor General of British North America. Designed by John and Benjamin Green as a half-size replica of the Temple of Hephaestus in Athens. Stands 70 feet high on Penshaw Hill. Appears on the badge of Sunderland AFC. Managed by the National Trust, which offers guided rooftop tours in summer.",
    tags: ["photogenic", "hilltop", "free-entry", "atmospheric", "guided-tours"],
    access: "free",
    era: "Victorian (1844)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Penshaw_Monument"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/north-east/penshaw-monument"}]
  },
  {
    name: "Leap Castle",
    description: "The world's most haunted castle — a blood-soaked O'Carroll stronghold in the Offaly countryside where a 'Bloody Chapel' conceals an oubliette stuffed with human remains.",
    history: "Built in the early 1500s by the warring O'Carroll clan of Éile. Infamous for the 'Bloody Chapel' where one O'Carroll brother murdered another during Mass. An oubliette was discovered containing hundreds of skeletons. Burned by IRA forces in 1922 during the Irish Civil War. Being lovingly restored by current owner Sean Ryan. Reputedly haunted by an elemental entity and multiple ghosts.",
    tags: ["haunted", "atmospheric", "dark-brooding", "ruins-romantic", "remote", "guided-tours"],
    access: "paid",
    era: "15th-16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Leap_Castle"}, {name: "Leap Castle", url: "https://leapcastle.net/"}, {name: "Ireland.com", url: "https://www.ireland.com/en-us/magazine/built-heritage/getting-spooked-at-leap-castle/"}]
  },
  {
    name: "Tretower Court",
    description: "A medieval court and castle pair in the Brecon Beacons — where Norman invaders became Welsh lords and a striking circular tower dominates the Usk Valley skyline.",
    history: "The castle was begun c. 1100 by the Picard family, Norman adventurers who gradually became powerful Welsh lords. Roger Picard II built the distinctive circular tower that gave the place its Welsh name 'Tre-tŵr' (place of the tower). The adjacent court was the creation of Sir Roger Vaughan during the Wars of the Roses, when he became one of the most powerful men in Wales. Managed by Cadw.",
    tags: ["well-preserved", "atmospheric", "medieval", "norman", "gardens", "guided-tours"],
    access: "paid",
    era: "12th-15th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tretower_Court"}, {name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/tretower-court-and-castle"}, {name: "Visit Wales", url: "https://www.visitwales.com/attraction/castle/tretower-court-and-castle-cadw-680102"}]
  },
  {
    name: "Kelburn Castle",
    description: "Scotland's oldest castle in continuous habitation — a 13th-century fortress made psychedelic by Brazilian graffiti artists, set in a Glen of exotic trees and adventure trails.",
    history: "One of Scotland's oldest castles, with original parts dating to the 13th century. Ancestral seat of the Boyle family, Earls of Glasgow, for over 800 years. In 2007, when the castle needed re-harling, Lord Glasgow invited four Brazilian graffiti artists (including Os Gêmeos) to paint the exterior in vivid colours. Historic Scotland approved on condition the art would be temporary — but it remains, making it one of Scotland's most Instagram-worthy castles.",
    tags: ["well-preserved", "photogenic", "kid-friendly", "woodland", "gardens", "tearoom-cafe", "gift-shop"],
    access: "paid",
    era: "13th century onwards",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kelburn_Castle"}, {name: "History Hit", url: "https://www.historyhit.com/locations/kelburn-castle/"}]
  },
  {
    name: "Mussenden Temple",
    description: "A tiny classical temple teetering on a 120-foot cliff above the Atlantic — built as a bishop's library and modelled on the Temple of Vesta in Tivoli, with Game of Thrones coastline stretching below.",
    history: "Built in 1785 by Frederick Hervey, the eccentric Earl-Bishop of Derry, as a library within the Downhill Demesne. Modelled on the Temple of Vesta at Tivoli, Italy. Named after his cousin Frideswide Mussenden, who died aged 22 before its completion. Cliff erosion has brought the temple perilously close to the edge. The nearby Downhill House is now a ruin. Managed by the National Trust.",
    tags: ["photogenic", "atmospheric", "coastal", "cliffside", "romantic", "free-entry"],
    access: "free",
    era: "18th century (1785)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mussenden_Temple"}, {name: "History Hit", url: "https://www.historyhit.com/locations/mussenden-temple-and-downhill-demesne/"}]
  },
  {
    name: "Gainsborough Old Hall",
    description: "One of England's best-preserved medieval manor houses — a magnificent timber-framed great hall where Henry VIII and the Mayflower Pilgrims both left their mark.",
    history: "Built by Sir Thomas Burgh in 1460, one of the best-preserved medieval manor houses in England. The Burghs were rich, powerful, and flamboyant. Both Richard III and Henry VIII visited. In the early 1600s, the Separatist movement that would become the Pilgrim Fathers held secret meetings here. Seat of the Burgh family from 1430 to 1596, then sold to the merchant Hickman family. Managed by English Heritage.",
    tags: ["well-preserved", "atmospheric", "medieval", "museum", "guided-tours", "gift-shop"],
    access: "paid",
    era: "15th century",
    sources: [{name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/gainsborough-old-hall/"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gainsborough_Old_Hall"}]
  },
  {
    name: "Lyveden New Bield",
    description: "An unfinished Elizabethan lodge frozen in time — a Catholic rebel's defiant statement in stone, abandoned when its creator died and never touched since 1605.",
    history: "Built c. 1604-05 by Sir Thomas Tresham, a fervent Catholic who was repeatedly imprisoned for his faith. Designed by Robert Stickells as a garden lodge in the shape of a cross, rich with Catholic symbolism. Work halted when Tresham died in 1605 — the same year his son Francis was implicated in the Gunpowder Plot. Never completed, never roofed, perfectly preserved in its unfinished state. National Trust.",
    tags: ["atmospheric", "ruins-romantic", "remote", "photogenic", "medieval", "gardens"],
    access: "paid",
    era: "Elizabethan (1604-05)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lyveden_New_Bield"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/leicestershire-northamptonshire/lyveden/history-of-lyveden"}]
  },
  {
    name: "Layer Marney Tower",
    description: "The tallest Tudor gatehouse in England — an ambitious redbrick palace left unfinished when its builder died, now standing as a magnificent folly in the Essex countryside.",
    history: "Built in the 1520s by Lord Henry Marney, a close friend and advisor to both Henry VII and Henry VIII. Intended as the entrance to a grand palace that was never completed — Lord Marney died in 1523 and his son followed two years later. The eight-storey gatehouse, adorned with Italian Renaissance terracotta, remains the tallest Tudor gatehouse in Britain. Still a family home and open to the public.",
    tags: ["well-preserved", "photogenic", "tudor", "gardens", "guided-tours", "wedding-venue", "events-venue"],
    access: "paid",
    era: "Tudor (1520s)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Layer_Marney_Tower"}, {name: "Historic Houses", url: "https://www.historichouses.org/house/layer-marney-tower/visit/"}]
  }
];

function findCastleBlock(source, name) {
  const nameStr = '"name": "' + name + '"';
  const pos = source.indexOf(nameStr);
  if (pos === -1) return null;
  let depth = 0, start = pos;
  for (let i = pos; i >= 0; i--) { if (source[i] === '}') depth++; if (source[i] === '{') { if (depth === 0) { start = i; break; } depth--; } }
  depth = 0; let end = pos;
  for (let i = start; i < source.length; i++) { if (source[i] === '{') depth++; if (source[i] === '}') { depth--; if (depth === 0) { end = i + 1; break; } } }
  return { start, end, text: source.substring(start, end) };
}

function updateField(objText, field, value) {
  const serialized = JSON.stringify(value);
  const patterns = [
    new RegExp(`("${field}":\\s*)("(?:[^"\\\\]|\\\\.)*")`, 's'),
    new RegExp(`("${field}":\\s*)(\\[(?:[^\\[\\]]*|\\[(?:[^\\[\\]]*|\\[[^\\[\\]]*\\])*\\])*\\])`, 's'),
  ];
  for (const p of patterns) { const m = objText.match(p); if (m) return objText.replace(p, `$1${serialized}`); }
  const lastBrace = objText.lastIndexOf('}');
  const before = objText.substring(0, lastBrace).trimEnd();
  const needsComma = !before.endsWith(',') && !before.endsWith('{');
  return before + (needsComma ? ',' : '') + `\n    "${field}": ${serialized}` + '\n  }';
}

let count = 0;
for (const u of updates) {
  const block = findCastleBlock(src, u.name);
  if (!block) { console.log(`NOT FOUND: ${u.name}`); continue; }
  let newBlock = block.text;
  for (const f of ['description','history','tags','access','era','sources']) { if (u[f]) newBlock = updateField(newBlock, f, u[f]); }
  src = src.substring(0, block.start) + newBlock + src.substring(block.end);
  console.log(`Updated: ${u.name}`); count++;
}
fs.writeFileSync('data.js', src, 'utf8');
console.log(`\nWrote ${count} updates to data.js`);
