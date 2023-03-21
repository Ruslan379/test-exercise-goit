import {
  useState,
  useEffect
} from 'react';

// import useLocalStorage from '../hooks/useLocalStorage';
// import useArrLocalStorage from '../hooks/useArrLocalStorage'; //?

//! Components
import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';

//! images
import logo from 'images/logo.svg';
// import { ReactComponent as Picture } from 'images/picture2.svg';
import picture from 'images/picture.svg'; 
// import { ReactComponent as Avatar } from 'images/boy.svg';
import avatarBorder from 'images/boy.svg'; 
import rectangle from 'images/rectangle.svg';

//! DB contacts
// import contacts from 'db/contacts.json';

import css from './CardItem.module.css';


export const CardItem = ({ contacts }) => {
  // const [contactFollowers, setContactFollowers] = useState(null);

  // const [start, setStart] = useState(true);
  // console.log("start_ДО:", start); //!
  // useEffect(() => {
  //   setStart(true)
  // }, []);

  //! DB contacts + length
  // console.log("contacts --> ContactItem:", contacts); //!
  const contactsLength = contacts.length;
  console.log("contactsLength:", contactsLength); //!


  // const [arrTrigger, setArrTrigger] = useArrLocalStorage("ArrFollowers", arrFollowers);

  // const [trigger, setTrigger] = useLocalStorage("Followers", false);
  // console.log("ContactItem --> trigger:", trigger); //!


  
  //! arrFollowers - массив, наполняющий Local Storage дефолтными значениями = false
  let arrFollowers = [];
  for (let i = 0; i < contactsLength; i += 1) {
    arrFollowers[i] = false;
    // localStorage.setItem("ArrFollowers", JSON.stringify(arrFollowers));
  };
  // console.log("ArrFollowers:", arrFollowers); //!

  // const localStorageStart = JSON.parse(localStorage.getItem("ArrFollowers")) ?? []
  // console.log("localStorageStart:", localStorageStart); //!

  //! var.1
  // const [arrTrigger, setArrTrigger] = useState(() => {
  //   return JSON.parse(localStorage.getItem("ArrFollowers")) ?? arrFollowers
  // });

  //! var.2
  //! Массив-Триггер со зачениями true/false в зависимости от сотояние кнопки
  //! Считываем значения true/false в Массив-Триггер из Local Storage
  //! Если Local Storage пустой, то записываем массив arrFollowers 
  const [arrTrigger, setArrTrigger] = useState(
    JSON.parse(localStorage.getItem("ArrFollowers")) ?? arrFollowers
  );

  //! Дополнительный триггер (для перерендования)
  const [trigger, setTrigger] = useState(false); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  //! Пишем в Local Storage весь Массив-Триггер (arrTrigger)
  useEffect(() => {
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
    console.log("ЗАПИСЬ в Local Storage:", arrTrigger);

    const localStorageGet = JSON.parse(localStorage.getItem("ArrFollowers"))
    console.log("ЧТЕНИЕ из Local Storage:", localStorageGet); //!
  }, [arrTrigger, contacts]);
  // });

  // useEffect(() => {
  //   setTrigger(!trigger);
  // }, [trigger]);


  console.log("arrTrigger ПОСЛЕ:", arrTrigger); //!


  //?----------------------------------------------------------------
  // const toggleTrigger = (id) => {
  //   console.log("id:", id); //!
  //   const idNumber = Number(id) - 1;
  //   console.log("idNumber:", idNumber); //!

    // if (start && arrTrigger[idNumber]) {
    //   contacts[idNumber].followers = contacts[idNumber].followers + 1
    // };
        // setStart(false);

  //   for (let i = 0; i < contactsLength; i += 1) {
  //     if (i === idNumber) {
  //       // console.log("i:", i); //!
  //       // console.log("idNumber:", idNumber); //!
  //       arrTrigger[i] = !arrTrigger[i]
  //       console.log(`toggleTrigger --> arrTrigger[${i}]:`, arrTrigger[i]); //!
  //       console.log("toggleTrigger --> arrTrigger:", arrTrigger); //!

  //         if (arrTrigger[idNumber]) {
  //           console.log(`TRUE-->arrTrigger[${idNumber}]:`, arrTrigger[idNumber]); //!
  //           contacts[idNumber].followers = contacts[idNumber].followers + 1;
  //           // contacts2[idNumber].followers = contacts2[idNumber].followers + 1;
  //           // start = start + 1
  //           // console.log("TRUE-->start:", start); //!
  //           // console.log(`contacts[${idNumber}].followers`, contacts[idNumber].followers); //!
  //           // setContactFollowers(contacts[idNumber].followers) 
  //           // console.log("TRUE-->contactFollowers:", contactFollowers); //!
  //           // start = !start
  //         } else {
  //           console.log("FALSE-->arrTrigger[idNumber]:", arrTrigger[idNumber]); //!
  //           contacts[idNumber].followers = contacts[idNumber].followers - 1;
  //           // contacts2[idNumber].followers = contacts2[idNumber].followers - 1;
  //           // start = start - 1
  //           // console.log("FALSE-->start:", start); //!
  //           // console.log(`contacts[${idNumber}].followers`, contacts[idNumber].followers); //!
  //           // setContactFollowers(contacts[idNumber].followers) 
  //           // console.log("FALSE-->contactFollowers:", contactFollowers); //!
            
  //       };
  //       // start = !start
  //       // console.log(contacts[idNumber].followers); //!
  //       setContactFollowers(contacts[idNumber].followers); //!!!!
  //       // console.log("contactFollowers:", contactFollowers);

  //       setArrTrigger(arrTrigger);
  //       localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
  //       return
  //     }
  //   };
  //   // start = start + 10
  //   // setStart(!start);
  // };

  // start = start + 10
  // console.log("contactFollowers:", contactFollowers); //!


  
  //!----------------------------------------------------------------
  // for (let idNumber = 0; idNumber < contactsLength; idNumber += 1) {
  //   if (arrTrigger[idNumber]) {
  //     console.log(`TRUE-->arrTrigger[${idNumber}]:`, arrTrigger[idNumber]); //!
  //     contacts[idNumber].followers = contacts[idNumber].followers + 1;
  //     console.log(`contacts[${idNumber}].followers`, contacts[idNumber].followers); //!
  //   // } else {
  //   //   console.log(`FALSE-->arrTrigger[${idNumber}]:`, arrTrigger[idNumber]); //!
  //   //   contacts[idNumber].followers = contacts[idNumber].followers - 1;
  //   //   console.log(`contacts[${idNumber}].followers`, contacts[idNumber].followers); //!
  //   };
  // }
  //!----------------------------------------------------------------
  //! Логика работы кнопки FOLLOW/FOLLOWING 
    const toggleTrigger = (id) => {
      console.log("id:", id); //!
      const idNumber = Number(id) - 1;
      console.log("idNumber:", idNumber); //!

      console.log(`toggleTrigger --> arrTrigger[${idNumber}]_ДО:`, arrTrigger[idNumber]); //!
      arrTrigger[idNumber] = !arrTrigger[idNumber];
      console.log(`toggleTrigger --> arrTrigger[${idNumber}]_ПОСЛЕ:`, arrTrigger[idNumber]); //!

      // if (arrTrigger[idNumber]) {
      //       console.log(`TRUE-->arrTrigger[${idNumber}]:`, arrTrigger[idNumber]); //!
      //       contacts[idNumber].followers = contacts[idNumber].followers + 1;
      //       console.log(`contacts[${idNumber}].followers`, contacts[idNumber].followers); //!
      //     } else {
      //       console.log(`FALSE-->arrTrigger[${idNumber}]:`, arrTrigger[idNumber]); //!
      //       contacts[idNumber].followers = contacts[idNumber].followers - 1;
      //       console.log(`contacts[${idNumber}].followers`, contacts[idNumber].followers); //!
      //   };
      
      setArrTrigger(arrTrigger);
      setTrigger(!trigger);
      localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
      return 
    }

    // //! Проверка results на пустой объект
    // if (!movieReviews) {
    //     return null;  
    // }

  return (
    <>
      {contacts.map(({ id, user, tweets, followers, avatar }) => (
        <li
          key={id}
          className={css.card}>
          {/* //! logo */}
          <img className={css.logo}
            alt="first logo"
            src={logo}
            width="76"
          />
          {/* //! picture */}
          <img className={css.picture}
            alt="second logo"
            src={picture}
            width="308"
          />
          {/* //! avatar Border */}
          <img className={css.avatarBorder}
            alt="avatar border"
            src={avatarBorder}
            width="80"
          />
          {/* //! avatar */}
          <img className={css.avatar}
            alt={user}
            src={avatar}
            width="55"
          />
          {/* //! rectangle */}
          <img className={css.rectangle}
            alt="rectangle"
            src={rectangle}
            width="380"
          />
          {/* //! user name */}
          <p className={css.userName}
          >
            {user}
          </p>
          {/* //! tweets */}
          <p className={css.tweets}
          >
            {tweets} tweets
          </p>
          {/* //! FOLLOWERS */}
          <p className={css.followers}
          >
              {/* <span className={css.spanFollowers}>{followersRenderStart},{followersRenderEnd} </span> */}
            {/* <span className={css.spanFollowers}>{followers.toString().slice(0, -3)},{followers.toString().slice(-3)}</span> */}
            <span className={css.spanFollowers}>{followers.toString().slice(0, -3)},{arrTrigger[id - 1] ? (followers + 1).toString().slice(-3) : followers.toString().slice(-3)}</span>
            {/* <span className={css.spanFollowers}>{followers.toString().slice(0, -3)},{arrTrigger[id-1] ? followers.toString().slice(-3) : followers.toString().slice(-3)}</span> */}
            {/* <span
              className={css.spanFollowers}
            >
              {arrTrigger[id - 1] 
                ?
                // [followers.toString().slice(0, -3), (followers + 1).toString().slice(-3)]
                followersRenderAllTrue
                :
                // [followers.toString().slice(0, -3), followers.toString().slice(-3)]
                followersRenderAllFalse
              }
            </span> */}
              &nbsp;FOLLOWERS
          </p>
          {/* //! Trigger button */}
          <ButtonTrigger
            trigger={arrTrigger[id-1]}
            toggleTrigger={() => {toggleTrigger(id)}}
            textTrue={"FOLLOWING"}
            textFalse={"FOLLOW"}
            inversionBackColor={false}
          />
          {/* <button
            type="button"
            className={arrTrigger[id-1] ? css.btnFOLLOWING : css.btnFOLLOW}
            onClick={() => {toggleTrigger(id)}}
          >
            {arrTrigger[id-1] ? "FOLLOWING" : "FOLLOW"}
          </button> */}
        </li>
      ))}
    </>
  );
};
