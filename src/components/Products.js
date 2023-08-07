import React from "react";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h2>Products Page</h2>
      <Link to="/products/1">
        <Button>Product #1</Button>
      </Link>
      <Link to="/products/2">
        <Button>Product #2</Button>
      </Link>
      <Link to="/products/3">
        <Button>Product #3</Button>
      </Link>
      <Link to="/products/4">
        <Button>Product #4</Button>
      </Link>
    </>
  );
}
