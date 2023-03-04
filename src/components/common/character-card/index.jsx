import Marker from '../../ui-kit/marker';
import styles from './character-card.module.scss';

export default function CharacterCard() {
  return (
    <div className={styles['character']}>
      <div className={styles['character__name']}>Jango Fett</div>

      <div className={styles['character__meta']}>
        <div className={styles['character__meta-item']}>
          <span className={styles['character__meta-value']}>172</span>
          <span className={styles['character__meta-label']}>height</span>
        </div>

        <div className={styles['character__meta-item']}>
          <span className={styles['character__meta-value']}>90</span>
          <span className={styles['character__meta-label']}>mass</span>
        </div>
      </div>

      <div>
        <Marker color='yellow'>male</Marker>
      </div>
    </div>
  );
}