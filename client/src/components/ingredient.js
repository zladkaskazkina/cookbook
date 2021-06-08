import React from "react";
import { useState } from "react";

export default function Ingredient({ ingredientContent }) {
  const { name, ingredientAmount } = ingredientContent;
  const [portionCounter, setPortionCounter] = useState(1);
  return (
    <li key={name}>
      <p>{`${name}: ${ingredientAmount.amount * portionCounter} ${
        ingredientAmount.measure
      }`}</p>
      <button onClick={() => setPortionCounter(portionCounter + 1)}>+</button>
      <button onClick={() => setPortionCounter(portionCounter - 1)}>-</button>
    </li>
  );
}
