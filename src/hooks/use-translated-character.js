import { useState, useEffect } from 'react';
import { getTranslatedProperty } from '../utils';

export default function useTranslatedCharacter(character, language) {
  const [translatedCharacter, setTranslatedCharacter] = useState({
    gender: '',
    birth_year: '',
    name: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    height: '',
    mass: ''
  });

  useEffect(() => {
    if (character) {
      setTranslatedCharacter({
        gender: getTranslatedProperty(character, language, 'gender'),
        birth_year: getTranslatedProperty(character, language, 'birth_year'),
        name: getTranslatedProperty(character, language, 'name'),
        hair_color: getTranslatedProperty(character, language, 'hair_color'),
        skin_color: getTranslatedProperty(character, language, 'skin_color'),
        eye_color: getTranslatedProperty(character, language, 'eye_color'),
        height: getTranslatedProperty(character, language, 'height'),
        mass: getTranslatedProperty(character, language, 'mass')
      });
    }
  }, [character, language]);

  return translatedCharacter;
}