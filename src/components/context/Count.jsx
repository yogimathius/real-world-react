import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Count = () => {
  const { count } = useContext(CounterContext);

  return <div>The current count is {count}</div>;
};

export default Count;
