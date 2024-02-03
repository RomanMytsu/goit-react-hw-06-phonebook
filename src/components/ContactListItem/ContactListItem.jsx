import { useDispatch } from 'react-redux';
import { ListItemButton, ListItemWrapper } from './ContactListItem.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <ListItemWrapper>
        <span>
          {name}: {number}
        </span>
        <ListItemButton
          type="button"
          onClick={() => {
            handleDeleteContact(id);
          }}
        >
          Delete
        </ListItemButton>
      </ListItemWrapper>
    </li>
  );
};
