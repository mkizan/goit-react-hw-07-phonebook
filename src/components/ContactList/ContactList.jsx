import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { contactOperations, contactSelectors } from 'redux/contact';
import contactOperations from '../../redux/contact/contact-operations';
import selector from '../../redux/contact/contact-selectors';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(selector.getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContacts = id => dispatch(contactOperations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, phone, id }) => {
        return (
          <li className={styles.list__item} key={id}>
            {name}: {phone}
            <button
              type="button"
              className={styles.btn}
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
