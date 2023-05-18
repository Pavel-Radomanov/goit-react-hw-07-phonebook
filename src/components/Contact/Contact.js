import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ItemContact, ButtonRemoveContact } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));

    Notify.success('The contact has been delete from storage', {
      position: 'center-top',
    });
  };

  return (
    <ItemContact>
      {name}: {number}
      <ButtonRemoveContact type="button" onClick={handleDeleteContact}>
        <IconContext.Provider value={{ className: 'global-icon' }}>
          <RiUserUnfollowFill />
        </IconContext.Provider>
        Delete
      </ButtonRemoveContact>
    </ItemContact>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
