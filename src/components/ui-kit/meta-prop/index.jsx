import styles from './meta-prop.module.scss';

export default function MetaProp({ value, title }) {
  return (
    <div className={styles['metaprop']}>
      <span className={styles['metaprop__value']}>{value}</span>
      <span className={styles['metaprop__label']}>{title}</span>
    </div>
  );
}