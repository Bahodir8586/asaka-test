import { useState } from "react";
import classes from "./FileComponent.module.scss";
import { ClickAwayListener } from "../ClickAwayListener";

export const FileComponent = ({ id, name, index, upperIndexesArray = [] }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <div>
          <div className={classes.label}>№</div>
          <div className={classes.value}>
            {[...upperIndexesArray, index].join(".")}
          </div>
        </div>
        <div>
          <div className={classes.label}>Название</div>
          <div className={`${classes.value} ${classes.name}`}>
            <img src={"/svgs/file.svg"} alt="file" />
            <span>{name}</span>
          </div>
        </div>
        <div>
          <div className={classes.label}>Очередность</div>
          <div className={classes.value}>{index}</div>
        </div>
        <div className={classes.settingsBox}>
          <ClickAwayListener onClickAway={() => setShowMenu(false)}>
            <button
              className={`${classes.menuButton} ${
                showMenu && classes.activeMenBut
              }`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={!showMenu ? `/svgs/dots.svg` : `/svgs/dots-active.svg`}
                alt="down"
              />
            </button>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
};
