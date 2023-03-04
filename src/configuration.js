import maleImage from './assets/images/male.png';
import femaleImage from './assets/images/female.png';
import hermaphroditeImage from './assets/images/hermaphrodite.png';

export const configuration = {
  routes: {
    home: '/',
    characters: '/characters'
  },
  genderImages: {
    male: maleImage,
    female: femaleImage,
    hermaphrodite: hermaphroditeImage
  },
  eyeColorOptions: [
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
  ]
};