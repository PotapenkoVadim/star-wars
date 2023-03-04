import styles from './note.module.scss';

export default function Note({ children }) {
  return (
    <div className={styles['note']}>{children}</div>
  );
}