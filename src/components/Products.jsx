import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>The Products Page Component</h2>
      <Link to="/products/1">
        <Button sx={{ margin: "5px" }} variant="contained">
          Product #1
        </Button>
      </Link>
      <Link to="/products/2">
        <Button sx={{ margin: "5px" }} variant="contained">
          Product #2
        </Button>
      </Link>
      <Link to="/products/3">
        <Button sx={{ margin: "5px" }} variant="contained">
          Product #3
        </Button>
      </Link>
      <Link to="/products/4">
        <Button sx={{ margin: "5px" }} variant="contained">
          Product #4
        </Button>
      </Link>
    </div>
  );
};

export default Products;
