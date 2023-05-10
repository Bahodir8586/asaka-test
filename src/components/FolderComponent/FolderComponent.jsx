import { useMemo, useState } from "react";

import { renderComponent } from "../../utils";
import classes from "./FolderComponent.module.scss";
import { ClickAwayListener } from "../ClickAwayListener";

export const FolderComponent = ({
  id,
  name,
  innerContent,
  index,
  upperIndexesArray = [],
}) => {
  const innerContentNames = useMemo(
    () => innerContent?.map((item) => item.name).join(", "),
    [innerContent]
  );

  const [showInnerItems, setShowInnerItems] = useState(false);
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
            <img src={"/svgs/folder.svg"} alt="folder" />
            <span>{name}</span>
          </div>
        </div>
        <div>
          <div className={classes.label}>Очередность</div>
          <div className={classes.value}>{index}</div>
        </div>
        <div>
          <div className={classes.label}>Подкатегории</div>
          <div className={classes.value}>{innerContentNames}</div>
        </div>
        <div className={classes.settingsBox}>
          <div className={classes.innerItemsNumber}>{innerContent.length}</div>
          <button
            className={`${classes.accordionButton} ${
              showInnerItems && classes.activeAcBut
            }`}
            onClick={() => setShowInnerItems(!showInnerItems)}
          >
            <img
              src={
                !showInnerItems
                  ? `/svgs/chevron-down.svg`
                  : `/svgs/chevron-down-active.svg`
              }
              alt="down"
            />
          </button>
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
      {showInnerItems && (
        <div>
          {innerContent?.map((item, i) =>
            renderComponent(item, i + 1, [...upperIndexesArray, index])
          )}
        </div>
      )}
    </div>
  );
};
