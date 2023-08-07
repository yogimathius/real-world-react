import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/About">About</Link>
      <Link to="/Home">Home</Link>
      <Link to="/Products">Products</Link>
    </>
  );
};

export default Navbar;
