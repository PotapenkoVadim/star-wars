import Select from 'react-select';
import styles from './selector.module.scss';

const options = [
  { value: '', label: 'All' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default function Selector({ placeholder }) {
  return (
    <div className={styles['selector']}>
      <span className={styles['selector__placeholder']}>
        {placeholder}
      </span>

      <Select classNamePrefix='react-select' options={options} />
    </div>
  );
}