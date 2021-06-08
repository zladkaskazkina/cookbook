import React from "react";
import { useState } from "react";

export default function Ingredient({ ingredientContent }) {
  const { name, quantity } = ingredientContent;
  const [portionCounter, setPortionCounter] = useState(1);
  return (
    <li key={name}>
      <p>{`${name}: ${quantity.amount * portionCounter} ${
        quantity.measure
      }`}</p>
      <p>Počet porce: {portionCounter}</p>
      <button onClick={() => setPortionCounter(portionCounter + 1)}>+</button>
      <button
        onClick={() =>
          setPortionCounter(portionCounter > 1 ? portionCounter - 1 : 1)
        }
      >
        -
      </button>
    </li>
  );
}
