import Marker from '../../ui-kit/marker';
import MetaProp from '../../ui-kit/meta-prop';
import styles from './character-card.module.scss';

export default function CharacterCard() {
  return (
    <div className={styles['character']}>
      <div className={styles['character__name']}>Jango Fett</div>

      <div className={styles['character__meta']}>
        <MetaProp value='172' title='height' />
        <MetaProp value='92' title='mass' />
      </div>

      <div>
        <Marker color='yellow'>male</Marker>
      </div>
    </div>
  );
}