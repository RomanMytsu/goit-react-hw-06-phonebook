import { nanoid } from 'nanoid';
import { useState } from 'react';
import {
  ContactFormContainer,
  FormButton,
  FormInput,
  FormLabel,
} from './ContactForm.styled';

export const ContactForm = ({ onAddContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <FormLabel htmlFor="nameInput">Name</FormLabel>
      <FormInput
        id="nameInput"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={name}
        onChange={handleNameChange}
      />
      <FormLabel htmlFor="numberInput">Number</FormLabel>
      <FormInput
        id="numberInput"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <FormButton type="submit">Add contact</FormButton>
    </ContactFormContainer>
  );
};

