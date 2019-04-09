const verben = [
  'alte',
  'ängstliche',
  'arglose',
  'arme',
  'aufrechte',
  'ausgelassene',
  'barmherzige',
  'besessene',
  'besoffene',
  'betrunkene',
  'blaue',
  'blinde',
  'blinzelnde',
  'blutende',
  'blutige',
  'bucklige',
  'dicke',
  'dreckige',
  'dumme',
  'dürre',
  'durstige',
  'ehrliche',
  'einäugige',
  'einfältige',
  'einsame',
  'ertunkene',
  'fette',
  'fröhliche',
  'furchtlose',
  'furchtsame',
  'furzende',
  'geschlatete',
  'gerissene',
  'gesellige',
  'gewitzte',
  'grantige',
  'graue',
  'grinsende',
  'grosse',
  'grüne',
  'hässliche',
  'hängende',
  'heilige',
  'heitere',
  'hinkende',
  'höfliche',
  'humpelnde',
  'hungrige',
  'hüpfende',
  'hustende',
  'kleine',
  'komische',
  'kräftige',
  'kranke',
  'lächelnde',
  'lachende',
  'lahme',
  'lange',
  'letzte',
  'lustige',
  'magere',
  'müde',
  'mürrische',
  'mutige',
  'nasse',
  'nüchterne',
  'picklige',
  'redselige',
  'reiche',
  'rostige',
  'rote',
  'ruhige',
  'rülpsende',
  'schlafende',
  'schlampige',
  'schlaue',
  'schlitzohrige',
  'schmutzige',
  'schnelle',
  'schöne',
  'schwarze',
  'schweigsame',
  'singende',
  'springende',
  'stinkende',
  'störrische',
  'tanzende',
  'taube',
  'törichte',
  'torkelnde',
  'tote',
  'traurige',
  'trunkene',
  'vergnügte',
  'verschlafene',
  'verkrüppelte',
  'weiße',
  'wütende',
  'zornige',
  'zwinkernde',
];

const derWords = [
  'Abenteurer',
  'Bär',
  'Bauer',
  'Betrüger',
  'Bettler',
  'Dieb',
  'Esel',
  'Fallensteller',
  'Fälscher',
  'Feigling',
  'Fischer',
  'Gauner',
  'Geldeintreiber',
  'Glückspilz',
  'Halbling',
  'Halbmond',
  'Hammer Sigmars',
  'Hafenarbeiter',
  'Hehler',
  'Hengst',
  'Henker',
  'Heuchler',
  'Holzfäller',
  'Hund',
  'Hummer',
  'Greif',
  'Kapitän',
  'Kesselflicker',
  'Ketzer',
  'Knackschnabel',
  'Krieger',
  'Nachtwächter',
  'Mann',
  'Pechvogel',
  'Pirat',
  'Priester',
  'Pfennig',
  'Ritter',
  'Sattel',
  'Schilling',
  'Schmied',
  'Schmuggler',
  'Schwertmeister',
  'Seeman',
  'Soldat',
  'Söldner',
  'Steinmetz',
  'Steuermann',
  'Streuner',
  'Sünder',
  'Waffenschmied',
  'Wagen',
  'Wanderer',
  'Wirt',
  'Wolf',
  'Zimmermann',
  'Zwerg',
];

const dasWords = [
  'Hufeisen',
  'Pferd',
  'Ross',
  'Schild',
  'Wiesel',
  'Wildschwein',
];

const dieWords = [
  'Gräfin',
  'Fledermaus',
  'Kutsche',
  'Rast',
  'Ratte',
  'Wirtin',
  'Witwe',
  'Ziege',
];

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const der = () => {
  const verb = verben[Math.floor(Math.random() * verben.length)];
  const name = derWords[getRandomInt(derWords.length)];
  const taverne = `Der ${verb} ${name}`;

  return taverne;
};

const die = () => {
  const verb = verben[Math.floor(Math.random() * verben.length)];
  const name = dieWords[getRandomInt(dieWords.length)];
  const taverne = `Die ${verb} ${name}`;

  return taverne;
};

const das = () => {
  const verb = verben[Math.floor(Math.random() * verben.length)];
  const name = dasWords[getRandomInt(dasWords.length)];
  const taverne = `Das ${verb} ${name}`;

  return taverne;
};

const zum = () => {
  const verb = verben[Math.floor(Math.random() * verben.length)];
  const name = derWords[getRandomInt(derWords.length)];
  const taverne = `Zum ${verb}n ${name}`;

  return taverne;
};

const zur = () => {
  const verb = verben[Math.floor(Math.random() * verben.length)];
  const name = dieWords[getRandomInt(dieWords.length)];
  const taverne = `Zur ${verb}n ${name}`;

  return taverne;
};

export const generateTavernName = () => {
  const possibilities = [der(), die(), das(), zum(), zur()];

  return possibilities[getRandomInt(possibilities.length)];
};
