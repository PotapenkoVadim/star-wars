import Modal from '../modal';
import MetaProp from '../../ui-kit/meta-prop';
import Marker from '../../ui-kit/marker';
import { configuration } from '../../../configuration';
import useTranslatedCharacter from '../../../hooks/use-translated-character';
import styles from './character-modal.module.scss';

import mockImage from '../../../assets/images/no-image.webp';

const genderImages = configuration.genderImages;
const falsyProperties = configuration.falsyProperties;

export default function CharacterModal({ character, handleClose, language }) {
  const translatedCharacter = useTranslatedCharacter(character, language);

  return (
    <Modal onClose={handleClose} isOpen={Boolean(character)}>
      {character && (
        <div className={styles['character']}>
          <div className={styles['character__profile']}>
            <img
              className={styles['character__image']}
              src={genderImages[translatedCharacter.gender] ?? mockImage}
              alt='Profile' />

            <div className={styles['character__tags']}>
              {translatedCharacter.birth_year && !falsyProperties.includes(translatedCharacter.birth_year) && (
                <Marker color='brith'>{translatedCharacter.birth_year}</Marker>
              )}

              {translatedCharacter.gender && !falsyProperties.includes(translatedCharacter.gender) && (
                <Marker color={translatedCharacter.gender}>{translatedCharacter.gender}</Marker>
              )}
            </div>
          </div>

          <div className={styles['character__info']}>
            <div className={styles['character__name']}>{translatedCharacter.name}</div>

            <div className={styles['character__meta']}>
              {translatedCharacter.hair_color && !falsyProperties.includes(translatedCharacter.hair_color) && (
                <div>hair color: {translatedCharacter.hair_color}</div>
              )}

              {translatedCharacter.skin_color && !falsyProperties.includes(translatedCharacter.skin_color) && (
                <div>skin color: {translatedCharacter.skin_color}</div>
              )}

              {translatedCharacter.eye_color && !falsyProperties.includes(translatedCharacter.eye_color) && (
                <div>eye color: {translatedCharacter.eye_color}</div>
              )}
            </div>

            <div className={styles['character__meta-props']}>
              {translatedCharacter.height && !falsyProperties.includes(translatedCharacter.height) && (
                <div className={styles['character__props']}>
                  <MetaProp value={translatedCharacter.height} title='height' />
                </div>
              )}

              {translatedCharacter.mass && !falsyProperties.includes(translatedCharacter.mass) && (
                <div className={styles['character__props']}>
                  <MetaProp value={translatedCharacter.mass} title='mass' />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}