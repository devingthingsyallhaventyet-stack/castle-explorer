const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const enrichments = [
  {
    name: 'Caldicot Castle',
    description: 'A brooding Norman fortress with roots in Saxon legend, where royal intrigue played out behind thick stone walls in the Welsh Marches.',
    history: "Built c.1100 by Norman earls of Hereford near Harold Godwinson's Saxon castle site. Owned by Thomas of Woodstock, son of Edward III, until 1391. Features a 14th-century gatehouse and round tower. Grade I listed since 1953. Now a country park and museum.",
    tags: ['well-preserved', 'kid-friendly', 'medieval', 'norman', 'gardens'],
    era: '12th-14th century',
    access: 'paid'
  },
  {
    name: 'Dolforwyn Castle',
    description: "The last castle built by a native Welsh prince — a defiant hilltop ruin commanding sweeping views of the Severn Valley.",
    history: "Built 1273-1277 by Llywelyn ap Gruffudd, Prince of Gwynedd, to assert Welsh authority over the strategic Severn Valley. Captured by the English during the Welsh Wars. Now managed by Cadw with ongoing archaeological excavations revealing its Welsh design.",
    tags: ['dramatic-ruin', 'hidden-gem', 'free-entry', 'hilltop', 'medieval', 'remote'],
    era: '13th century',
    access: 'free'
  },
  {
    name: 'Newcastle Emlyn Castle',
    description: "Atmospheric riverside ruins on a steep promontory above the Teifi — a castle that changed hands between Welsh and English more times than anyone can count.",
    history: "Built c.1240 by Welsh lord Maredudd ap Rhys on a steep promontory overlooking the River Teifi. Features a twin-towered gatehouse with semi-octagonal towers. Sir Rhys ap Thomas added larger windows c.1500. Damaged in the English Civil War.",
    tags: ['hidden-gem', 'free-entry', 'riverside', 'ruins-romantic', 'medieval'],
    era: '13th century',
    access: 'free'
  },
  {
    name: 'Bolton Priory',
    description: "Hauntingly beautiful Augustinian ruins in the Yorkshire Dales, where 12th-century arches frame the wild moorland sky and worship has never ceased.",
    history: "Founded 1154 when Augustinian canons moved from Embsay. The nave survived the Dissolution and remains an active parish church. The ruined east end and unfinished west tower (begun 1520) create one of England's most painted Gothic silhouettes. Grade I listed.",
    tags: ['romantic-ruin', 'photogenic', 'gothic', 'medieval', 'riverside', 'woodland'],
    era: '12th century',
    access: 'free'
  },
  {
    name: 'Haddon Hall',
    description: "England's most complete medieval manor — a time capsule of tapestried halls, terraced gardens, and the legendary elopement of Dorothy Vernon.",
    history: "Origins from the 11th century with additions through the 17th century. Acquired by the Vernon family in the 12th century through marriage. Dorothy Vernon's famous 1563 elopement with John Manners linked it to the Dukes of Rutland. Used as a filming location for multiple period dramas.",
    tags: ['well-preserved', 'photogenic', 'filming-location', 'gardens', 'medieval', 'tudor'],
    era: '11th-17th century',
    access: 'paid'
  },
  {
    name: 'Dudley Castle',
    description: "A dramatic Norman ruin rising above a zoo — where medieval power, Civil War sieges, and exotic animals share a limestone hilltop.",
    history: "Built 1070 by Ansculf de Picquigny after the Norman Conquest. Rebuilt in stone in the 12th century, demolished by Henry II, then rebuilt again. John Dudley constructed grand residential buildings within. Slighted during the English Civil War, gutted by fire in 1750. Now part of Dudley Zoo.",
    tags: ['dramatic-ruin', 'kid-friendly', 'norman', 'medieval'],
    era: '11th-16th century',
    access: 'paid'
  },
  {
    name: 'Muncaster Castle',
    description: "A haunted Lake District castle on Roman foundations, where a jester's ghost still roams and the mountains meet the sea.",
    history: "Possibly built on Roman foundations linked to the fort of Glannoventa at Ravenglass. Granted to Alan de Penitone in 1208. Rebuilt 1862-66 by architect Anthony Salvin. Famous for its resident ghost Tom Fool (jester Tom Skelton). Grade I listed, still privately owned.",
    tags: ['haunted', 'photogenic', 'kid-friendly', 'gardens', 'medieval'],
    era: '13th century',
    access: 'paid'
  },
  {
    name: 'Sizergh Castle',
    description: "A 14th-century pele tower wrapped in Tudor elegance, with intricate oak panelling so precious the V&A once borrowed it for a century.",
    history: "Home of the Strickland family for over 750 years. Earliest part is a 14th-century pele tower. The Inlaid Chamber features extraordinary oak panelling inlaid with poplar and bog-oak — sold to the V&A in the 1890s, returned in 1999. Now managed by the National Trust within the Lake District.",
    tags: ['well-preserved', 'kid-friendly', 'gardens', 'tudor', 'medieval'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Cardigan Castle',
    description: "The birthplace of the Eisteddfod — a beautifully restored Norman castle where Welsh culture was born above the River Teifi.",
    history: "First motte-and-bailey built c.1093 by Roger de Montgomery. Site of the first Eisteddfod in 1176, hosted by Lord Rhys. Rebuilt in stone in 1244. Castle Green House was built inside the walls c.1800. Fully restored and reopened to the public in 2015 as a heritage centre.",
    tags: ['hidden-gem', 'well-preserved', 'riverside', 'medieval', 'events-venue'],
    era: '11th-13th century',
    access: 'paid'
  },
  {
    name: 'White Castle',
    description: "A ghostly moated fortress in the Welsh Marches — one of three sister castles that guarded the road from Wales to Hereford for centuries.",
    history: "Established by the Normans after 1066 to protect the route to Hereford. Part of the Three Castles lordship with Grosmont and Skenfrith from 1135. Given to Hubert de Burgh by King John in 1201. Substantially rebuilt with stone curtain walls and mural towers. Named for its white-plastered walls.",
    tags: ['romantic-ruin', 'hidden-gem', 'photogenic', 'free-entry', 'medieval', 'norman'],
    era: '11th-13th century',
    access: 'free'
  },
  {
    name: 'Weobley Castle',
    description: "A medieval fortified manor perched on the edge of the Gower marshes, where you can almost hear the wind whispering through 700-year-old stone.",
    history: "A 14th-century fortified manor house on the north Gower coast overlooking the Llanrhidian marshes. Built by the de la Bere family. Features a great hall, solar, and chapel arranged around a courtyard. Managed by Cadw. One of the best-preserved medieval manor houses in Wales.",
    tags: ['romantic-ruin', 'hidden-gem', 'coastal', 'medieval'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Hay Castle',
    description: "A Norman fortress reborn in the world's most famous book town — centuries of fire, rebellion, and reinvention overlooking the Wye Valley.",
    history: "Built as a Norman ringwork in the late 11th or early 12th century during the invasion of Wales. Rebuilt in stone around 1200. A 17th-century mansion was built within the walls. Suffered fires in 1939 and 1977. Purchased by Hay Castle Trust and fully restored, reopening in 2022 as a cultural centre.",
    tags: ['hidden-gem', 'well-preserved', 'medieval', 'events-venue'],
    era: '12th century',
    access: 'paid'
  },
  {
    name: 'Swansea Castle',
    description: "A defiant medieval ruin hiding in plain sight among the city streets — a thousand-year survivor of Welsh sieges, storms, and urban sprawl.",
    history: "Founded 1107 by Henry de Beaumont as the caput of the lordship of Gower. Survived a 10-week Welsh siege in 1192. Partially destroyed by the Welsh in 1116. Only two blocks of the original castle remain. Recently restored as a public space in the city centre. Grade I listed.",
    tags: ['hidden-gem', 'free-entry', 'medieval', 'norman'],
    era: '12th-13th century',
    access: 'free'
  },
  {
    name: 'Clun Castle',
    description: "A brooding Norman ruin on the Welsh border, where Marcher lords once held the line between England and the wild hills beyond.",
    history: "Established by Norman lord Robert de Say after the Conquest. Became an important Marcher lord castle in the 12th century with an extensive castle-guard system. The massive earthworks and ruined keep overlook the River Clun. Owned by the Duke of Norfolk, managed by English Heritage.",
    tags: ['dramatic-ruin', 'hidden-gem', 'free-entry', 'riverside', 'norman', 'medieval'],
    era: '11th-12th century',
    access: 'free'
  },
  {
    name: 'Sandal Castle',
    description: "The Wars of the Roses haunt this hilltop ruin — where the Duke of York fell and Shakespeare set a scene of medieval treachery.",
    history: "A medieval motte-and-bailey overlooking the River Calder in Wakefield. Site of the Battle of Wakefield (1460) during the Wars of the Roses, where Richard, Duke of York was killed. Featured in Shakespeare's Henry VI. Extensive archaeological excavations in the 1960s-70s revealed its sandstone walls.",
    tags: ['dramatic-ruin', 'hidden-gem', 'free-entry', 'hilltop', 'medieval'],
    era: '12th century',
    access: 'free'
  },
  {
    name: 'Bolingbroke Castle',
    description: "Birthplace of a king and built from rare green stone — a ruined fortress in the quiet Lincolnshire wolds where Henry IV first drew breath.",
    history: "Built c.1220 by Ranulf, Earl of Chester, from local Spilsby greenstone. Birthplace of Henry IV (Henry of Bolingbroke) in 1367. Besieged during the English Civil War near the Battle of Winceby. Slighted c.1652. Now managed by Heritage Lincolnshire.",
    tags: ['dramatic-ruin', 'hidden-gem', 'free-entry', 'medieval'],
    era: '13th century',
    access: 'free'
  },
  {
    name: 'Narberth Castle',
    description: "A castle from Welsh myth and Norman stone — where the Mabinogi's Rhiannon was imprisoned and the Landsker Line divided two worlds.",
    history: "13th-century Norman ruins built by Andrew Perrot. Features in the Mabinogi as the court of Pwyll and where Rhiannon was punished. Forms part of the Landsker Line dividing Welsh and English-speaking Pembrokeshire. Safety restoration completed 2004-05.",
    tags: ['hidden-gem', 'free-entry', 'medieval', 'norman'],
    era: '13th century',
    access: 'free'
  },
  {
    name: 'Oxwich Castle',
    description: "A grand Tudor manor house in castle's clothing, perched on a wooded headland above one of Gower's most beautiful bays.",
    history: "Despite its name, a Tudor fortified manor house built in courtyard style on a headland overlooking Oxwich Bay. Site owned by the de Penres family from the 1230s, then the Mansel family who built the current structure in the 16th century. The famous Oxwich Brooch was found here. Managed by Cadw.",
    tags: ['hidden-gem', 'coastal', 'tudor', 'photogenic'],
    era: '16th century',
    access: 'paid'
  },
  {
    name: 'Bowes Castle',
    description: "A stark Norman keep built inside a Roman fort — standing sentinel over the Pennine pass where legions and medieval lords both kept watch.",
    history: "Built within the perimeter of the Roman fort of Lavatrae on what is now the A66. The stone keep was constructed in the 1170s by Henry II during the Great Revolt of 1173-74 to control the strategic Stainmore Pass through the Pennines. Managed by English Heritage.",
    tags: ['dramatic-ruin', 'hidden-gem', 'free-entry', 'medieval', 'norman', 'remote'],
    era: '12th century',
    access: 'free'
  },
  {
    name: 'Fonmon Castle',
    description: "One of Wales's rarest architectural survivors — a 12th-century fortress that evolved into an elegant Georgian home and never stopped being lived in.",
    history: "A fortified medieval castle near the village of Fonmon in the Vale of Glamorgan. Grade I listed with Grade II gardens. Origins rooted in the 12th century, it is one of few buildings in Wales continuously inhabited since the Norman period. Privately owned with gardens open to visitors.",
    tags: ['hidden-gem', 'well-preserved', 'gardens', 'medieval', 'wedding-venue'],
    era: '12th century',
    access: 'paid'
  }
];

let updated = 0;
for (const e of enrichments) {
  // Find the castle entry by name
  const nameStr = JSON.stringify(e.name);
  // Try various name patterns
  let idx = src.indexOf('"name": ' + nameStr);
  if (idx === -1) idx = src.indexOf('name: ' + nameStr);
  if (idx === -1) idx = src.indexOf("name: '" + e.name + "'");
  if (idx === -1) idx = src.indexOf('name: "' + e.name + '"');
  if (idx === -1) {
    console.log('NOT FOUND:', e.name);
    continue;
  }

  // Find the opening { for this object
  let objStart = src.lastIndexOf('{', idx);
  // Find closing }
  let braceCount = 0;
  let objEnd = objStart;
  for (let i = objStart; i < src.length; i++) {
    if (src[i] === '{') braceCount++;
    if (src[i] === '}') braceCount--;
    if (braceCount === 0) { objEnd = i; break; }
  }

  let objStr = src.substring(objStart, objEnd + 1);

  // Update or add description
  if (/"description"\s*:/.test(objStr)) {
    objStr = objStr.replace(/"description"\s*:\s*"(?:[^"\\]|\\.)*"/, '"description": ' + JSON.stringify(e.description));
  } else {
    objStr = objStr.replace(/("name"\s*:\s*"[^"]*"\s*,)/, '$1\n    "description": ' + JSON.stringify(e.description) + ',');
  }

  // Update or add history
  if (/"history"\s*:/.test(objStr)) {
    objStr = objStr.replace(/"history"\s*:\s*"(?:[^"\\]|\\.)*"/, '"history": ' + JSON.stringify(e.history));
  } else {
    objStr = objStr.replace(/("description"\s*:\s*"(?:[^"\\]|\\.)*"\s*,?)/, '$1\n    "history": ' + JSON.stringify(e.history) + ',');
  }

  // Update tags
  if (e.tags && e.tags.length > 0) {
    if (/"tags"\s*:/.test(objStr)) {
      objStr = objStr.replace(/"tags"\s*:\s*\[[\s\S]*?\]/, '"tags": ' + JSON.stringify(e.tags));
    }
  }

  // Update era
  if (e.era) {
    if (/"era"\s*:/.test(objStr)) {
      objStr = objStr.replace(/"era"\s*:\s*"[^"]*"/, '"era": ' + JSON.stringify(e.era));
    }
  }

  src = src.substring(0, objStart) + objStr + src.substring(objEnd + 1);
  updated++;
}

fs.writeFileSync('data.js', src);
console.log('Updated', updated, 'sites in data.js');
