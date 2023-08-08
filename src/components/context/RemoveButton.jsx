import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CounterContext from "./CounterContext";

const RemoveButton = () => {
  const { dispatch } = useContext(CounterContext);

  const clickHandler = () => {
    dispatch({ type: "remove_count" });
  };

  return (
    <div>
      <Button onClick={clickHandler}>Click me to decrement!</Button>
    </div>
  );
};

export default RemoveButton;
