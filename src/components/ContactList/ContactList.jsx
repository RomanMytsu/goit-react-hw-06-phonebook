import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ListContainer } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const FilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = FilteredContacts();

  return (
    <ListContainer>
      {filterContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ListContainer>
  );
};
