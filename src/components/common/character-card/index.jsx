import Marker from '../../ui-kit/marker';
import MetaProp from '../../ui-kit/meta-prop';
import styles from './character-card.module.scss';

export default function CharacterCard({ character, handleClick }) {
  const onClick = () => handleClick(character);
  
  return (
    <div data-testid='charactercard' onClick={onClick} className={styles['character']}>
      <div className={styles['character__name']}>{character.name}</div>

      <div className={styles['character__meta']}>
        {character.height && character.height !== 'unknown' && (
          <MetaProp value={character.height} title='height' />
        )}

        {character.mass && character.mass !== 'unknown' && (
          <MetaProp value={character.mass} title='mass' />
        )}
      </div>

      <div className={styles['character__tags']}>
        {character.birth_year && character.birth_year !== 'unknown' && (
          <Marker color='brith'>{character.birth_year}</Marker>
        )}

        {character.gender && !['n/a', 'none'].includes(character.gender) && (
          <Marker color={character.gender}>{character.gender}</Marker>
        )}
      </div>
    </div>
  );
}