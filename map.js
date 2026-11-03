/* Dagnar's map: a loose, hand-drawn Azeroth. Coordinates are 0-1000 x 0-700.
   Not to scale and not meant to be; it's a tavern map scratched on a table. */
window.DAGNAR_MAP = {
  continents: [
    { name: 'Eastern Kingdoms', path: 'M640,70 C690,60 740,80 760,120 C790,170 770,220 790,270 C810,330 850,370 830,430 C815,480 790,520 760,560 C730,600 700,640 660,650 C620,660 600,620 590,580 C575,530 560,480 570,430 C580,380 560,330 580,280 C600,230 590,170 610,120 C620,95 625,78 640,70 Z' },
    { name: 'Kalimdor', path: 'M230,60 C280,50 330,70 350,110 C370,150 360,200 380,250 C400,300 420,350 400,400 C380,450 340,480 320,530 C300,580 290,630 250,650 C210,660 180,620 170,570 C160,520 150,470 160,420 C170,370 150,320 160,270 C170,220 190,170 200,120 C205,95 210,70 230,60 Z' },
  ],
  zones: {
    // Eastern Kingdoms
    'Ironforge': [690, 300], 'Dun Morogh': [660, 330], 'Loch Modan': [740, 330], 'Wetlands': [720, 270],
    'Arathi Highlands': [720, 210], 'The Hinterlands': [770, 170], 'Hillsbrad Foothills': [700, 190],
    'Western Plaguelands': [720, 130], 'Eastern Plaguelands': [770, 110], 'Tirisfal Glades': [680, 100],
    'Silverpine Forest': [660, 150], 'Alterac Mountains': [690, 160], 'Badlands': [740, 400],
    'Searing Gorge': [690, 390], 'Burning Steppes': [700, 430], 'Blackrock Mountain': [695, 410],
    'Redridge Mountains': [730, 470], 'Elwynn Forest': [690, 480], 'Stormwind City': [670, 465],
    'Westfall': [650, 510], 'Duskwood': [690, 530], 'Deadwind Pass': [730, 520],
    'Swamp of Sorrows': [760, 500], 'Blasted Lands': [760, 560], 'Stranglethorn Vale': [670, 590],
    'Booty Bay': [660, 640], 'Blackrock Depths': [695, 415], 'Deeprun Tram': [680, 400],
    // Kalimdor
    'Teldrassil': [230, 70], 'Darnassus': [225, 60], 'Darkshore': [270, 120], 'Ashenvale': [300, 190],
    'Azshara': [370, 190], 'Felwood': [290, 130], 'Winterspring': [340, 110], 'Moonglade': [320, 140],
    'Stonetalon Mountains': [260, 250], 'Desolace': [230, 320], 'The Barrens': [330, 300],
    'Durotar': [400, 250], 'Orgrimmar': [405, 230], 'Mulgore': [270, 360], 'Thunder Bluff': [265, 350],
    'Dustwallow Marsh': [380, 380], 'Thousand Needles': [310, 420], 'Feralas': [230, 440],
    'Tanaris': [330, 520], "Un'Goro Crater": [280, 540], 'Silithus': [230, 590], 'Gadgetzan': [345, 505],
  },
  sea: ['M440,80 L560,80', 'M450,300 L560,300', 'M430,520 L560,520'],
};
