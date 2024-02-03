import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { Container, TitleContacts, TitlePhone } from './App.styled';

export const App = () => {
  return (
    <Container>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <ContactFilter />
      <ContactList />
    </Container>
  );
};