import { useState } from "react";
import { sumTwo } from "../count";
import "./styles.css";
import "./color.scss";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log(sumTwo(count, 1));
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <h2>another element3</h2>
    </div>
  );
};
export default App;
