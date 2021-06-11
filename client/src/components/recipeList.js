import { Link } from "react-router-dom";
import React from "react";

export default function RecipeList({ recipes }) {
  return (
    <ul className="recipe-list">
      {recipes.map(({ name, photo, _id }) => (
        <li className="relative" key={_id}>
          <Link to={`/recipes/${_id}`}>
            <span className="absolute text-center w-100">{name}</span>
            <img src={photo} width="760" height="760" alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
