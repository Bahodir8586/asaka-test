import { FileComponent, FolderComponent } from "../components";

export const renderComponent = (item, index, upperIndexesArray) => {
    if (item.type === "file") {
        return <FileComponent key={item.id} {...item} index={index} upperIndexesArray={upperIndexesArray} />;
    } else {
        return <FolderComponent key={item.id} {...item} index={index} upperIndexesArray={upperIndexesArray} />;
    }
}

