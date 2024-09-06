import { useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer();

  return (
    <div className="counter-container">
      <h1>Counter:</h1>
      <div className="button-container">
        <button onClick={} className="increment-btn">
          Increment
        </button>
        <button onClick={} className="increment-btn">
          Increment +10
        </button>
        <button onClick={} className="decrement-btn">
          Decrement
        </button>
        <button onClick={} className="decrement-btn">
          Decrement -10
        </button>
        <button onClick={} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
