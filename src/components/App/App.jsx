import { ContactForm } from 'components/ContactForm';
import { ListContacts } from 'components/ListContacts';
import { Title } from 'components/Title';
import { Phonebook } from './App.styled';

export const App = () => {
  return (
    <Phonebook>
      <Title title="Phonebook" children={<ContactForm />} />
      <Title title="Contacts" children={<ListContacts />} />
    </Phonebook>
  );
};
