import styles from './icon.module.scss';

export default function Icon({ variant, color = 'black', className }) {
  return (
    <span className={`
      ${styles['icon']}
      ${styles[`icon__${variant}`]}
      ${styles[`icon_${color}`]}
      ${className ?? ''}
    `} />
  );
}