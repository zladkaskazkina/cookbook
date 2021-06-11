import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const context = useContext(GlobalContext);
  const { ingredient } = context;
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
          <li>{ingredient}</li>
        </ul>
      </nav>
    </div>
  );
}
