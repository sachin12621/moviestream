import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure styles exist

const Navbar = () => (
  <nav className="navbar">
    <h2>Movie Streaming</h2>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;
