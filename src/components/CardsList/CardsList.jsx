//! Components
import { CardItem } from '../CardItem/CardItem.jsx';

//! DB contacts
import contacts from 'db/contacts.json';

import css from './CardsList.module.css';


export const CardsList = () => {
  return (
        <ul className={css.cardList}>
          <CardItem contacts={contacts}/>
        </ul>
  );
};
