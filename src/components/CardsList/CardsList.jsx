//! Components
import { CardItem } from '../CardItem/CardItem.jsx';

//! DB contacts
import contacts from 'db/contacts.json';

// import css from './CardsList.module.css';

import {
  CardsListContainer
} from './CardsList.styled.js';


export const CardsList = () => {
  return (
      <CardsListContainer>
          <CardItem contacts={contacts}/>
      </CardsListContainer>
      // <ul className={css.cardList}>
      //   <CardItem contacts={contacts}/>
      // </ul>
  );
};
