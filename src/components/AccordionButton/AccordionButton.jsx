import classes from "./AccordionButton.module.scss";
import ChevronDown from "../../assets/chevron-down.svg";
import ChevronDownActive from "../../assets/chevron-down-active.svg";

export const AccordionButton = ({open, onClickHandler}) => {
  return (
    <button
      className={`${classes.accordionButton} ${
        open && classes.accordionButtonActive
      }`}
      onClick={onClickHandler}
    >
      <img
        src={
          !open
            ? ChevronDown
            : ChevronDownActive
        }
        alt="down"
      />
    </button>
  );
};
