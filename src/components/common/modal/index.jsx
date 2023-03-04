import Icon from '../../ui-kit/icon';
import styles from './modal.module.scss';

export default function Modal({ isOpen, children, onClose }) {
  const handleWrapperClick = (event) => {    
    if (event.target.dataset.modal) {
      onClose();
    }
  };

  return (
    <div
      data-modal
      onClick={handleWrapperClick}
      className={`${styles['modal']} ${isOpen ? styles['modal_open'] : ''}`}>
      <div className={styles['modal__content']}>
        <div onClick={onClose} className={styles['modal__close']}>
          <Icon variant='close' color='black' /> 
        </div>

        {children}
      </div>
    </div>
  );
}