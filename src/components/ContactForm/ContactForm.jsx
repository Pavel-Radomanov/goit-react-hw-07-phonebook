import { useState } from 'react';

import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, addContact } from '../../redux/slice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const enterContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    enterContacts
      ? alert(`${name}  is already exists`)
      : // : dispatch(addContact(contact));
        addContact(contact);
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    console.log(event.target.value, event.target.name);
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form
      style={{
        maxWidth: '250px',
        fontSize: 30,
      }}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          style={{
            height: '34px',
            background: '#ccd6e3',
            borderRadius: '6px',
          }}
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          // pattern for input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          style={{
            height: '34px',
            background: '#ccd6e3',
            borderRadius: '6px',
          }}
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button
        style={{
          boxSizing: 'border-box',
          width: '100px',
          height: '34px',
          background: '#808e9e',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '6px',
          marginTop: '20px',
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
