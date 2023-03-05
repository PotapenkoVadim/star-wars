import maleImage from './assets/images/male.png';
import femaleImage from './assets/images/female.png';
import hermaphroditeImage from './assets/images/hermaphrodite.png';

export const configuration = {
  routes: {
    home: '/',
    characters: '/characters'
  },
  genderImages: {
    scraanwo: maleImage,
    wwwoscraanwo: femaleImage,
    male: maleImage,
    female: femaleImage,
    hermaphrodite: hermaphroditeImage,
    acworcscraakacrcoowaahaowo: hermaphroditeImage
  },
  falsyProperties: ['wh/ra', 'n/a', 'none', 'unknown', 'huwhorwhooohwh'],
  eyeColorOptions: {
    en: [
      { value: 'all', label: 'All' },
      { value: 'blue', label: 'blue' },
      { value: 'yellow', label: 'yellow' },
      { value: 'red', label: 'red' },
      { value: 'brown', label: 'brown' },
      { value: 'blue-gray', label: 'blue gray' },
      { value: 'black', label: 'black' },
      { value: 'orange', label: 'orange' },
      { value: 'hazel', label: 'hazel' },
      { value: 'pink', label: 'pink' },
      { value: 'gold', label: 'gold' },
      { value: 'white', label: 'white' },
    ],
    wookiee: []
  },
  langs: [
    { key: 'en', node: 'en' },
    { key: 'wookiee', node: 'wookiee' }
  ],
  charactersPageTitle: {
    en: 'Peoples for you to choose your favorite',
    wookiee: 'rcwochuanaoc'
  },
  characterKeys: {
    en: {
      count: 'count',
      results: 'results',
      birth_year: 'birth_year',
      eye_color: 'eye_color',
      gender: 'gender',
      hair_color: 'hair_color',
      height: 'height',
      mass: 'mass',
      skin_color: 'skin_color',
      name: 'name'
    },
    wookiee: {
      count: 'oaoohuwhao',
      results: 'rcwochuanaoc',
      birth_year: 'rhahrcaoac_roworarc',
      eye_color: 'acraahrc_oaooanoorc',
      gender: 'rrwowhwaworc',
      hair_color: 'worowo_oaooanoorc',
      height: 'acwoahrracao',
      mass: 'scracc',
      skin_color: 'corahwh_oaooanoorc',
      name: 'whrascwo'
    }
  }
};