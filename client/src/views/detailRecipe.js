import IngredientInRecipe from "../components/IngredientInRecipe";
import React from "react";
import { useStore } from "../contexts/store";

export default function DetailRecipe({ location }) {
  const { recipes } = useStore();
  const recipeId = location.pathname.replace("/recipes/", "");
  const recipe = recipes.filter((el) => el._id.toString().includes(recipeId));
  const { photo, name, summary, method, ingredients } = recipe[0];
  return (
    <>
      <img src={photo} />
      <h1>{name}</h1>
      <h2>{summary}</h2>
      <br />
      <p> {method}</p>
      <ul>
        {ingredients.map((ingredient) => (
          <>
            <IngredientInRecipe ingredientContent={ingredient} />
          </>
        ))}
      </ul>
    </>
  );
}
