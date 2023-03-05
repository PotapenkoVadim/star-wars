import { configuration } from '../../../configuration';
import useTranslatedCharacter from '../../../hooks/use-translated-character';
import Marker from '../../ui-kit/marker';
import MetaProp from '../../ui-kit/meta-prop';
import styles from './character-card.module.scss';

const falsyProperties = configuration.falsyProperties;

export default function CharacterCard({ character, handleClick, language }) {
  const translatedCharacter = useTranslatedCharacter(character, language);

  const onClick = () => handleClick(character);
  
  return (
    <div data-testid='charactercard' onClick={onClick} className={styles['character']}>
      <div className={styles['character__name']}>{translatedCharacter.name}</div>

      <div className={styles['character__meta']}>
        {translatedCharacter.height && !falsyProperties.includes(translatedCharacter.height) && (
          <MetaProp value={translatedCharacter.height} title='height' />
        )}

        {translatedCharacter.mass && !falsyProperties.includes(translatedCharacter.mass) && (
          <MetaProp value={translatedCharacter.mass} title='mass' />
        )}
      </div>

      <div className={styles['character__tags']}>
        {translatedCharacter.birth_year && !falsyProperties.includes(translatedCharacter.birth_year) && (
          <Marker color='brith'>{translatedCharacter.birth_year}</Marker>
        )}

        {translatedCharacter.gender && !falsyProperties.includes(translatedCharacter.gender) && (
          <Marker color={translatedCharacter.gender}>
            {translatedCharacter.gender}
          </Marker>
        )}
      </div>
    </div>
  );
}