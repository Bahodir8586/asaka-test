import { useState } from "react";

const useDragAndDrop = (initialData) => {
  const [data, setData] = useState(initialData);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (event, item) => {
    event.stopPropagation();
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", item.id.toString());
  };

  const handleDragOver = (event, folder) => {
    event.preventDefault();
    event.stopPropagation();
    if (folder.type === "folder") {
      event.dataTransfer.dropEffect = "move";
    }
  };

  const handleDrop = (event, droppedItem) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedData = moveItem(data, draggedItem, droppedItem);

    setData(updatedData);
    setDraggedItem(null);
  };

  const shallowCompareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  };

  const moveItem = (data, draggedItem, droppedItem) => {
    let updatedData = [...data];
    // Check if they share same parent
    if (
      !shallowCompareArrays(
        draggedItem.upperIndexesArray,
        droppedItem.upperIndexesArray
      )
    ) {
      return updatedData;
    }

    let parentEl;
    // top level folder
    if (draggedItem.upperIndexesArray.length === 0) {
      parentEl = updatedData;

      // find indexes of dragged and dropped items
      const draggedIndex = parentEl.findIndex(
        (item) => item.id === draggedItem.id
      );
      const droppedIndex = parentEl.findIndex(
        (item) => item.id === droppedItem.id
      );

      // move item to the new position
      const parentArray = [...parentEl];
      const item = parentArray.splice(draggedIndex, 1)[0];
      parentArray.splice(droppedIndex, 0, item);
      updatedData = parentArray;
    } else {
      // all other level folders
      parentEl = updatedData[draggedItem.upperIndexesArray[0] - 1];
      draggedItem?.upperIndexesArray?.forEach((index, i) => {
        if (i === 0) return;
        parentEl = parentEl.innerContent[index - 1];
      });

      // find indexes of dragged and dropped items
      const draggedIndex = parentEl.innerContent.findIndex(
        (item) => item.id === draggedItem.id
      );
      const droppedIndex = parentEl.innerContent.findIndex(
        (item) => item.id === droppedItem.id
      );

      // move item to the new position
      const parentArray = [...parentEl.innerContent];
      const item = parentArray.splice(draggedIndex, 1)[0];
      parentArray.splice(droppedIndex, 0, item);
      parentEl.innerContent = parentArray;
    }

    return updatedData;
  };

  return { data, handleDragStart, handleDragOver, handleDrop, draggedItem };
};

export default useDragAndDrop;
