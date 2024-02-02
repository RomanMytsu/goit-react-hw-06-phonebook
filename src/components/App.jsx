import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { Container, TitleContacts, TitlePhone } from './App.styled';

export const App = () => {
  const CONTACTS_LS = 'contacts';

  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem(CONTACTS_LS)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_LS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const FilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };
  const filteredContacts = FilteredContacts();

  return (
    <Container>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm onAddContact={addContact} contacts={contacts} />
      <TitleContacts>Contacts</TitleContacts>
      <ContactFilter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   KEY_LS = 'contacts';

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem(this.KEY_LS));
//     if (parsedContacts) {
//       this.setState({
//         contacts: parsedContacts,
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(this.KEY_LS, JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };
//   handleFilterChange = e => {
//     this.setState({ filter: e.target.value });
//   };
//   FilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const filteredContacts = this.FilteredContacts();
//     return (
//       <Container>
//         <TitlePhone>Phonebook</TitlePhone>
//         <ContactForm
//           onAddContact={this.addContact}
//           contacts={this.state.contacts}
//         />
//         <TitleContacts>Contacts</TitleContacts>
//         <ContactFilter
//           value={this.state.filter}
//           onChange={this.handleFilterChange}
//         />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }
