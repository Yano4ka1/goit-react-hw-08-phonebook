import { Avatar, IconButton, ListItem, ListItemAvatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MdPhone from '@mui/icons-material/Phone';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import css from './ContactList.module.css';
// import { deepPurple } from '@mui/material/colors';

const renderContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return visibleContact;
};

export const ContactListItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const items = renderContacts(contacts, filter);

  const handleDelete = e => {
    const currentId = e.currentTarget.id;
    console.log(currentId);
    dispatch(deleteContact(currentId));
  }

  return items.map(({ name, number, id }) => (
    <ListItem
      key={id}
      className={css.contact_item}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleDelete}
          id={id}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <MdPhone color="info" />
        </Avatar>
      </ListItemAvatar>
      <span>
        {' '}
        {name}: {number}
      </span>

    </ListItem>
  ));
};
      