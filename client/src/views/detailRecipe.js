import Ingredient from "../components/ingredient";
import Layout from "../components/layout";
import React from "react";
import { initialRecipesList } from "../views/mainPage";

export default function DetailRecipe({ location }) {
  const recipeId = location.pathname.replace("/recipes/", "");
  const recipe = initialRecipesList.filter((currRecipe) =>
    currRecipe.id.toString().includes(recipeId)
  );
  const { photoSrc, name, summary, method, ingredients } = recipe[0];
  return (
    <Layout>
      <img src={photoSrc} />
      <h1>{name}</h1>
      <h2>{summary}</h2>
      <br />
      <p> {method}</p>
      <ul>
        {ingredients.map((ingredient) => (
          <>
            <Ingredient ingredientContent={ingredient} />
          </>
        ))}
      </ul>
    </Layout>
  );
}
