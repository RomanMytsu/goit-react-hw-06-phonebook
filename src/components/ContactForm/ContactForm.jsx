import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { nanoid } from 'nanoid';
import {
  ContactFormContainer,
  FormButton,
  FormInput,
  FormLabel,
} from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };
  const newContact = { id: nanoid(), name, number };

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
