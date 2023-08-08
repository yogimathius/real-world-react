import { Button } from "@mui/material";
import React, { useRef } from "react";
const RefDemo = () => {
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef demo</h2>
      <label>Search term:</label>
      <input ref={inputRef} />
      <Button onClick={clickHandler}>Set Focus!!</Button>
    </div>
  );
};

export default RefDemo;
