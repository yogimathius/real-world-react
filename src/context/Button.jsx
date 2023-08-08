import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CounterContext from "./CounterContext";

const ButtonComponent = () => {
  const { setCount } = useContext(CounterContext);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Button onClick={clickHandler}>Click me!</Button>
    </div>
  );
};

export default ButtonComponent;
