import { Button } from "@mui/material";
import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const DecreaseCount = () => {
  const { dispatch } = useContext(CounterContext);
  const clickHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <Button onClick={clickHandler}>Decrease count</Button>
    </div>
  );
};

export default DecreaseCount;
