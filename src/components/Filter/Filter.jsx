import { useSelector, useDispatch } from 'react-redux';
import { contactSelectors, changeFilter } from 'redux/contact';
import styles from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(contactSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Find your contact"
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
