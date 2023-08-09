import { Button } from "@mui/material";
import React, { useRef, useState } from "react";

const RefDemo = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const countRef = useRef();

  const clickHandler = () => {
    inputRef.current.focus();
  };
  countRef.current = count;

  const clickAddHandler = () => {
    setCount((prev) => prev + 1);
  };

  const showAlert = () => {
    setTimeout(() => {
      alert(`The current count is ${countRef.current}`);
    }, 3000);
  };

  return (
    <div>
      <h2>References Demo</h2>
      <input ref={inputRef} />
      <Button onClick={clickHandler}>Click to add focus to input</Button>
      <div>
        <p>The current count is {count}</p>
        <Button onClick={clickAddHandler}>Click to add count</Button>
        <Button onClick={showAlert}>Click to show alert</Button>
      </div>
    </div>
  );
};

export default RefDemo;
