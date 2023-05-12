// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getFilter, deleteContact } from '../../redux/slice';

import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';

const ContactList = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            console.log(name);
            return (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
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
                  type="button"
                  // onClick={() => dispatch(deleteContact(id))}
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  {/* Delete */}
                  {isLoading ? '...' : 'Delete'}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
