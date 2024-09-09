import { useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="counter-container">
      <h1>Counter:{state.count}</h1>
      <div className="button-container">
        <button onClick={() => dispatch({ type: "increment" })} className="increment-btn">
          Increment
        </button>
        <button onClick={() => dispatch({ type: "custom", payload: 10 })} className="increment-btn">
          Increment +10
        </button>
        <button onClick={() => dispatch({ type: "decrement" })} className="decrement-btn">
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "custom", payload: -10 })}
          className="decrement-btn"
        >
          Decrement -10
        </button>
        <button onClick={() => dispatch({ type: "reset" })} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
