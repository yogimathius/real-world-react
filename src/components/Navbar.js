import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Link to="/products">
        <Button>Products</Button>
      </Link>
      <Link to="/references">
        <Button>References</Button>
      </Link>
    </div>
  );
};

export default Navbar;
