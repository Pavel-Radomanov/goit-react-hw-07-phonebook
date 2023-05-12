import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Finder from './Finder/Finder';

const mainStyle = {
  // height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  fontSize: 20,
  color: '#3d2f26ed',
  marginLeft: '30px',
};

const App = () => {
  return (
    <section style={mainStyle}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Finder />
      <ContactList />
    </section>
  );
};
export default App;
