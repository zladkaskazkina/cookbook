import React from "react";

const recipe = {
  id: 1616017111148,
  author: "someId",
  category: "Soup",
  temperature: "cold",
  name: "Garlic soup",
  summary: "The best soup after party",
  ingredients: [
    { name: "garlic", quantity: { measure: "pc", amount: 1 } },
    { name: "water", quantity: { measure: "l", amount: 5 } },
  ],
  method: "Boil 5 liters of water and add the garlic. Cook for 15 minutes.",
  preparationTime: 20,
  rating: 4.7,
  photoSrc: "/assets/garlic_soup.jpg",
  tags: ["water", "garlic"],
};

export default function DetailRecipe() {
  const { photoSrc, name, summary, method, ingredients } = recipe;
  console.log("ingredients", ingredients);
  return (
    <div>
      <img src={photoSrc} />
      <h1>{name}</h1>
      <h2>{summary}</h2>
      <br />
      <p> {method}</p>
      <ul>
        {ingredients.map(({ name, quantity }) => {
          {
            console.log("name", name, quantity);
          }
          <li>{name}</li>;
        })}
      </ul>
    </div>
  );
}
