import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactOperations, contactSelectors } from 'redux/contact';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const contacts = useSelector(contactSelectors.getContacts);
  const dispatch = useDispatch();
  const [stateName, setStateName] = useState('');
  const [stateNumber, setStateNumber] = useState('');

  const handleInputChangeName = event => {
    setStateName(event.target.value);
  };

  const handleInputChangeNumber = event => {
    setStateNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === stateName.toLowerCase(),
      )
    ) {
      return alert(`${stateName} is already in contacts`);
    }

    dispatch(contactOperations.addContact(stateName, stateNumber));
    setStateName('');
    setStateNumber('');
  };

  ContactForm.propTypes = {
    stateName: PropTypes.string.isRequired,
    stateNumber: PropTypes.string.isRequired,
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          className={styles.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={stateName}
          onChange={handleInputChangeName}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Enter your name"
          autoComplete="off"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          className={styles.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={stateNumber}
          onChange={handleInputChangeNumber}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Enter your phone number"
          autoComplete="on"
          required
        />
      </label>
      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
