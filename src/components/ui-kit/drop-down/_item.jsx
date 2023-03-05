import styles from './drop-down.module.scss';

export default function DropDownItem({ item, handleClick }) {
  const onClick = () => handleClick(item.key);

  return (
    <div onClick={onClick} className={styles['dropdown__item']}>
      {item.node}
    </div>
  );
}