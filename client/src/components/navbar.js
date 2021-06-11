import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar d-flex justify-center">
      <Link to="/">
        <img src="/logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/add-recipe">Přidat recept</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
