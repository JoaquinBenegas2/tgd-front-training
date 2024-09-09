export interface CounterState {
  count: number;
}

export interface Action {
  type: "increment" | "custom" | "decrement" | "reset";
  payload?: number;
}
