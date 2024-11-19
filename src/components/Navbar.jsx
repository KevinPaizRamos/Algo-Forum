import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          className="app-logo"
          src="./src/assets/algo-forum-2.png"
          alt="Logo"
        />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-links">
        <Link to="/home" className="nav-button">
          Home
        </Link>
        <Link to="/about" className="nav-button">
          About
        </Link>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
