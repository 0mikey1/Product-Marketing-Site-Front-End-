import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="sum">
      <div className="logo">
        Flavore<sub>Dynamic Menus</sub>
      </div>
      <nav className="item">
        <ul className="ul">
          <li className="li">
            <Link to="/">Home</Link>
          </li>
          <li className="li">
            <Link to="/features">Features</Link>
          </li>
          <li className="li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
