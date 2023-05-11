import { Cell } from "../Cell";
import { PopupMenu } from "../PopupMenu";
import FileIcon from "../../assets/file.svg";

import classes from "./FileComponent.module.scss";

export const FileComponent = ({
  item,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
  upperIndexesArray = [],
}) => {
  const { name } = item;

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
                <img src={FileIcon} alt="file" />
                <span>{name}</span>
              </>
            }
            customValueClass={classes.name}
          />
        </div>
        <div>
          <Cell label={"Очередность"} value={index} />
        </div>
        <div className={classes.settingsBox}>
          <PopupMenu />
        </div>
      </div>
    </div>
  );
};
