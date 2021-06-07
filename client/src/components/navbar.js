import { Link, Route, Switch } from "react-router-dom";

import React from "react";

export default function Navbar() {
  return (
    <div className="navbar d-flex justify-center">
      <img src="logo.png" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
