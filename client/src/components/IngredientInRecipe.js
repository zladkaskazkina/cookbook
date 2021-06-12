import React, { useState } from "react";

export default function IngredientInRecipe({ ingredientContent, portion }) {
  const { name, quantity } = ingredientContent;

  //const [portionCounter, setPortionCounter] = useState(1);

  return (
    <li key={name}>
      <p>{`${name}: ${quantity.amount * portion} ${
        quantity.measure
      }`}</p> 
    </li>
  );
}
