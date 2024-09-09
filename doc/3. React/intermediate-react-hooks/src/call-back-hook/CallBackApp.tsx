import { useCallback, useState } from "react";
import "./CallBackApp.css";
import Child from "./components/Child";

const CallBackApp = () => {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  const handleClickWithoutCallback = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <h1>useCallback Example</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr style={{ width: "280px", borderColor: "gray" }} />
      <h2>Child component</h2>
      <Child onClick={handleClick} />
    </div>
  );
};

export default CallBackApp;
