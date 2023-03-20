

import css from './ButtonTrigger.module.css';


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
  console.log("ButtonTrigger-->trigger:", trigger); //!
  console.log("ButtonTrigger-->textTrue:", textTrue); //!
  console.log("ButtonTrigger-->textFalse:", textFalse); //!


  // const [triggerTask, setTriggerTask] = useLocalStorage("TriggerTask", false);
  // console.log("triggerTask:", triggerTask); //!

  // const toggleTriggerTask = () => {
  //   setTriggerTask(!triggerTask);
  // };


  
  //?----------------------------------------------------------------
  
  return (
      <button
          type="button"
          className={triggerColor ? css.btnTrue : css.btnFalse}
          onClick={toggleTrigger}
      >
        {trigger ? textTrue : textFalse}
      </button>
  );
};
