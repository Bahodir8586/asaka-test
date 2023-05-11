import classes from "./AccordionButton.module.scss";

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
            ? `/svgs/chevron-down.svg`
            : `/svgs/chevron-down-active.svg`
        }
        alt="down"
      />
    </button>
  );
};
