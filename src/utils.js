import { configuration } from './configuration';

const characterKeys = configuration.characterKeys;

export function getTranslatedProperty(character, language, propery) {
  return character[characterKeys[language ?? 'en'][propery]];
}