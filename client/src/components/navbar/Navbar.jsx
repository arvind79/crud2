import React from "react";
import { NavLink } from "react-router-dom";

import './style.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>
          <li>Add Student</li>{" "}
        </NavLink>
        <NavLink to="/students" className={({isActive}) => isActive ? 'active' : ''}>
          <li>Students</li>{" "}
        </NavLink>
        <NavLink to="/search" className={({isActive}) => isActive ? 'active' : ''}>
          <li>Search</li>{" "}
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
