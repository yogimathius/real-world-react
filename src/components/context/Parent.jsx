import React, { useReducer, useRef } from "react";
import CounterContext from "./CounterContext";
import Count from "./Count";
import InBetween from "./InBetween";
import reducer from "../../reducer/reducer";
import { Button } from "@mui/material";

function CounterProvider({ value, children }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default function Parent() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const countRef = useRef();

  const counterObj = {
    state,
    dispatch,
  };
  countRef.current = state.count;

  const showAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${countRef.current}`);
    }, 2000);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <CounterProvider value={counterObj}>
        <Count />
        <InBetween />
        <Button onClick={showAlert}>Show alert</Button>
      </CounterProvider>
    </div>
  );
}
