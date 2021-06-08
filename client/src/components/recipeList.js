import { Link } from "react-router-dom";
import React from "react";

export default function RecipeList({ recipes }) {
  return (
    <ul className="recipe-list">
      {recipes.map(({ name, photoSrc, id }) => (
        <li className="relative" key={id}>
          <Link to={`/recipes/${id}`}>
            <span className="absolute text-center w-100">{name}</span>
            <img src={photoSrc} width="760" height="760" alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
