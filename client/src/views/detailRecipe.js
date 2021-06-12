import IngredientInRecipe from "../components/IngredientInRecipe";
import React, { useState } from "react";
import { useStore } from "../contexts/store";

export default function DetailRecipe({ location }) {
  const { recipes } = useStore();
  const [portionCounter, setPortionCounter] = useState(1);
  const recipeId = location.pathname.replace("/recipes/", "");
  const recipe = recipes.filter((el) => el._id.toString().includes(recipeId));
  const { photo, name, method, ingredients } = recipe[0];
  return (
    <>
      <img src={photo} />
      <h1>{name}</h1>
      <br />
      <p> {method}</p>
      <p className="text-center">Počet porce: {portionCounter}</p>
      <div className="filter-category">
        <button className="btn btn-secondary m-1"
          onClick={() =>
            setPortionCounter(portionCounter > 1 ? portionCounter - 1 : 1)
          }
        >-</button>
        <button className="btn btn-secondary m-1" onClick={() => setPortionCounter(portionCounter + 1)}>+</button>
      </div>
      <ul>
        {ingredients.map((ingredient) => (
          <>
            <IngredientInRecipe ingredientContent={ingredient} portion={ portionCounter }/>
          </>
        ))}
      </ul>
    </>
  );
}
