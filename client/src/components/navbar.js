import React, { useContext } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar d-flex space-between">
      <div style={{width: "7rem"}}></div>
      <Link to="/">
        <img src="/logo.png" alt="logo" />
      </Link>
      <button className="btn btn-secondary"><Link to="/add-recipe" className="link" >Přidat recept</Link></button>          
    </div>
  );
}
