import List from '@mui/material/List';
import css from './ContactList.module.css';
import { ContactListItem } from './ContactListItem';
import Filter from 'components/Filter/Filter';

export const ContactList = () => {

  return (
    <div className={css.contacts__container}>
      <h2 className={css.contacts__title}>
        Your phone book  contacts
      </h2>
      <Filter/>
      <List>
        <ContactListItem />
      </List>
    </div>
  );
};