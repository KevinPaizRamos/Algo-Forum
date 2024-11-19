import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/algo-forum-2.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/create" className="nav-button">
            Create
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
