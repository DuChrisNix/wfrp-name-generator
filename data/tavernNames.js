const verbs = [
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
  'geschlachtete',
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
  'Zeisig',
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

const dasWords = [
  'Hufeisen',
  'Pferd',
  'Ross',
  'Schild',
  'Wiesel',
  'Wildschwein',
];

const DER_LENGTH = derWords.length;
const DIE_LENGTH = dieWords.length;
const DAS_LENGTH = dasWords.length;
const DER_DIE_LENGTH = DER_LENGTH + DIE_LENGTH;
const DER_DIE_DAS_LENGTH = DER_DIE_LENGTH + DAS_LENGTH;

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const weightNumbers = () => {
  const allWordsRandom = getRandomInt(DER_DIE_DAS_LENGTH);

  if (allWordsRandom >= 0 && allWordsRandom < DER_LENGTH) {
    return getRandomInt(2) ? 0 : 3;
  }

  if (allWordsRandom >= DER_LENGTH && allWordsRandom < DER_DIE_LENGTH) {
    return getRandomInt(2) ? 1 : 4;
  }

  if (allWordsRandom >= DER_DIE_LENGTH && allWordsRandom < DER_DIE_DAS_LENGTH) {
    return getRandomInt(2) ? 2 : 5;
  }
};

export const generateTavernName = () => {
  const verbsRandom = getRandomInt(verbs.length);
  const derWordsRandom = getRandomInt(derWords.length);
  const dieWordsRandom = getRandomInt(dieWords.length);
  const dasWordsRandom = getRandomInt(dasWords.length);

  const verb = verbs[verbsRandom];
  const phraseRandom = weightNumbers();

  let name;
  let tavern;

  if (phraseRandom === 0) {
    name = derWords[derWordsRandom];
    tavern = `Der ${verb} ${name}`;
  }

  if (phraseRandom === 1) {
    name = dieWords[dieWordsRandom];
    tavern = `Die ${verb} ${name}`;
  }

  if (phraseRandom === 2) {
    name = dasWords[dasWordsRandom];
    tavern = `Das ${verb} ${name}`;
  }

  if (phraseRandom === 3) {
    name = derWords[derWordsRandom];
    tavern = `Zum ${verb}n ${name}`;
  }

  if (phraseRandom === 4) {
    name = dieWords[dieWordsRandom];
    tavern = `Zur ${verb}n ${name}`;
  }

  if (phraseRandom === 5) {
    name = dasWords[dasWordsRandom];
    tavern = `Zum ${verb}n ${name}`;
  }

  return tavern;
};
