import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>The Product Page Component</h2>
      <div>product #{id}</div>
      <button onClick={clickHandler}>back to products</button>
    </div>
  );
};

export default Product;
