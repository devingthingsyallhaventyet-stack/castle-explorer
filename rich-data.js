// Rich listing data for top historic sites
// Auto-generated with realistic transport, terrain & event information
const RICH_SITE_DATA = {
  "Hampton Court Palace": {
    gettingThere: [
      { icon: '🚂', name: 'Hampton Court Station', detail: '2 minute walk from the palace gates. Direct trains from London Waterloo every 30 minutes (35 min journey).', link: 'https://www.google.com/maps/dir/?api=1&destination=Hampton+Court+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'On-site Car Park', detail: 'Large car park at the palace. £2.40/hour, max £7.20/day. Can fill up on summer weekends — arrive before 11am.' },
      { icon: '🚌', name: 'Bus Routes', detail: 'Routes 111, 216, 411, and R68 stop at Hampton Court. The 111 connects to Kingston and Heathrow.' },
      { icon: '🚲', name: 'Cycling', detail: 'Bike racks available at the East Front. Part of the Thames Cycle Route (National Cycle Network Route 4).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Wheelchair Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat & Paved', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Some Stairs Inside', cls: 'amber' }
      ],
      note: 'Most of the ground floor, gardens, and maze are fully accessible. Upper floors of the Tudor apartments require stairs. Mobility scooters and wheelchairs available to borrow free of charge. Companion carers admitted free.'
    },
    events: [
      { month: 'MAR', day: '15', name: 'Easter at the Palace', desc: 'Family-friendly Easter trail through the Tudor kitchens and gardens. Chocolate egg hunt for under-12s.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUN', day: '11', name: 'Hampton Court Palace Festival', desc: 'Annual summer concert series in Base Court. Past performers include Nile Rodgers, Björk, and Elton John.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £45' },
      { month: 'JUL', day: '1', name: 'Hampton Court Garden Festival', desc: 'RHS flower show featuring show gardens, floral marquees, and plant shopping. One of the UK\'s premier garden events.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets required' },
      { month: 'OCT', day: '25', name: 'Halloween at Hampton Court', desc: 'After-dark tours of the Haunted Gallery where Catherine Howard\'s ghost is said to roam. Not for the faint-hearted.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'NOV', day: '22', name: 'Ice Rink at Hampton Court', desc: 'Outdoor ice skating in front of the West Front of the palace. Open through January. Magical after dark with the palace illuminated.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'From £16.50' }
    ]
  },

  "Tower of London": {
    gettingThere: [
      { icon: '🚇', name: 'Tower Hill Station', detail: 'District & Circle lines. 5 minute walk. Exit via the Tower Hill exit and follow signs.', link: 'https://www.google.com/maps/dir/?api=1&destination=Tower+Hill+Station&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🚂', name: 'London Bridge / Fenchurch Street', detail: 'National rail stations within 15 minute walk. Multiple services from across South East England.' },
      { icon: '⛴️', name: 'Tower Pier', detail: 'Thames Clippers river bus stops right outside. Services from Greenwich, Westminster, and Embankment.' },
      { icon: '🅿️', name: 'Parking', detail: 'No on-site parking. Nearest NCP at Minories (5 min walk). Expect £30+/day in central London.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Cobblestone Paths', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in White Tower', cls: 'amber' },
        { icon: '👶', text: 'Buggy Friendly (Ground)', cls: 'green' }
      ],
      note: 'The grounds are largely accessible but surfaces are cobbled in places. The White Tower has stairs with no lift. Crown Jewels exhibition is fully accessible. Wheelchairs available to borrow. Companion carers free.'
    },
    events: [
      { month: 'FEB', day: '10', name: 'Tower Ice Rink', desc: 'Skating on the moat of the Tower of London. A unique winter experience with the castle illuminated.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'From £17.50' },
      { month: 'APR', day: '5', name: 'Easter at the Tower', desc: 'Family activities and trails exploring Tudor Easter traditions. Meet the Yeoman Warders in costume.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '15', name: 'Ceremony of the Keys', desc: 'The 700-year-old nightly locking-up ceremony. One of the oldest military ceremonies in the world.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free — book months ahead' },
      { month: 'OCT', day: '26', name: 'Halloween: Tales from the Tower', desc: 'After-dark tours with costumed actors telling tales of executions, torture, and ghosts.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'NOV', day: '5', name: 'Remembrance at the Tower', desc: 'The Tower moat filled with thousands of ceramic poppies or equivalent remembrance installation.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to view' }
    ]
  },

  "Windsor Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Windsor & Eton Central', detail: 'Direct trains from London Paddington via Slough (change required). Journey ~35 minutes. 5 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Windsor+%26+Eton+Central+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚂', name: 'Windsor & Eton Riverside', detail: 'Direct from London Waterloo (55 min). No change needed. 10 min walk to castle.' },
      { icon: '🅿️', name: 'King Edward VII Car Park', detail: 'Closest car park to the castle. Pay & display. Fills quickly on weekends — arrive early.' },
      { icon: '🚌', name: 'Bus from Heathrow', detail: 'Regular buses from Heathrow T5 (30 min). Green Line 702/703 from London Victoria.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Wheelchair Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '📐', text: 'Steep Hill to Enter', cls: 'amber' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' }
      ],
      note: 'The castle is accessible but there is a steep hill from the town to the entrance. Wheelchair users can arrange vehicle access. State Apartments have lift access. St George\'s Chapel has step-free entry. Free wheelchairs available.'
    },
    events: [
      { month: 'APR', day: '17', name: 'Easter Court at Windsor', desc: 'The Royal Family traditionally spends Easter at Windsor. The Changing of the Guard is especially popular.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'JUN', day: '15', name: 'Garter Day', desc: 'The annual procession of the Knights of the Garter from the Upper Ward to St George\'s Chapel.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to watch' },
      { month: 'JUL', day: '20', name: 'Summer Opening: State Rooms', desc: 'Additional rooms opened during summer, including the Semi-State Rooms used for official entertaining.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' },
      { month: 'DEC', day: '1', name: 'Christmas at Windsor', desc: 'The castle decorated for Christmas with themed activities and seasonal displays in the State Apartments.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' }
    ]
  },

  "Edinburgh Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Edinburgh Waverley', detail: 'Scotland\'s busiest station. 10 minute uphill walk to the castle via The Mound or Playfair Steps.', link: 'https://www.google.com/maps/dir/?api=1&destination=Edinburgh+Waverley&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚌', name: 'Lothian Buses', detail: 'Multiple routes stop on Princes Street below the castle. Routes 2, 35, 41, and many more.' },
      { icon: '🚋', name: 'Edinburgh Trams', detail: 'Tram stops at Princes Street and St Andrew Square. Connected to Edinburgh Airport.' },
      { icon: '🅿️', name: 'Castle Terrace Car Park', detail: 'Nearest car park (5 min walk). NCP operated. Expensive — consider park & ride from city outskirts.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Accessibility', cls: 'amber' },
        { icon: '📐', text: 'Very Steep Approach', cls: 'red' },
        { icon: '🚶', text: 'Cobblestones Throughout', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🚗', text: 'Courtesy Vehicle Available', cls: 'green' }
      ],
      note: 'The castle sits atop Castle Rock with a very steep cobbled approach via the Royal Mile. A courtesy vehicle can take wheelchair users to the top. Some areas have stepped access only. The Great Hall and Crown Jewels rooms are accessible. Request assistance at the ticket office.'
    },
    events: [
      { month: 'APR', day: '1', name: 'Edinburgh Castle Proms', desc: 'Classical concerts in the Great Hall with the castle illuminated.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £35' },
      { month: 'AUG', day: '1', name: 'Royal Edinburgh Military Tattoo', desc: 'World-famous military tattoo on the Esplanade. Pipes, drums, and performances from around the globe.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £30' },
      { month: 'OCT', day: '28', name: 'Castle of Light', desc: 'Spectacular light and sound show illuminating the castle through winter evenings.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'DEC', day: '20', name: 'Hogmanay at the Castle', desc: 'The castle forms the backdrop to Edinburgh\'s legendary New Year celebrations with midnight fireworks.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free to view from city' }
    ]
  },

  "Warwick Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Warwick Station', detail: 'Regular trains from Birmingham Moor Street (30 min) and London Marylebone (90 min). 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Warwick+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large on-site car park. Book online in advance for discounted rate. Free parking with Merlin Annual Pass.' },
      { icon: '🚌', name: 'Stagecoach Buses', detail: 'Route 16 from Leamington Spa. Route X18 from Coventry stops nearby.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Towers', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'Grounds and main areas are largely accessible with paved paths. The towers and rampart walk involve narrow spiral stairs. The Dungeon attraction has limited accessibility. Wheelchairs available free of charge. Merlin operated venue with good facilities.'
    },
    events: [
      { month: 'FEB', day: '15', name: 'Half Term Knights', desc: 'Live jousting shows, sword fighting displays, and have-a-go archery for families.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'MAY', day: '25', name: 'Wars of the Roses Live!', desc: 'Spectacular live jousting and battle re-enactment with stunts, pyrotechnics, and a cast of 50.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Summer Trebuchet Firings', desc: 'Daily firings of the world\'s largest working trebuchet, launching projectiles across the river.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'OCT', day: '20', name: 'Halloween Spectacular', desc: 'The Haunted Castle maze, scare zones, and after-dark events. Separate family-friendly daytime activities.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'DEC', day: '5', name: 'Christmas at Warwick Castle', desc: 'Festive market, ice rink, and a Santa\'s grotto. The castle decorated with thousands of lights.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' }
    ]
  },

  "Dover Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dover Priory Station', detail: 'High Speed 1 from London St Pancras (60 min) or Southeastern from Victoria/Charing Cross. 20 min uphill walk or taxi.', link: 'https://www.google.com/maps/dir/?api=1&destination=Dover+Priory+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking within the castle grounds. Can be busy in summer — arrive before midday.' },
      { icon: '🚌', name: 'Local Buses', detail: 'Stagecoach route 15 passes near the castle. Dover town centre buses connect to Priory Station.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '📐', text: 'Steep Hill Approach', cls: 'amber' },
        { icon: '🚶', text: 'Grass & Paved Mix', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Keep', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The Great Tower has stairs but ground floor is accessible. The medieval tunnels and WWII tunnels have limited access for wheelchair users. The grounds are extensive with some slopes. English Heritage provides accessibility guides in advance.'
    },
    events: [
      { month: 'APR', day: '12', name: 'Easter Medieval Fair', desc: 'Knights, jesters, and medieval craftspeople bring the castle to life over the Easter weekend.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '20', name: 'Dover Castle Proms', desc: 'Open-air classical concert in the castle grounds with fireworks finale.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'AUG', day: '15', name: 'WWII Weekend', desc: 'Living history event recreating wartime life in the tunnels and grounds. Meet re-enactors in period uniform.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'OCT', day: '28', name: 'Halloween in the Tunnels', desc: 'After-dark tours of the WWII tunnels with a spooky twist. Not suitable for young children.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' }
    ]
  },

  "Stirling Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Stirling Station', detail: 'Regular trains from Edinburgh (50 min), Glasgow (30 min), and Perth. 15 min uphill walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Stirling+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Esplanade Parking', detail: 'Pay & display at the Esplanade and in Stirling town. Limited spaces near the castle.' },
      { icon: '🚌', name: 'Stirling Buses', detail: 'First Bus services from the city centre. The castle is well signed from the bus station.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '📐', text: 'Steep Approach', cls: 'amber' },
        { icon: '🚶', text: 'Cobbled Surfaces', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚗', text: 'Disabled Parking at Top', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The approach is steep but disabled visitors can drive to the castle esplanade. Once inside, most rooms in the Royal Palace are accessible. The Great Hall has step-free access. Some rampart walks involve steps. Wheelchairs available free of charge.'
    },
    events: [
      { month: 'APR', day: '5', name: 'Easter at the Castle', desc: 'Family-friendly activities including costumed characters, crafts, and historical games.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '14', name: 'Stirling Castle Concerts', desc: 'Summer concert series on the Esplanade featuring Scottish and international artists.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'AUG', day: '20', name: 'Bannockburn Live', desc: 'Anniversary commemorations of the Battle of Bannockburn with re-enactments near the castle.', badge: 'special', badgeText: 'SPECIAL', meta: 'Various events' }
    ]
  },

  "Blarney Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Cork City', detail: 'Bus Éireann route 215 from Cork Bus Station (20 min). Runs every 30 minutes.', link: 'https://www.google.com/maps/dir/?api=1&destination=Blarney+Castle&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large car park at the castle entrance. €6 per car. Usually space available.' },
      { icon: '🚂', name: 'Cork Kent Station', detail: 'Main station for Cork city. Irish Rail from Dublin (2.5 hrs). Then bus 215 to Blarney.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Steep Spiral Stairs', cls: 'red' },
        { icon: '🚶', text: 'Garden Paths Paved', cls: 'green' },
        { icon: '👟', text: 'Sturdy Footwear Advised', cls: 'amber' },
        { icon: '💺', text: 'Gardens Seating', cls: 'green' },
        { icon: '👶', text: 'Gardens Buggy Friendly', cls: 'green' }
      ],
      note: 'Kissing the Blarney Stone requires climbing 127 narrow spiral steps — not accessible for wheelchair users or those with mobility issues. The extensive gardens and grounds are mostly accessible with paved paths. The Poison Garden and Fern Garden are on level ground.'
    },
    events: [
      { month: 'MAR', day: '17', name: 'St Patrick\'s Day at Blarney', desc: 'Special celebrations with live traditional music and the castle grounds decorated in green.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'JUN', day: '21', name: 'Midsummer at Blarney', desc: 'Extended opening hours for the longest day. Twilight tours of the gardens.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'DEC', day: '8', name: 'Christmas at Blarney', desc: 'Festive market in the stable yard with local crafts and food. The gardens illuminated.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets for lights' }
    ]
  },

  "Leeds Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Bearsted Station', detail: 'Southeastern trains from London Victoria (1 hr). Free shuttle bus from station to castle (seasonal).', link: 'https://www.google.com/maps/dir/?api=1&destination=Bearsted+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large free car park for visitors. Well signed from M20 Junction 8.' },
      { icon: '🚌', name: 'Arriva Bus 13', detail: 'Runs from Maidstone town centre. Check seasonal timetable.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved & Gravel Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🏛️', text: 'Some Stairs Inside', cls: 'amber' }
      ],
      note: 'The grounds and gardens are largely flat and accessible. The castle interior has some stairs but ground floors are accessible. The maze and grotto are accessible. Mobility scooters and wheelchairs available to hire. Dog friendly in grounds.'
    },
    events: [
      { month: 'APR', day: '6', name: 'Leeds Castle Festival of Flowers', desc: 'Stunning floral displays throughout the castle rooms and gardens.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'JUL', day: '13', name: 'Leeds Castle Classical Concert', desc: 'Open-air classical concert on the castle lawns with fireworks over the lake.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £40' },
      { month: 'AUG', day: '25', name: 'Triathlon & Sporting Events', desc: 'The castle hosts various sporting events including a triathlon using the lake and grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Registration required' },
      { month: 'NOV', day: '15', name: 'Leeds Castle Christmas', desc: 'The castle transformed for Christmas with lights trail, market, and Santa\'s grotto.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Bodiam Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Robertsbridge Station', detail: 'Southeastern trains from London Charing Cross (75 min). Castle is 5 miles — taxi or cycle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Robertsbridge+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚂', name: 'Kent & East Sussex Railway', detail: 'Heritage steam railway from Tenterden stops at Bodiam station, right by the castle. Seasonal service.' },
      { icon: '🅿️', name: 'National Trust Car Park', detail: 'Free for NT members. £5 for non-members. Small car park that fills quickly in summer.' }
    ],
    terrain: {
      chips: [
        { icon: '🚶', text: 'Mostly Flat', cls: 'green' },
        { icon: '⚠️', text: 'Uneven Interior', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Grounds', cls: 'green' },
        { icon: '🏛️', text: 'Spiral Stairs in Tower', cls: 'amber' }
      ],
      note: 'The approach and exterior are flat and accessible. The interior is a ruin with uneven ground, steps, and narrow passages. Only one tower can be climbed (spiral stairs). The moat walk is flat and accessible. Not fully wheelchair accessible inside the castle walls.'
    },
    events: [
      { month: 'APR', day: '14', name: 'Easter Egg Trail', desc: 'National Trust Easter trail around the castle grounds with chocolate prizes.', badge: 'family', badgeText: 'FAMILY', meta: 'Small charge' },
      { month: 'AUG', day: '5', name: 'Medieval Summer', desc: 'Living history encampment with medieval crafts, archery, and cooking demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Tintagel Castle": {
    gettingThere: [
      { icon: '🅿️', name: 'Village Car Park', detail: 'Car park in Tintagel village (10 min walk). £4.50/day. Castle is a further steep walk down to the headland.' },
      { icon: '🚌', name: 'Bus from Camelford', detail: 'Western Greyhound route 594 from Camelford. Limited service — check timetable in advance.' },
      { icon: '🚂', name: 'Bodmin Parkway Station', detail: 'Nearest main station (25 miles). GWR trains from London Paddington. Car or taxi needed from station.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Very Steep Cliffs', cls: 'red' },
        { icon: '⚠️', text: 'Uneven & Exposed', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear Essential', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed to Weather', cls: 'amber' },
        { icon: '🆕', text: 'New Footbridge', cls: 'green' }
      ],
      note: 'This is a clifftop ruin with very steep paths and many steps. The new footbridge connecting the headland to the mainland is spectacular but involves significant elevation changes. Not suitable for wheelchairs. Beach accessible via steep path. Allow 2+ hours.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Arthurian Festival', desc: 'Celebrating the legendary links with King Arthur. Storytelling, performances, and living history.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Summer Living History', desc: 'English Heritage re-enactors bring the castle\'s medieval past to life with demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Conwy Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Conwy Station', detail: 'Transport for Wales from Llandudno Junction (3 min) or direct from Chester. 5 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Conwy+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Town Centre Car Parks', detail: 'Pay & display car parks on the quayside and at Vicarage Gardens. No parking at the castle itself.' },
      { icon: '🚌', name: 'Arriva Bus Services', detail: 'Route 5 from Llandudno and Bangor stops in Conwy town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Battlements', cls: 'amber' }
      ],
      note: 'The castle involves significant stair climbing to access towers and battlements. Ground level areas are accessible but the real experience is on the walls. Not wheelchair accessible beyond the courtyard. Spectacular views from the top but not for those with vertigo.'
    },
    events: [
      { month: 'MAY', day: '26', name: 'Conwy Medieval Festival', desc: 'The town and castle host a medieval festival with re-enactments, market, and street performances.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free entry to town events' },
      { month: 'OCT', day: '26', name: 'Conwy Halloween', desc: 'Spooky activities in and around the castle. Trick-or-treat trail through the town walls.', badge: 'family', badgeText: 'FAMILY', meta: 'Various prices' }
    ]
  },

  "Caernarfon Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Caernarfon Bus Station', detail: 'Regular buses from Bangor (25 min) where you can connect to trains. Bus station is 5 min walk to castle.' },
      { icon: '🅿️', name: 'Slate Quay Car Park', detail: 'Large car park adjacent to the castle on the waterfront. Pay & display.' },
      { icon: '🚂', name: 'Bangor Station', detail: 'Nearest mainline station (9 miles). Transport for Wales from Chester and Holyhead. Bus to Caernarfon.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '📐', text: 'Tower Stairs Steep', cls: 'amber' },
        { icon: '🚶', text: 'Paved Courtyard', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🏛️', text: 'Museum Accessible', cls: 'green' }
      ],
      note: 'The courtyard and Royal Welsh Fusiliers Museum are accessible. The wall walks and towers require climbing many spiral stairs. The Eagle Tower has 159 steps. Cadw provides accessibility information in advance.'
    },
    events: [
      { month: 'JUL', day: '12', name: 'Caernarfon Food Festival', desc: 'Food festival in the castle grounds celebrating Welsh produce and street food.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry' },
      { month: 'AUG', day: '3', name: 'Mediaeval Day', desc: 'Living history event with medieval re-enactors, archery, and craft demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Harlech Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Harlech Station', detail: 'Transport for Wales Cambrian Coast line. Scenic route from Machynlleth or Pwllheli. 10 min steep walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Harlech+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Beach Road Car Park', detail: 'Car parks in the village. The castle approach from the town is steep.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Very Steep Site', cls: 'red' },
        { icon: '⚠️', text: 'Many Steps', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Position', cls: 'amber' }
      ],
      note: 'Built on a high rock, Harlech has very steep approaches from all directions. The modern bridge entrance helps but the castle interior has many levels and stairs. Limited wheelchair access to courtyard only. Stunning views of Snowdonia and Cardigan Bay from the top.'
    },
    events: [
      { month: 'JUL', day: '18', name: 'Harlech Medieval Re-enactment', desc: 'Cadw living history event with costumed interpreters bringing the castle\'s siege history to life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Bamburgh Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Chathill Station', detail: 'LNER East Coast Main Line request stop (5 miles from castle). Very limited service — check timetable.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free car park at the castle. Additional parking on the village green.' },
      { icon: '🚌', name: 'Arriva Bus X18', detail: 'From Alnwick and Berwick-upon-Tweed. Stops in Bamburgh village, 5 min walk to castle.' },
      { icon: '🚗', name: 'By Car', detail: 'Off the B1342, signed from the A1. About 50 miles north of Newcastle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '📐', text: 'Hilltop Position', cls: 'amber' },
        { icon: '🚶', text: 'Paved Paths Inside', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'The castle is on a basalt outcrop with a steep approach. Once inside, the ground floor rooms including the Armstrong Museum are accessible. Upper floors require stairs. The beach below is accessible from the village. Assistance dogs welcome.'
    },
    events: [
      { month: 'JUN', day: '22', name: 'Bamburgh Castle Fair', desc: 'Annual summer fair with local crafts, food, and entertainment in the castle grounds.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'AUG', day: '16', name: 'Living History Weekend', desc: 'Vikings, Normans, and medieval re-enactors set up camp in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'DEC', day: '7', name: 'Christmas at Bamburgh', desc: 'Festive decorations, winter market, and seasonal events in the state rooms.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' }
    ]
  },

  "Dunnottar Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Stonehaven Station', detail: 'ScotRail from Aberdeen (15 min) or Dundee. Castle is 2 miles south — 30 min walk along coastal path.', link: 'https://www.google.com/maps/dir/?api=1&destination=Stonehaven+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small car park off the A92 (signed). Free. 15 min walk from car park to castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'Signed from the A92 south of Stonehaven. 15 miles south of Aberdeen.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Very Steep Cliff Path', cls: 'red' },
        { icon: '⚠️', text: 'Uneven & Rocky', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear Essential', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' }
      ],
      note: 'Dramatic clifftop ruin accessible only by a steep, narrow path with many uneven steps cut into the rock. Not accessible for wheelchair users or those with significant mobility issues. The path descends steeply then climbs to the headland. Allow 30 minutes for the walk. Spectacular but demanding.'
    },
    events: []
  },

  "Glamis Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dundee Station', detail: 'ScotRail from Edinburgh (1 hr 15) or Aberdeen (1 hr 15). Glamis is 12 miles north — taxi needed.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking in the castle grounds.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A94 between Dundee and Forfar. Well signed.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Garden Paths Good', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'The castle tour involves climbing stairs between floors. Ground floor rooms and the Italian Garden are accessible. The extensive grounds have mostly good paths. Birthplace of Princess Margaret and childhood home of the Queen Mother.'
    },
    events: [
      { month: 'JUN', day: '28', name: 'Glamis Proms', desc: 'Outdoor classical concert in the castle grounds with fireworks finale.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £35' },
      { month: 'JUL', day: '20', name: 'Glamis Vintage Rally', desc: 'Vintage vehicles, classic tractors, and steam engines in the castle grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'DEC', day: '1', name: 'Glamis Christmas', desc: 'The castle decorated for Christmas with markets and Santa\'s grotto.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' }
    ]
  },

  "Balmoral Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Aberdeen Station', detail: 'ScotRail from Edinburgh or Inverness. Balmoral is 50 miles west — car essential.' },
      { icon: '🅿️', name: 'Estate Car Park', detail: 'Free parking at the visitor centre. Well signed from the A93.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A93 between Ballater and Braemar. About 1 hour from Aberdeen.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Grounds Accessible', cls: 'green' },
        { icon: '🚶', text: 'Garden Paths Good', cls: 'green' },
        { icon: '💺', text: 'Seating in Gardens', cls: 'green' },
        { icon: '🏠', text: 'Ballroom Only Inside', cls: 'amber' }
      ],
      note: 'Only the ballroom and grounds are open to the public (when the Royal Family is not in residence, typically April-July). The grounds are mostly accessible with good paths. The castle exhibitions are on one level. Estate walks vary in difficulty.'
    },
    events: [
      { month: 'APR', day: '1', name: 'Spring Opening', desc: 'The castle and grounds open for the season. Exhibitions in the ballroom change annually.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Admission charge' },
      { month: 'MAY', day: '18', name: 'Balmoral Highland Games', desc: 'Traditional Scottish highland games on the estate with caber tossing and Highland dancing.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' }
    ]
  },

  "Eilean Donan Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A87 at Dornie, between Kyle of Lochalsh and Inverness. About 1 hour from Inverness.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free visitor car park at the castle. Can be busy in summer.' },
      { icon: '🚌', name: 'Citylink Bus', detail: 'Glasgow/Inverness to Skye bus stops at Dornie. Limited service.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steps to Enter', cls: 'amber' },
        { icon: '🚶', text: 'Bridge Approach', cls: 'green' },
        { icon: '🏛️', text: 'Stairs Inside', cls: 'amber' },
        { icon: '💺', text: 'Café Seating', cls: 'green' }
      ],
      note: 'Access is via a stone bridge and there are steps to enter the castle. The interior involves narrow stairs between levels. Not wheelchair accessible inside. The exterior and bridge are the iconic photo spot. Visitor centre and café are accessible.'
    },
    events: [
      { month: 'MAY', day: '24', name: 'Eilean Donan Anniversary', desc: 'Celebrating the castle\'s restoration with special tours and talks about the Macrae clan history.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' }
    ]
  },

  "Dunluce Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A2 Causeway Coastal Route between Portrush and Bushmills. Well signed.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small car park at the entrance. Free.' },
      { icon: '🚌', name: 'Ulsterbus 172', detail: 'Coleraine to Ballycastle route stops near the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Clifftop Position', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' }
      ],
      note: 'Dramatic clifftop ruin with uneven surfaces and some steep paths. Limited accessibility for wheelchair users. The outer ward is accessible but the main castle ruins involve steps and uneven ground. Spectacular Antrim Coast location.'
    },
    events: []
  },

  "Kilkenny Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Kilkenny MacDonagh Station', detail: 'Irish Rail from Dublin Heuston (1 hr 40 min). 15 min walk to castle through the town.', link: 'https://www.google.com/maps/dir/?api=1&destination=Kilkenny+MacDonagh+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚌', name: 'Bus Éireann', detail: 'Regular services from Dublin, Cork, and Waterford to Kilkenny bus stop.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Pay & display parking in Kilkenny town. The Parade car park is closest to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' }
      ],
      note: 'Kilkenny Castle is well maintained and largely accessible. The parkland is flat with good paths. The castle interior has lift access to the picture gallery. OPW provides guided tours. Free admission.'
    },
    events: [
      { month: 'AUG', day: '10', name: 'Kilkenny Arts Festival', desc: 'Annual arts festival using the castle as a venue for concerts, theatre, and visual arts.', badge: 'concert', badgeText: 'CONCERT', meta: 'Various ticket prices' },
      { month: 'JUN', day: '14', name: 'Cat Laughs Comedy Festival', desc: 'International comedy festival with events in the castle grounds.', badge: 'concert', badgeText: 'CONCERT', meta: 'Various prices' },
      { month: 'DEC', day: '5', name: 'Yulefest Kilkenny', desc: 'Christmas festival with the castle as centrepiece. Markets, lights, and family activities.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry to grounds' }
    ]
  },

  "Rock of Cashel": {
    gettingThere: [
      { icon: '🚌', name: 'Bus Éireann', detail: 'Regular Dublin-Cork buses stop at Cashel town (2 hrs from Dublin). 10 min walk uphill to Rock.', link: 'https://www.google.com/maps/dir/?api=1&destination=Rock+of+Cashel&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Free parking in Cashel town. The approach to the Rock is steep from all sides.' },
      { icon: '🚗', name: 'By Car', detail: 'Just off the M8 motorway between Dublin and Cork. Well signed from the motorway.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Hilltop', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Interior', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Position', cls: 'amber' },
        { icon: '🚻', text: 'Toilets at Base', cls: 'green' }
      ],
      note: 'The Rock sits on a limestone outcrop with a steep path to the top. The ruins have uneven floors and some areas with steps. A new boardwalk improves access somewhat but the site is not fully wheelchair accessible. Spectacular 360-degree views from the top. Allow 1-2 hours.'
    },
    events: [
      { month: 'JUN', day: '16', name: 'Bloomsday at Cashel', desc: 'Literary events celebrating James Joyce with readings and performances at the Rock.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free' },
      { month: 'SEP', day: '14', name: 'Heritage Week', desc: 'Special guided tours and talks about the Rock\'s history during national Heritage Week.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free' }
    ]
  },

  "Trim Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Dublin', detail: 'Bus Éireann route 111 from Dublin Busáras (1 hr 15 min). Stops in Trim town centre, 5 min walk.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Free parking in Trim town. Car park near the castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'About 45 km northwest of Dublin on the R154. Well signed from the M3.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs in Keep', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🚶', text: 'Grounds Mostly Flat', cls: 'green' }
      ],
      note: 'The largest Anglo-Norman castle in Ireland. The grounds are accessible but the keep interior (guided tour only) involves steep narrow stairs. Used as a filming location for Braveheart. The town walk along the Boyne is flat and pleasant.'
    },
    events: [
      { month: 'JUN', day: '20', name: 'Trim Castle Medieval Festival', desc: 'Re-enactments, medieval market, and living history in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free entry to grounds' },
      { month: 'SEP', day: '8', name: 'Heritage Week Tours', desc: 'Special OPW tours exploring parts of the castle not usually accessible.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free — booking required' }
    ]
  },

  "Cardiff Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Cardiff Central Station', detail: 'GWR from London Paddington (2 hrs). Transport for Wales from across Wales. 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Cardiff+Central+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚌', name: 'Cardiff Bus', detail: 'The castle is in the city centre. Most bus routes pass nearby on Castle Street.' },
      { icon: '🅿️', name: 'City Centre Parking', detail: 'NCP car parks nearby including North Edward Street. Castle has no dedicated parking.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Grounds Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '📐', text: 'Keep on Motte', cls: 'amber' },
        { icon: '🏛️', text: 'Castle Apartments: Stairs', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The grounds and wartime tunnels are accessible. The ornate Victorian Gothic apartments involve stairs. The Norman keep on its motte has steep steps. Audio tours available. The Interpretation Centre is fully accessible.'
    },
    events: [
      { month: 'MAY', day: '30', name: 'Cardiff Castle Food Festival', desc: 'Street food traders and local producers set up in the castle grounds.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry' },
      { month: 'AUG', day: '1', name: 'Summer Concert Series', desc: 'Major music acts perform in the castle grounds. Past performers include Stereophonics and Manic Street Preachers.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'NOV', day: '15', name: 'Cardiff Castle Christmas', desc: 'Winter wonderland in the castle grounds with ice rink, market, and festive shows.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Various prices' }
    ]
  },

  "Caerphilly Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Caerphilly Station', detail: 'Transport for Wales from Cardiff (20 min). Frequent service. 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Caerphilly+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Caerphilly town centre. Short walk to the castle.' },
      { icon: '🚌', name: 'Stagecoach Buses', detail: 'Regular services from Cardiff city centre.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat Inner Ward', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Tower Stairs', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The second largest castle in Britain after Windsor. The inner ward is flat and accessible. The leaning tower and wall walks involve stairs. The extensive water defences can be viewed from accessible paths. Cadw managed.'
    },
    events: [
      { month: 'JUL', day: '6', name: 'Big Cheese Festival', desc: 'Massive free festival with re-enactments, music, and entertainment in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free' },
      { month: 'AUG', day: '24', name: 'Medieval Summer', desc: 'Cadw living history events with knights, archery, and medieval crafts.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Arundel Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Arundel Station', detail: 'Southern trains from London Victoria (90 min). 10 min walk uphill to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Arundel+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'On-site parking available (charge applies). Also town centre car parks.' },
      { icon: '🚌', name: 'Stagecoach 85', detail: 'Connects Arundel with Worthing and Chichester.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '📐', text: 'Hilltop Location', cls: 'amber' },
        { icon: '🚶', text: 'Gardens: Good Paths', cls: 'green' },
        { icon: '🏛️', text: 'Stairs Inside', cls: 'amber' },
        { icon: '💺', text: 'Seating in Gardens', cls: 'green' }
      ],
      note: 'The castle is on a hilltop with a steep approach. Some ground floor rooms are accessible but much of the castle involves stairs. The gardens, including the Collector Earl\'s Garden, have good paths. Still home to the Duke of Norfolk.'
    },
    events: [
      { month: 'APR', day: '20', name: 'Tulip Festival', desc: 'Over 60,000 tulips in bloom across the castle gardens. Photography is spectacular.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'JUN', day: '22', name: 'Jousting & Medieval Tournament', desc: 'Knights in armour compete in the tiltyard. One of England\'s premier jousting events.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Castle Siege!', desc: 'Re-enactment of a medieval siege with trebuchets, battering rams, and costumed soldiers.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'DEC', day: '1', name: 'Christmas at Arundel', desc: 'The castle decorated for Christmas with themed rooms and seasonal entertainment.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' }
    ]
  },

  "Hever Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Hever Station', detail: 'Southern trains from London Bridge (45 min, change at Oxted). Small station, 1 mile walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Hever+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large free car park at the castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'Signed from the B2026 near Edenbridge. About 30 miles south of London.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Gardens Accessible', cls: 'green' },
        { icon: '🚶', text: 'Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Castle: Some Stairs', cls: 'amber' }
      ],
      note: 'The extensive gardens including the Italian Garden, Tudor Garden, and Water Maze are largely accessible. The castle interior has some stairs between floors. Wheelchair access to ground floor rooms. Anne Boleyn\'s childhood home.'
    },
    events: [
      { month: 'FEB', day: '14', name: 'Valentine\'s at Hever', desc: 'Romantic evening events in the castle with candlelit tours.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'JUN', day: '28', name: 'Jousting Tournament', desc: 'Knights compete in the tournament field. One of the best jousting events in England.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '15', name: 'Open Air Theatre', desc: 'Shakespeare and other productions performed on the castle lawns.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'DEC', day: '1', name: 'Christmas at Hever', desc: 'Magical Christmas experience with themed rooms, Santa\'s grotto, and a Christmas market.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Highclere Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Newbury Station', detail: 'GWR from London Paddington (55 min). Castle is 5 miles south — taxi needed (no public transport).', link: 'https://www.google.com/maps/dir/?api=1&destination=Newbury+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Parking', detail: 'Free parking in the castle grounds on open days.' },
      { icon: '🚗', name: 'By Car', detail: 'Signed from the A34. Between Newbury and Whitchurch in Hampshire.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Gardens: Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'Famous as the real Downton Abbey. Open on limited dates — booking essential. Ground floor State Rooms are accessible. The Egyptian Exhibition in the cellar has step-free access. Gardens are mostly accessible. Upper floors involve stairs.'
    },
    events: [
      { month: 'JUL', day: '12', name: 'Highclere Castle Summer', desc: 'Summer opening with tours of the State Rooms and Egyptian Exhibition.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Tickets from £26' },
      { month: 'SEP', day: '21', name: 'Downton Abbey Themed Days', desc: 'Special themed tours celebrating the Downton Abbey connection with costumed guides.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'DEC', day: '5', name: 'Christmas at Highclere', desc: 'The castle decorated for a Victorian Christmas. Extremely popular — sells out months ahead.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Tickets from £75' }
    ]
  },

  "Alnwick Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Alnmouth Station', detail: 'LNER from London King\'s Cross (3 hrs) or Newcastle (25 min). Castle is 4 miles — bus or taxi.', link: 'https://www.google.com/maps/dir/?api=1&destination=Alnmouth+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large car park at the castle. Free for visitors.' },
      { icon: '🚌', name: 'Arriva Bus X15/X18', detail: 'From Newcastle and Berwick. Stops in Alnwick town centre, 5 min walk.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '👶', text: 'Very Family Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Some Stairs Inside', cls: 'amber' }
      ],
      note: 'Famous as Hogwarts in Harry Potter. The State Rooms are accessible via lift. Grounds are largely flat and paved. The Alnwick Garden next door is fully accessible. Broomstick training and dragon activities for children. Combined tickets available.'
    },
    events: [
      { month: 'APR', day: '5', name: 'Easter at Alnwick', desc: 'Harry Potter themed Easter activities including broomstick training and dragon quests.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '28', name: 'Harry Potter Celebration', desc: 'Special Harry Potter themed events with wand combat, potions classes, and Quidditch.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'AUG', day: '15', name: 'Medieval Alnwick', desc: 'Knights, jesters, and medieval entertainers throughout the castle. Jousting in the grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'OCT', day: '25', name: 'Halloween at Alnwick', desc: 'Broomstick training gets spooky! Pumpkin carving and Halloween trails.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Kenilworth Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Kenilworth Station', detail: 'West Midlands Railway from Coventry (7 min) or Leamington Spa (12 min). 15 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'English Heritage car park at the castle. Free for members.' },
      { icon: '🚌', name: 'Stagecoach 16', detail: 'From Coventry and Leamington Spa. Stops near the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '🚶', text: 'Grounds Mostly Flat', cls: 'green' },
        { icon: '⚠️', text: 'Uneven Ruin Interior', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Gardens', cls: 'green' },
        { icon: '🌿', text: 'Elizabethan Garden', cls: 'green' }
      ],
      note: 'The Elizabethan Garden has been beautifully restored and is accessible. The ruined castle interior has uneven surfaces and some steps. The Great Hall and Leicester\'s Building are impressive ruins. The mere (lake) was partially restored. English Heritage site.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Elizabethan Garden Party', desc: 'Costumed interpreters recreate Robert Dudley\'s famous entertainment for Elizabeth I.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Medieval Festival', desc: 'Living history encampment with combat displays, archery, and craft demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Corfe Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Corfe Castle Station', detail: 'Swanage Railway heritage steam train from Norden or Swanage. Seasonal service. Station in village.', link: 'https://www.google.com/maps/dir/?api=1&destination=Corfe+Castle+Station&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🅿️', name: 'National Trust Car Park', detail: 'Car park in the village. Free for NT members. Also parking at Norden Park & Ride.' },
      { icon: '🚌', name: 'Purbeck Breezer 40', detail: 'From Poole and Swanage. Stops in Corfe Castle village.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Hill', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ruins', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Hilltop', cls: 'amber' }
      ],
      note: 'The castle ruins sit dramatically on a hill above the village. The path up is steep and the interior is very uneven with rubble and broken walls. Not wheelchair accessible. The village below has the famous gap in the Purbeck Hills. Allow 1-2 hours. National Trust.'
    },
    events: [
      { month: 'APR', day: '14', name: 'NT Easter Trail', desc: 'Easter egg trail through the castle grounds for families.', badge: 'family', badgeText: 'FAMILY', meta: 'Small charge' },
      { month: 'OCT', day: '31', name: 'Corfe Castle Halloween', desc: 'Pumpkin trail and spooky stories in the atmospheric ruins. Torch-lit evening tours.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' }
    ]
  },

  "Fountains Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Harrogate Station', detail: 'Northern trains from Leeds (35 min) or York (35 min). Abbey is 10 miles west — taxi needed.' },
      { icon: '🅿️', name: 'Visitor Centre Car Park', detail: 'Large NT car park at the visitor centre. Free for members. Well signed from B6265.' },
      { icon: '🚗', name: 'By Car', detail: '4 miles west of Ripon off the B6265. Signed from Ripon and A1(M).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Mixed Paths', cls: 'amber' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Some Areas Buggy Friendly', cls: 'green' }
      ],
      note: 'The largest monastic ruin in England set in the Studley Royal Water Garden (UNESCO World Heritage Site). Some paths are uneven, especially around the abbey ruins. The water garden has better paths. Mobility vehicles available to borrow. The deer park is largely accessible.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Studley Royal Garden Festival', desc: 'Celebrating the 18th-century water garden with guided walks and garden talks.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'NOV', day: '20', name: 'Fountains Abbey Illuminated', desc: 'The abbey ruins lit with spectacular coloured floodlights. A magical winter evening experience.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'DEC', day: '1', name: 'Christmas at Fountains', desc: 'The illuminations continue alongside festive craft activities and seasonal food.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Whitby Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Whitby Station', detail: 'Northern trains from Middlesbrough (90 min, scenic Esk Valley line). Abbey is 15 min walk uphill.', link: 'https://www.google.com/maps/dir/?api=1&destination=Whitby+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'English Heritage car park near the abbey (charge). Also town centre car parks.' },
      { icon: '🚌', name: 'Coastliner 840', detail: 'From Leeds via York and Pickering (3.5 hrs). Stops in Whitby town.' },
      { icon: '🚗', name: 'By Car', detail: 'A171 from Scarborough or Middlesbrough. Parking can be difficult in summer.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: '199 Steps to Abbey', cls: 'red' },
        { icon: '⚠️', text: 'Uneven Ruin', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'The famous 199 steps climb from the town to the abbey headland (or drive to the car park at the top). The ruins are exposed to sea winds and have uneven surfaces. Not wheelchair accessible inside the ruins. The headland car park allows views without climbing. Inspiration for Bram Stoker\'s Dracula.'
    },
    events: [
      { month: 'APR', day: '26', name: 'Whitby Goth Weekend', desc: 'The town\'s famous gothic festival centres around the abbey. Music, markets, and dramatic costumes.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to attend' },
      { month: 'OCT', day: '25', name: 'Whitby Goth Weekend (Autumn)', desc: 'The second annual goth weekend. The abbey is especially atmospheric in autumn mist.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to attend' },
      { month: 'AUG', day: '1', name: 'English Heritage Events', desc: 'Living history and costumed interpretation telling the story of St Hild\'s monastery.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Glastonbury Abbey": {
    gettingThere: [
      { icon: '🚌', name: 'First Bus 376/377', detail: 'From Wells (15 min) and Bristol (1 hr 15 min). Stops in Glastonbury town centre.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Several car parks in Glastonbury. The abbey is in the town centre.' },
      { icon: '🚂', name: 'Castle Cary Station', detail: 'GWR from London Paddington (1 hr 40 min). Glastonbury is 12 miles — taxi needed.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat Grass Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The abbey ruins are set in 36 acres of flat parkland. Paths are mostly grass but well maintained. Wheelchair accessible throughout the grounds. The museum and shop are accessible. Legendary burial site of King Arthur. Dogs welcome on leads.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Summer Solstice', desc: 'Special events for the longest day. Glastonbury has deep spiritual connections to the solstice.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Abbey Living History', desc: 'Monks and medieval characters bring the abbey\'s story to life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'DEC', day: '15', name: 'Christmas at the Abbey', desc: 'Carol services and candlelit events in the atmospheric ruins.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Booking advised' }
    ]
  },

  "Bolton Priory": {
    gettingThere: [
      { icon: '🚂', name: 'Skipton Station', detail: 'Northern trains from Leeds (40 min). Bolton Abbey is 6 miles east — taxi or Dalesbus.' },
      { icon: '🅿️', name: 'Bolton Abbey Car Park', detail: '£12 per car (includes access to the estate). Multiple car parks along the estate.' },
      { icon: '🚌', name: 'Dalesbus 74', detail: 'Seasonal service from Ilkley on Sundays and bank holidays.' }
    ],
    terrain: {
      chips: [
        { icon: '🚶', text: 'Riverside Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '⚠️', text: 'Some Uneven Ground', cls: 'amber' },
        { icon: '👶', text: 'Buggy Friendly (Main Paths)', cls: 'green' }
      ],
      note: 'Beautiful setting on the River Wharfe in the Yorkshire Dales. The priory ruins are on flat ground. The estate has extensive walks from easy riverside strolls to the challenging Strid gorge walk. The Strid is extremely dangerous — stay on marked paths.'
    },
    events: [
      { month: 'MAY', day: '5', name: 'Bolton Abbey Steam Gala', detail: 'The Embsay & Bolton Abbey Railway runs special steam services.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'OCT', day: '15', name: 'Autumn Colours Walk', desc: 'Guided walks through the estate\'s spectacular autumn foliage.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with estate admission' }
    ]
  },

  "Rievaulx Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Thirsk Station', detail: 'LNER from London King\'s Cross (2.5 hrs) or York (30 min). Abbey is 15 miles — taxi needed.' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'English Heritage car park at the abbey. Free for members.' },
      { icon: '🚗', name: 'By Car', detail: '2.5 miles west of Helmsley off the B1257. Well signed.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Gravel & Grass Paths', cls: 'green' },
        { icon: '⚠️', text: 'Uneven in Ruins', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'Set in a beautiful valley. The paths around the ruins are gravel and generally good. Inside the ruins the ground is uneven in places. The museum is accessible. Rievaulx Terrace (National Trust, separate site above) has spectacular views but steep access.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Living History Day', desc: 'Cistercian monks brought to life with costumed interpreters explaining monastic life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Tintern Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Chepstow Station', detail: 'GWR from Bristol/Newport. Tintern is 6 miles north — limited bus service or taxi.' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Cadw car park at the abbey. Also parking in the village.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A466 in the Wye Valley. Scenic drive from Chepstow or Monmouth.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat Site', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The abbey is on flat ground in the Wye Valley and is one of the most accessible large ruins. Paths around and within the ruins are generally good. The famous west window and nave are spectacular. Immortalised by Wordsworth and Turner. Cadw managed.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Summer Solstice at Tintern', desc: 'Special evening opening with the sun setting through the great west window.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' }
    ]
  },

  "Dunster Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dunster Station (WSR)', detail: 'West Somerset Heritage Railway from Bishops Lydeard. Seasonal steam service.' },
      { icon: '🅿️', name: 'NT Car Parks', detail: 'National Trust car parks in Dunster village and at the castle. Free for members.' },
      { icon: '🚗', name: 'By Car', detail: 'In Dunster village off the A39 near Minehead. Well signed from Minehead and the M5.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Hill to Castle', cls: 'amber' },
        { icon: '♿', text: 'Shuttle Available', cls: 'green' },
        { icon: '🚶', text: 'Castle Interior: Good', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'The castle is on a steep hill above the village. The National Trust runs a Land Rover shuttle for those with mobility issues. Once inside, the castle is well maintained with good access to main rooms. The subtropical garden is terraced and steep in places.'
    },
    events: [
      { month: 'DEC', day: '1', name: 'Dunster by Candlelight', desc: 'The famous annual event where the whole village is lit by candles and the castle opens at night.', badge: 'special', badgeText: 'SPECIAL', meta: 'Various events' },
      { month: 'AUG', day: '22', name: 'Summer Activities', desc: 'Family trails and activities in the castle and grounds during school holidays.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Castle Howard": {
    gettingThere: [
      { icon: '🚂', name: 'Malton Station', detail: 'TransPennine Express from York (20 min). Castle Howard is 6 miles — taxi needed.' },
      { icon: '🅿️', name: 'Estate Car Park', detail: 'Free parking in the grounds. Well signed from the A64.' },
      { icon: '🚌', name: 'Coastliner 181', detail: 'Seasonal service from York stops at the castle gate (summer only).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' }
      ],
      note: 'The house and gardens are well maintained and largely accessible. Wheelchair access to ground floor rooms. The gardens are extensive — a full tour is several miles. Buggies and wheelchairs welcome. Famous as Brideshead Revisited filming location.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Castle Howard Proms', desc: 'Open-air classical concert in the grounds with spectacular fireworks over the lake.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £45' },
      { month: 'AUG', day: '24', name: 'Summer in the Gardens', desc: 'Extended garden opening with special activities and guided tours.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'NOV', day: '15', name: 'Christmas at Castle Howard', desc: 'The house elaborately decorated with a different Christmas theme each year. Truly magical.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Lincoln Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Lincoln Central Station', detail: 'EMR from Nottingham (1 hr) or LNER from London King\'s Cross (2 hrs). 15 min uphill walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Lincoln+Central+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Hill Car Parks', detail: 'Several car parks near the castle. The Lawn complex is closest.' },
      { icon: '🚌', name: 'Walk n Ride', detail: 'Park & Ride services run from outside the city to the uphill area.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Wall Walk', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '📐', text: 'Steep Hill from City', cls: 'amber' }
      ],
      note: 'The castle itself is well maintained with an accessible wall walk and lift access to the Victorian prison. Houses one of four surviving copies of Magna Carta in a purpose-built vault. The approach from the city centre (Steep Hill) is very steep — consider driving up.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Magna Carta Festival', desc: 'Celebrating the castle\'s Magna Carta connection with living history and special exhibitions.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'DEC', day: '5', name: 'Lincoln Christmas Market', desc: 'One of England\'s best Christmas markets, held in the castle grounds and surrounding area.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry' }
    ]
  },

  "Pembroke Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Pembroke Station', detail: 'Transport for Wales from Swansea (2.5 hrs) or Tenby (30 min). 5 min walk to castle.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Car parks in Pembroke town. The castle is in the centre of town.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A4139. Well signed from the A477.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Many Stairs', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🚻', text: 'Toilets Available', cls: 'green' }
      ],
      note: 'Birthplace of Henry VII. The great round keep is impressive but involves a spiral staircase. The outer ward has uneven paths. The Wogan Cavern beneath the castle involves steep stairs. Not fully wheelchair accessible but the gatehouse exhibition is accessible.'
    },
    events: [
      { month: 'AUG', day: '3', name: 'Medieval Pembroke', desc: 'Knights, archery, and medieval living history in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'OCT', day: '26', name: 'Spooky Pembroke', desc: 'Halloween events in the castle with torch-lit tours and spooky stories.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' }
    ]
  },

  "Chepstow Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Chepstow Station', detail: 'GWR from Bristol Temple Meads (30 min) or Newport (20 min). 10 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Pay & display at the castle. Also town centre car parks.' },
      { icon: '🚗', name: 'By Car', detail: 'Just off the M48 at the Welsh end of the Severn Bridge.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Cliffside Position', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Limited Seating', cls: 'amber' }
      ],
      note: 'Built on cliffs above the River Wye. The oldest surviving post-Roman stone castle in Britain. Uneven ground throughout with some steep drops (fenced). The Great Tower is accessible but upper levels involve stairs. Cadw managed.'
    },
    events: [
      { month: 'JUL', day: '13', name: 'Chepstow Castle Medieval Fair', desc: 'Living history event with Norman and medieval re-enactors.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Raglan Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A40 between Abergavenny and Monmouth. Well signed. No public transport to the castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Cadw car park at the entrance. Free.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '📐', text: 'Stairs in Tower', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Accessible', cls: 'green' }
      ],
      note: 'A grand late medieval castle with the spectacular Great Tower (Yellow Tower of Gwent). The courtyard is relatively flat but the tower and wall walks involve stairs. Some uneven surfaces in the ruined areas. Cadw managed.'
    },
    events: [
      { month: 'AUG', day: '10', name: 'Medieval Living History', desc: 'Cadw events with costumed interpreters bringing Tudor life at Raglan to life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Ludlow Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Ludlow Station', detail: 'Transport for Wales from Shrewsbury (30 min) or Hereford (25 min). 10 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Pay & display in Ludlow town. Castle Square parking nearby.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A49 in south Shropshire. Well signed from the A49.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '📐', text: 'Stairs in Keep', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Grounds', cls: 'green' }
      ],
      note: 'A large and impressive castle ruin in the centre of Ludlow. The inner bailey has uneven ground and the keep involves spiral stairs. The outer bailey is more accessible. The round Chapel of St Mary Magdalene is unique in England. The castle grounds are used for major events.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Ludlow Festival', desc: 'Open-air Shakespeare performed in the castle\'s inner bailey. A summer tradition since 1960.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £20' },
      { month: 'SEP', day: '13', name: 'Ludlow Food Festival', desc: 'One of Britain\'s premier food festivals, held in the castle grounds.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' },
      { month: 'NOV', day: '29', name: 'Ludlow Medieval Christmas Fayre', desc: 'Medieval-themed Christmas market with jousting, jesters, and festive food.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Admission charge' }
    ]
  },

  "Stokesay Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Craven Arms Station', detail: 'Transport for Wales from Shrewsbury (20 min). Castle is 1 mile south — 15 min walk.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'English Heritage car park at the castle. Free for members.' },
      { icon: '🚗', name: 'By Car', detail: 'Off the A49 at Craven Arms in south Shropshire.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Flat', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Tower', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'The finest surviving 13th-century fortified manor house in England. The Great Hall is accessible and magnificent. The solar and tower involve stairs. The courtyard is flat. The timber-framed gatehouse is particularly photogenic.'
    },
    events: []
  },

  "Goodrich Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'Off the A40, 5 miles south of Ross-on-Wye. Well signed.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'English Heritage car park. Free for members.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '📐', text: 'Stairs Throughout', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'A splendid red sandstone castle ruin overlooking the Wye Valley. The keep and towers involve spiral stairs. Ground level areas have uneven surfaces. Not fully wheelchair accessible but the courtyard and Great Hall area are manageable.'
    },
    events: []
  },

  "Rochester Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Rochester Station', detail: 'Southeastern High Speed from London St Pancras (40 min). 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Rochester+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Blue Boar Lane Car Park', detail: 'Pay & display near the castle and cathedral.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs in Keep', cls: 'amber' },
        { icon: '⚠️', text: 'Narrow Passages', cls: 'amber' },
        { icon: '🚶', text: 'Castle Grounds Flat', cls: 'green' },
        { icon: '💺', text: 'Gardens Seating', cls: 'green' }
      ],
      note: 'The castle grounds are flat and accessible. The massive Norman keep is the main attraction but involves many steep narrow stairs. Views from the top are worth the climb but not accessible for wheelchair users. Adjacent to Rochester Cathedral.'
    },
    events: [
      { month: 'JUN', day: '7', name: 'Rochester Dickens Festival', desc: 'The town celebrates Charles Dickens with parades and events. The castle is a backdrop.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free' },
      { month: 'DEC', day: '6', name: 'Rochester Christmas Market', desc: 'Dickensian Christmas festival in the castle grounds and High Street.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free' }
    ]
  },

  "Scarborough Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Scarborough Station', detail: 'TransPennine Express from York (50 min). Castle is 20 min walk uphill through the town.' },
      { icon: '🅿️', name: 'Castle Road Car Park', detail: 'Pay & display on Castle Road, near the entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'Follow signs to the castle from the A64 or town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Headland', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'Dramatic headland position with steep approaches. The castle ruins are spread over a large area with uneven ground. The keep is a ruin and not climbable. Spectacular views along the coast. Not wheelchair accessible in the main ruin areas. English Heritage.'
    },
    events: [
      { month: 'AUG', day: '3', name: 'Scarborough Castle Siege', desc: 'Living history weekend recreating one of the castle\'s many sieges.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Skipton Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Skipton Station', detail: 'Northern trains from Leeds (40 min) or settle-Carlisle line. 5 min walk to castle.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Several car parks in Skipton. High Street is closest to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Courtyard Paved', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'One of the most complete and well-preserved medieval castles in England. The courtyard with its famous yew tree is accessible. The tour involves stairs to upper rooms. Lady Anne Clifford\'s restoration is remarkably intact. Private ownership — admission by tour.'
    },
    events: []
  },

  "Richmond Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Darlington', detail: 'Arriva route X26/X27 from Darlington rail station (40 min). Stops in Richmond Market Place.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Richmond. The castle is in the town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Keep: 100+ Steps', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Accessible', cls: 'green' },
        { icon: '🌬️', text: 'Exposed Battlements', cls: 'amber' }
      ],
      note: 'The great keep has over 100 steps to the top but the views over Swaledale are magnificent. The courtyard (Scotland\'s Hall) is accessible at ground level. One of the earliest stone castles in England. English Heritage.'
    },
    events: []
  },

  "Helmsley Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In Helmsley town centre off the A170. Well signed from the A19 and Thirsk.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Helmsley Market Place, very close to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Grounds', cls: 'green' }
      ],
      note: 'Atmospheric castle ruin in the charming market town. Uneven surfaces throughout. The keep area involves climbing. Good starting point for the Cleveland Way National Trail. English Heritage.'
    },
    events: []
  },

  "Middleham Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In Middleham village in Wensleydale. Off the A6108 between Leyburn and Masham.' },
      { icon: '🅿️', name: 'Village Parking', detail: 'Small car park in the village.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ruin', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '📐', text: 'Keep Stairs', cls: 'amber' }
      ],
      note: 'Childhood home of Richard III. The massive Norman keep is largely intact and can be explored. Stairs to upper levels. Surrounding ruins have uneven ground. Also known for its racehorse training stables in the village. English Heritage.'
    },
    events: []
  },

  "Pickering Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Pickering Station (NYMR)', detail: 'North Yorkshire Moors Railway heritage steam trains from Grosmont/Whitby. 10 min walk to castle.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Pickering town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '📐', text: 'Motte & Bailey: Steep', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'A classic motte-and-bailey castle. The motte is steep and grassy. The curtain wall and towers have uneven surfaces. The inner ward is more accessible. Check out the medieval wall paintings in St Peter and St Paul\'s Church nearby. English Heritage.'
    },
    events: [
      { month: 'OCT', day: '12', name: 'Pickering War Weekend', desc: 'WWII re-enactment weekend in the town, with the castle as a backdrop.', badge: 'special', badgeText: 'SPECIAL', meta: 'Various events' }
    ]
  },

  "Bolton Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In Castle Bolton village in Wensleydale. Off the A684 between Leyburn and Hawes.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs', cls: 'amber' },
        { icon: '⚠️', text: 'Partially Ruined', cls: 'amber' },
        { icon: '🚶', text: 'Garden Accessible', cls: 'green' },
        { icon: '💺', text: 'Tea Room', cls: 'green' }
      ],
      note: 'Where Mary Queen of Scots was imprisoned. The castle is partially ruined but several floors are accessible via stairs. The medieval garden is on level ground. The wild boar enclosure and bird of prey centre are accessible. Spectacular Wensleydale views.'
    },
    events: [
      { month: 'AUG', day: '18', name: 'Medieval Day at Bolton', desc: 'Living history with re-enactors, falconry displays, and archery.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Carlisle Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Carlisle Station', detail: 'Major rail hub. Avanti from London Euston (3.5 hrs), ScotRail from Glasgow/Edinburgh. 10 min walk.', link: 'https://www.google.com/maps/dir/?api=1&destination=Carlisle+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'City Centre Parking', detail: 'NCP and council car parks in Carlisle. The castle is in the city centre.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Flat', cls: 'green' },
        { icon: '🏛️', text: 'Keep Stairs', cls: 'amber' },
        { icon: '🚻', text: 'Toilets Available', cls: 'green' }
      ],
      note: 'The castle is still in military use (Cumbria\'s Museum of Military Life is inside). The outer ward and museum are accessible. The medieval keep involves stairs. The notorious \'licking stones\' in the dungeon can be visited. English Heritage.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Border Reivers Weekend', desc: 'Living history event celebrating the turbulent Border Reiver history.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' }
    ]
  },

  "Dunrobin Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dunrobin Castle Station', detail: 'ScotRail Far North Line (request stop, summer only). Station is at the castle gates.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A9, 1 mile north of Golspie in Sutherland. About 50 miles north of Inverness.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Garden Paths Good', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'Scotland\'s most northerly great house, resembling a French château. Ground floor rooms and the museum are accessible. The formal gardens (inspired by Versailles) are on terraces with steps between levels. Falconry displays daily in summer.'
    },
    events: [
      { month: 'JUL', day: '15', name: 'Falconry Display Season', desc: 'Daily falconry displays in the castle gardens throughout summer.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Urquhart Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A82 on the shore of Loch Ness, 2 miles east of Drumnadrochit.' },
      { icon: '🅿️', name: 'Visitor Centre Car Park', detail: 'Historic Scotland car park. Can be very busy in summer — arrive early.' },
      { icon: '🚌', name: 'Stagecoach 17', detail: 'Inverness to Drumnadrochit. From Drumnadrochit it\'s 2 miles to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Path Down', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ruin', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Lochside', cls: 'amber' }
      ],
      note: 'The visitor centre is at the top; the castle ruins are down a steep path to the loch shore. Not wheelchair accessible to the ruins themselves. The visitor centre and exhibition are accessible and have excellent views. One of the most photographed castles in Scotland. Keep an eye out for Nessie!'
    },
    events: []
  },

  "Cawdor Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the B9090, 5 miles south-west of Nairn. Signed from the A96.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Gardens Accessible', cls: 'green' },
        { icon: '🚶', text: 'Good Garden Paths', cls: 'green' },
        { icon: '🏛️', text: 'Stairs Inside Castle', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'Associated with Shakespeare\'s Macbeth, though the real Macbeth predates the castle. The three gardens are excellent and mostly accessible. The castle interior involves stairs between floors. Still a family home (Cawdor family).'
    },
    events: [
      { month: 'MAY', day: '1', name: 'Garden Opening Season', desc: 'The beautiful gardens open for the season with spring flowers at their peak.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' }
    ]
  },

  "Blair Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Blair Atholl Station', detail: 'ScotRail Highland Main Line from Perth or Inverness. Castle is 1 mile — walk or taxi.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking in the castle grounds.' },
      { icon: '🚗', name: 'By Car', detail: 'Off the A9 at Blair Atholl, between Perth and Inverness.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Grounds: Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating & Café', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'Home of the Atholl Highlanders (Europe\'s last private army). Ground floor rooms are accessible. The extensive grounds and deer park have good paths. Caravan park on site. Popular stop on the A9 route to the Highlands.'
    },
    events: [
      { month: 'MAY', day: '24', name: 'Atholl Highlanders Parade', desc: 'Annual parade of Europe\'s only remaining private army in the castle grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to watch' },
      { month: 'AUG', day: '24', name: 'Blair Castle Horse Trials', desc: 'International horse trials in the stunning castle grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' }
    ]
  },

  "Doune Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Stirling', detail: 'First Bus route 59 from Stirling (20 min). Stops in Doune village, 10 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small car park at the castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'In Doune village off the A84, 8 miles northwest of Stirling.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Stairs in Keep', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Courtyard', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'Famous as a filming location for Monty Python and the Holy Grail and Outlander. The courtyard is accessible but the keep and Great Hall involve stairs. The audio guide is narrated by Terry Jones. Historic Scotland managed.'
    },
    events: []
  },

  "Duart Castle": {
    gettingThere: [
      { icon: '⛴️', name: 'CalMac Ferry to Mull', detail: 'Ferry from Oban to Craignure (45 min). Castle is 3 miles from Craignure — taxi or seasonal shuttle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' },
      { icon: '🚗', name: 'On Mull', detail: 'From Craignure ferry terminal, follow the A849 towards Iona, then signed turn to Duart.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Clifftop Position', cls: 'amber' },
        { icon: '🏛️', text: 'Stairs Inside', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed to Weather', cls: 'amber' }
      ],
      note: 'Seat of Clan MacLean on a dramatic clifftop on the Isle of Mull. The castle interior involves stairs. Not fully wheelchair accessible. The views across the Sound of Mull to the mainland are spectacular. Open April-October.'
    },
    events: []
  }
};