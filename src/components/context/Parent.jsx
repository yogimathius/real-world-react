import React, { useReducer, useState } from "react";
import CounterContext from "./CounterContext";
import AddCount from "./AddCount";
import InBetween from "./InBetween";
import reducer from "../../reducers/reducer";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const counterObject = {
    count: state.count,
    setCount,
    dispatch,
  };

  return (
    <div>
      <h2>The Parent Component</h2>
      <CounterContext.Provider value={counterObject}>
        <InBetween />
        <AddCount />
      </CounterContext.Provider>
    </div>
  );
};

export default Parent;
