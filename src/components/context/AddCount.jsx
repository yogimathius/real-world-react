import { Button } from "@mui/material";
import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const AddCount = () => {
  const { dispatch } = useContext(CounterContext);
  const clickHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <Button onClick={clickHandler}>Add to count</Button>
    </div>
  );
};

export default AddCount;
