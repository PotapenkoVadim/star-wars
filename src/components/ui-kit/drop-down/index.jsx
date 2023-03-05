import styles from './drop-down.module.scss';
import { useState, useEffect, useRef } from 'react';
import DropDownItem from './_item';

export const DropDown = ({
  children,
  menu,
  handleSelect,
  isForciblyHide,
  contentClassName,
}) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    if (!isForciblyHide) {
      setIsOpen(!isOpen);
    }
  };

  const onSelect = (item) => {
    handleSelect(item);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeDropDown = (event) => {
      const isDropDownChildNode = dropDownRef.current.contains(event.target);
      const isDropDownNode = dropDownRef.current === event.target;
      if (!isDropDownNode && !isDropDownChildNode) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropDown);

    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  useEffect(() => {
    if (isForciblyHide) {
      setIsOpen(false);
    }
  }, [isForciblyHide]);

  return (
    <div ref={dropDownRef} className={styles['dropdown']}>
      <div onClick={toggleDropDown} className={styles['dropdown__target']}>
        {children}
      </div>

      <div
        className={`
          ${styles['dropdown__content']}
          ${contentClassName ?? ''}
          ${!isOpen && 'visually-hidden'}
        `}
      >
        {menu.map((item) => (
          <DropDownItem
            handleClick={onSelect}
            key={item.key}
            item={item} />
        ))}
      </div>
    </div>
  );
};