import Icon from '../../ui-kit/icon';
import styles from './modal.module.scss';

export default function Modal({ isOpen, children, onClose }) {
  return (
    <div className={`${styles['modal']} ${isOpen ? styles['modal_open'] : ''}`}>
      <div className={styles['modal__content']}>
        <div onClick={onClose} className={styles['modal__close']}>
          <Icon variant='close' color='black' /> 
        </div>

        {children}
      </div>
    </div>
  );
}