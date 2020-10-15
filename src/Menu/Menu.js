import React from 'react';
import {
    Link
  } from "react-router-dom"
function Menu() {
  return (
     <nav className="menu" role="navigation">
      <ul>
        <li aria-checked="true"><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
