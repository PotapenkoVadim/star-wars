import styles from './button.module.scss';

export default function Button({ color = 'yellow', children, className, ...props }) {
  return (
    <button className={`
      ${styles['button']}
      ${styles[`button_${color}`]}
      ${className ?? ''}
    `} {...props}>
      {children}
    </button>
  );
}