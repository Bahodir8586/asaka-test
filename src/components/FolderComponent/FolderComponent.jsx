import { useMemo, useState } from "react";

import { PopupMenu } from "../PopupMenu";
import { Cell } from "../Cell";
import { CounterIndicator } from "../CounterIndicator";
import { AccordionButton } from "../AccordionButton";
import FolderIcon from "../../assets/folder.svg";

import { renderComponent } from "../../utils";

import classes from "./FolderComponent.module.scss";


export const FolderComponent = ({
  item,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
  upperIndexesArray = [],
}) => {
  const { name, innerContent } = item;
  const innerContentNames = useMemo(
    () => innerContent?.map((item) => item.name).join(", "),
    [innerContent]
  );

  const [showInnerItems, setShowInnerItems] = useState(false);

  return (
    <div
      className={classes.content}
      draggable="true"
      onDragStart={(event) =>
        handleDragStart(event, { ...item, upperIndexesArray })
      }
      onDragOver={(event) => handleDragOver(event, item)}
      onDrop={(event) => handleDrop(event, { ...item, upperIndexesArray })}
    >
      <div className={classes.innerContent}>
        <div>
          <Cell label={"№"} value={[...upperIndexesArray, index].join(".")} />
        </div>
        <div>
          <Cell
            label={"Название"}
            value={
              <>
                <img src={FolderIcon} alt="folder" />
                <span>{name}</span>
              </>
            }
            customValueClass={classes.name}
          />
        </div>
        <div>
          <Cell label={"Очередность"} value={index} />
        </div>
        <div>
          <Cell label={"Подкатегории"} value={innerContentNames} />
        </div>
        <div className={classes.settingsBox}>
          <CounterIndicator value={innerContent.length} />
          <AccordionButton
            open={showInnerItems}
            onClickHandler={() => setShowInnerItems(!showInnerItems)}
          />
          <PopupMenu />
        </div>
      </div>
      {showInnerItems && (
        <div>
          {innerContent?.map((item, i) =>
            renderComponent(
              item,
              i + 1,
              [...upperIndexesArray, index],
              handleDragStart,
              handleDragOver,
              handleDrop
            )
          )}
        </div>
      )}
    </div>
  );
};
