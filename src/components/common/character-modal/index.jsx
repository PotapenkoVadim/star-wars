import Modal from '../modal';
import styles from './character-modal.module.scss';

import maleImage from '../../../assets/images/male.png';
import MetaProp from '../../ui-kit/meta-prop';
import Marker from '../../ui-kit/marker';

export default function CharacterModal({ character, handleClose }) {
  return (
    <Modal onClose={handleClose} isOpen={Boolean(character)}>
      <div className={styles['character']}>
        <div className={styles['character__profile']}>
          <img src={maleImage} alt='Profile' />

          <div className={styles['character__tags']}>
            <Marker color='yellow'>hermaphrodite</Marker>
          </div>
        </div>

        <div className={styles['character__info']}>
          <div className={styles['character__name']}>Jabba Desilijic Tiure</div>

          <div className={styles['character__meta']}>
            <div>hair color: brown</div>
            <div>skin color - white</div>
          </div>

          <div className={styles['character__meta-props']}>
            <div className={styles['character__props']}>
              <MetaProp value='228' title='height' />
            </div>

            <div className={styles['character__props']}>
              <MetaProp value='165' title='mass' />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}