import React from "react";
import Count from "./Count";
import DecreaseCount from "./DecreaseCount";

const InBetween = () => {
  return (
    <div>
      <h2>I am in between!</h2>
      <Count />
      <DecreaseCount />
    </div>
  );
};

export default InBetween;
