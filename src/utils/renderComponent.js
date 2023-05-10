import { FileComponent, FolderComponent } from "../components";

export const renderComponent = (
  item,
  index,
  upperIndexesArray,
  handleDragStart,
  handleDragOver,
  handleDrop
) => {
  if (item.type === "file") {
    return (
      <FileComponent
        key={item.id}
        item={item}
        index={index}
        upperIndexesArray={upperIndexesArray}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
    );
  } else {
    return (
      <FolderComponent
        key={item.id}
        item={item}
        index={index}
        upperIndexesArray={upperIndexesArray}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
    );
  }
};
