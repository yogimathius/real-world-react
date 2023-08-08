import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CounterContext from "./CounterContext";

const AddButton = () => {
  const { dispatch } = useContext(CounterContext);

  const clickHandler = () => {
    dispatch({ type: "add_count" });
  };

  return (
    <div>
      <Button onClick={clickHandler}>Click me to increment!</Button>
    </div>
  );
};

export default AddButton;
