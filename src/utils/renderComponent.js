import { FileComponent, FolderComponent } from "../components";

export const renderComponent = (item, index) => {
    if (item.type === "file") {
        return <FileComponent key={item.id} {...item} index={index} />;
    } else {
        return <FolderComponent key={item.id} {...item} index={index} />;
    }
}

