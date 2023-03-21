import useLocalStorage from '../hooks/useLocalStorage';

//! Components
import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';

//! ----- images
import logo from 'images/logo.svg';

// import { ReactComponent as Picture } from 'images/picture2.svg';
// import picture from 'images/picture.svg';

// import ellipse from 'images/ellipse.svg';
import { ReactComponent as Ellipse } from 'images/ellipse.svg';

// import { ReactComponent as Avatar } from 'images/boy.svg';
// import avatar from 'images/boy.svg'; 
import avatar from 'images/avatar.svg';

// import rectangle from 'images/rectangle.svg';  //! Not used
//! _____ images

// import css from './OneCard.module.css';

import {
  Card,
  Logo,
  // BackgroundPicture, //! Not used
  RoundFrameAvatar, 
  Avatar,
  // Rectangle, //! Not used
  HorizontalLine,
  // UserName, //! Not used
  Tweets,
  Followers
} from './OneCard.styled';



export const OneCard = () => {
  const [triggerOneCard, setTriggerOneCard] = useLocalStorage("TriggerOneCard", false);
  console.log("triggerOneCard:", triggerOneCard); //!


  //! Input data
  const tweets = 777;
  let followers = 100500;


  //! --------------- Преобразование 100500(100501) --> 100,500(100,501) ---------------
  let followersString = followers.toString()
  // console.log("followers:", followers); //!
  // console.log("followersString:", followersString); //!
  
  if (triggerOneCard) {
    followers = followers + 1;
    followersString = followers.toString();
    // console.log("followers1:", followers); //!
    // console.log("followersString1:", followersString); //!
  };

  let followersRenderStart = followersString.slice(0, -3);
  // console.log("followersRenderStart:", followersRenderStart); //!

  let followersRenderEnd = followersString.slice(-3);
  // console.log("followersRenderEnd:", followersRenderEnd); //!
  //! _______________ Преобразование 00500(100501) --> 100,500(100,501) _______________


  const toggleTriggerOneCard = () => {
    setTriggerOneCard(!triggerOneCard);
  };




  return (
    // <div className={`${css.backImage} ${css.card}`}>
    <Card>
      {/* //! logo */}
      <Logo
        alt="first logo"
        src={logo}
        width="76"
      />
      {/* //! picture */}
      {/* <Picture className={css.picture} /> */}
      {/* <img className={css.picture}
        alt="background"
        src={picture}
        width="308"
      /> */}
      {/* //! rectangle */}
      {/* <Rectangle
        alt="rectangle"
        src={rectangle}
        width="380"
      /> */}
      {/* //! orizontalLine */}
      <HorizontalLine />
      {/* //! ellipse */}
      <RoundFrameAvatar>
        <Ellipse />
      </RoundFrameAvatar>
      {/* <img className={css.ellipse}
        alt="ellipse"
        src={ellipse}
        width="80"
      /> */}
      {/* //! avatar */}
      {/* <Avatar className={css.avatar} /> */}
      <Avatar
        alt="avatar"
        src={avatar}
        width="63"
      />
      {/* //! rectangle */}
      {/* <Rectangle
        alt="rectangle"
        src={rectangle}
        width="380"
      /> */}
      {/* //! tweets */}
      <Tweets>{tweets} tweets</Tweets>
      {/* //! FOLLOWERS */}
      <Followers>
        <span>{followersRenderStart},{followersRenderEnd}</span>
        &nbsp;FOLLOWERS
      </Followers>

      {/* //! Trigger button */}
      <ButtonTrigger
        trigger={triggerOneCard}
        toggleTrigger={toggleTriggerOneCard}
        textTrue={"FOLLOWING"}
        textFalse={"FOLLOW"}
        inversionBackColor={false}
      />
      {/* <button
          type="button"
          className={triggerOneCard ? css.btnFOLLOWING : css.btnFOLLOW}
          onClick={toggleTriggerOneCard}
      >
        {triggerOneCard ? "FOLLOWING" : "FOLLOW"}
      </button> */}
    </Card>
  );
};




  //todo OLD
  // return (
  //   // <div className={`${css.backImage} ${css.card}`}>
  //   <div className={css.card}>
  //     {/* //! logo */}
  //     <img className={css.logo}
  //       alt="first logo"
  //       src={logo}
  //       width="76"
  //     />
  //     {/* //! picture */}
  //     {/* <Picture className={css.picture} /> */}
  //     {/* <img className={css.picture}
  //       alt="background"
  //       src={picture}
  //       width="308"
  //     /> */}
  //     {/* //! ellipse */}
  //     <Ellipse className={css.ellipse} />
  //     {/* <img className={css.ellipse}
  //       alt="ellipse"
  //       src={ellipse}
  //       width="80"
  //     /> */}
  //     {/* //! avatar */}
  //     {/* <Avatar className={css.avatar} /> */}
  //     <img className={css.avatar}
  //       alt="avatar"
  //       src={avatar}
  //       width="63"
  //     />
  //     {/* //! rectangle */}
  //     <img className={css.rectangle}
  //       alt="rectangle"
  //       src={rectangle}
  //       width="380"
  //     />
  //     {/* //! tweets */}
  //     <p className={css.tweets}
  //     >
  //       {tweets} tweets
  //     </p>
  //     {/* //! FOLLOWERS */}
  //     <p className={css.followers}
  //     >
  //       <span className={css.spanFollowers}>{followersRenderStart},{followersRenderEnd} </span>
  //       FOLLOWERS
  //     </p>

  //     {/* //! Trigger button */}
  //     <ButtonTrigger
  //       trigger={triggerOneCard}
  //       toggleTrigger={toggleTriggerOneCard}
  //       textTrue={"FOLLOWING"}
  //       textFalse={"FOLLOW"}
  //       inversionBackColor={false}
  //     />
  //     {/* <button
  //         type="button"
  //         className={triggerOneCard ? css.btnFOLLOWING : css.btnFOLLOW}
  //         onClick={toggleTriggerOneCard}
  //     >
  //       {triggerOneCard ? "FOLLOWING" : "FOLLOW"}
  //     </button> */}
  //   </div>
  // );
