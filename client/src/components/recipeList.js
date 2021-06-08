import { Link } from "react-router-dom";
import React from "react";

const recipesList = [
  {
    id: 1616017111148,
    author: "someId",
    category: "Soup",
    temperature: "cold",
    name: "Garlic soup",
    Summary: "The best soup after party",
    ingredients: [
      { name: "garlic", quantity: { measure: "pc", amount: 1 } },
      { name: "water", quantity: { measure: "l", amount: 5 } },
    ],
    method: "Boil 5 liters of water and add the garlic. Cook for 15 minutes.",
    preparationTime: 20,
    rating: 4.7,
    photoSrc: "/assets/garlic_soup.jpg",
    tags: ["water", "garlic"],
  },
];

export default function RecipeList() {
  return (
    <ul className="recipe-list">
      {recipesList.map(({ name, photoSrc, id }) => (
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
