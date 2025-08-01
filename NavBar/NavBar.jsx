import React from "react";
import { Link } from "react-router";
import "./header.css";

const NavBar = () => {
  return (
    <div className="header">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
