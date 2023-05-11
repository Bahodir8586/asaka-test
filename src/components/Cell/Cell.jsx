import classes from "./Cell.module.scss";

export const Cell = ({ label, value, customValueClass='' }) => {
  return (
    <>
      <div className={classes.label}>{label}</div>
      <div className={`${classes.value} ${customValueClass}`}>{value}</div>
    </>
  );
};
