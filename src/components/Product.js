import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const back = () => {
    navigate("/products");
  };

  return (
    <>
      <h2>Product {id} Page</h2>
      <button onClick={back}>Back</button>
    </>
  );
}
