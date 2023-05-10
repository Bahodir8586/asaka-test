import classes from "./CounterIndicator.module.scss";

export const CounterIndicator = ({ value }) => {
  return <div className={classes.counterIndicator}>{value}</div>;
};
