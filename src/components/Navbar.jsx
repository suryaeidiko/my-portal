import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo brand">
            <NavLink to="/">app</NavLink>
          </div>
          <nav>
            <ul>
                <li>
                    <NavLink to ="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
