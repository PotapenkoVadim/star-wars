import Modal from '../modal';
import MetaProp from '../../ui-kit/meta-prop';
import Marker from '../../ui-kit/marker';
import { configuration } from '../../../configuration';
import styles from './character-modal.module.scss';

import mockImage from '../../../assets/images/no-image.webp';

const genderImages = configuration.genderImages;

export default function CharacterModal({ character, handleClose }) {
  return (
    <Modal onClose={handleClose} isOpen={Boolean(character)}>
      {character && (
        <div className={styles['character']}>
          <div className={styles['character__profile']}>
            <img
              className={styles['character__image']}
              src={genderImages[character.gender] ?? mockImage}
              alt='Profile' />

            <div className={styles['character__tags']}>
              {character.birth_year && character.birth_year !== 'unknown' && (
                <Marker color='brith'>{character.birth_year}</Marker>
              )}

              {character.gender && !['n/a', 'none'].includes(character.gender) && (
                <Marker color={character.gender}>{character.gender}</Marker>
              )}
            </div>
          </div>

          <div className={styles['character__info']}>
            <div className={styles['character__name']}>{character.name}</div>

            <div className={styles['character__meta']}>
              {character.hair_color && character.hair_color !== 'n/a' && (
                <div>hair color: {character.hair_color}</div>
              )}

              {character.skin_color && character.skin_color !== 'n/a' && (
                <div>skin color: {character.skin_color}</div>
              )}

              {character.eye_color && character.eye_color !== 'n/a' && (
                <div>eye color: {character.eye_color}</div>
              )}
            </div>

            <div className={styles['character__meta-props']}>
              {character.height && character.height !== 'unknown' && (
                <div className={styles['character__props']}>
                  <MetaProp value={character.height} title='height' />
                </div>
              )}

              {character.mass && character.mass !== 'unknown' && (
                <div className={styles['character__props']}>
                  <MetaProp value={character.mass} title='mass' />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}