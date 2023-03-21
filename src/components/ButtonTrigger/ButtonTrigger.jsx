import PropTypes from 'prop-types';
// import css from './ButtonTrigger.module.css';

import {
  Button
} from './ButtonTrigger.styled';


export const ButtonTrigger = ({
  trigger,
  toggleTrigger,
  textTrue,
  textFalse,
  inversionBackColor
}) => {


  let triggerColor = trigger;
  if (inversionBackColor) {
    triggerColor = !trigger
  };

  // console.log("ButtonTrigger-->trigger:", trigger); //!
  // console.log("ButtonTrigger-->textTrue:", textTrue); //!
  // console.log("ButtonTrigger-->textFalse:", textFalse); //!



  return (
    // <button
    //     className={triggerColor ? css.btnTrue : css.btnFalse}
    //     type="button"
    //     onClick={toggleTrigger}
    //   >
    //     {trigger ? textTrue : textFalse}
    //   </button>
    <Button
      type="button"
      onClick={toggleTrigger}
      triggerColor={triggerColor}
    >
      {trigger ? textTrue : textFalse}
    </Button>
  );
};

ButtonTrigger.propTypes = {
  trigger: PropTypes.bool.isRequired,
  toggleTrigger: PropTypes.func.isRequired,
  textTrue: PropTypes.string.isRequired,
  textFalse: PropTypes.string.isRequired,
  inversionBackColor: PropTypes.bool.isRequired,
};