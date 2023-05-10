import { useState } from "react";

import { mockData } from "./data";
import { renderComponent } from "./utils";

const App = () => {
  const [data, setData] = useState(mockData);
  return (
    <div>
      {data.map((item, index) => renderComponent(item, index))}
    </div>
  );
};

export default App;
