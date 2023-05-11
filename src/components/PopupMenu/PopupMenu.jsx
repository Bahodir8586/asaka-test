import { useState } from "react";

import { ClickAwayListener } from "../ClickAwayListener";

import classes from "./PopupMenu.module.scss";

export const PopupMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
      <div className={classes.menu}>
        <button
          className={`${classes.menuButton} ${
            showMenu && classes.menuButtonActive
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <img
            src={!showMenu ? `/svgs/dots.svg` : `/svgs/dots-active.svg`}
            alt="down"
          />
        </button>
        {showMenu && (
          <div className={classes.menuList}>
            <button className={classes.menuListItem} onClick={() => setShowMenu(!showMenu)}>
              <img src={"/svgs/edit-icon.svg"} alt="edit" />
              Редактировать
            </button>
            <button className={classes.menuListItem} onClick={() => setShowMenu(!showMenu)}>
              <img src={"/svgs/delete-icon.svg"} alt="delete" />
              Удалить
            </button>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
