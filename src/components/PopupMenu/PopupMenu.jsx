import { useState } from "react";

import { ClickAwayListener } from "../ClickAwayListener";
import Dots from "../../assets/dots.svg";
import DotsActive from "../../assets/dots-active.svg";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";

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
            src={!showMenu ? Dots : DotsActive}
            alt="down"
          />
        </button>
        {showMenu && (
          <div className={classes.menuList}>
            <button className={classes.menuListItem} onClick={() => setShowMenu(!showMenu)}>
              <img src={EditIcon} alt="edit" />
              Редактировать
            </button>
            <button className={classes.menuListItem} onClick={() => setShowMenu(!showMenu)}>
              <img src={DeleteIcon} alt="delete" />
              Удалить
            </button>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
