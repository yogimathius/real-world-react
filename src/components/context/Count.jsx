import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Count = () => {
  const { state } = useContext(CounterContext);

  return <div>Count is {state.count}</div>;
};

export default Count;
