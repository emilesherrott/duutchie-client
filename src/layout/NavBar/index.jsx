import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
  return (
    <main>
      <header>
        <nav>
            <NavLink to="/" className="navbar-navlink">Home</NavLink>
            <NavLink to="/about-us" className="navbar-navlink">About Us</NavLink>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default NavBar;
