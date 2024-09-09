import { useRef, useState } from "react";
import "./RefApp.css";

const RefApp = () => {
  const [count, setCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const countRef = useRef<number>(0);

  console.log("RefApp rendered");

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const incrementCount = () => {
    countRef.current += 1;
    console.log("Current count:", countRef.current);
  };

  return (
    <div className="App">
      <h1>useRef Example</h1>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <p>{countRef.current}</p>
      <div style={{ display: "flex" }}>
        <button onClick={focusInput}>Focus Input</button>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
      </div>
    </div>
  );
};

export default RefApp;
