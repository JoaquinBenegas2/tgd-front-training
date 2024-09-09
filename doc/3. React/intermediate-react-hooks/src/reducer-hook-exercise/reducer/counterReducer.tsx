import { Action } from "../types/counter";
import { CounterState } from "../types/counter";

export const counterReducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      return { count: state.count - 1 };
      break;
    case "custom":
      return { count: state.count + (action.payload || 1) };
      break;
    case "reset":
      return { count: 0 };
      break;
    default:
      return state;
  }
};
