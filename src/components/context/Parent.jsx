import React, { useReducer } from "react";
import CounterContext from "./CounterContext";
import Count from "./Count";
import InBetween from "./InBetween";
import reducer from "../../reducer/reducer";

function CounterProvider({ value, children }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default function Parent() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const counterObj = {
    state,
    dispatch,
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <CounterProvider value={counterObj}>
        <Count />
        <InBetween />
      </CounterProvider>
    </div>
  );
}
