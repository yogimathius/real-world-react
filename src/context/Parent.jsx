import React, { useState } from "react";
import CounterContext from "./CounterContext";
import Count from "./Count";
import InBetween from "./InBetween";

function CounterProvider({ value, children }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const counterObj = {
    count,
    setCount,
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
