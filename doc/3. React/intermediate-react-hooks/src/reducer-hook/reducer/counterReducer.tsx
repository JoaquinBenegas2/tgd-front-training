import { Action, CounterState } from "../types/counter";

export const counterReducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "custom":
      return { count: state.count + (action.payload || 1) };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
