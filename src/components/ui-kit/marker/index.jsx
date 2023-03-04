import styles from './marker.module.scss';

export default function Marker({ children, color }) {
  return (
    <span className={`
      ${styles['marker']}
      ${styles[`marker_${color}`]}
    `}>
      {children}
    </span>
  );
}