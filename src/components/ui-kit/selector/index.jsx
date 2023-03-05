import Select from 'react-select';
import styles from './selector.module.scss';

export default function Selector({ placeholder, options, handleChange }) {
  return (
    <div className={styles['selector']}>
      <span className={styles['selector__placeholder']}>
        {placeholder}
      </span>

      <Select
        defaultValue={options[0]}
        onChange={handleChange}
        classNamePrefix='react-select'
        options={options} />
    </div>
  );
}