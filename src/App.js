import useDragAndDrop from "./hooks/useDragAndDrop";
import { mockData } from "./data";
import { renderComponent } from "./utils";

const App = () => {
  const { data, handleDragStart, handleDragOver, handleDrop } = useDragAndDrop(mockData);

  return (
    <div>
      {data.map((item, index) => renderComponent(item, index+1, [], handleDragStart, handleDragOver, handleDrop))}
    </div>
  );
};

export default App;
