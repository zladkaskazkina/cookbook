import React, { useEffect, useState } from "react";

import IngredientInRecipe from "../components/IngredientInRecipe";
import { useRecipes } from "../customHooks/useRecipes";
import { useStore } from "../contexts/store";

export default function DetailRecipe({ location }) {
  const [portionCounter, setPortionCounter] = useState(1);
  const [currentRecept, setCurrentRecept] = useState(null);
  useRecipes();
  const { recipes } = useStore();
  const recipeId = location.pathname.replace("/recipes/", "");

  useEffect(() => {
    if (recipes.length) {
      setCurrentRecept(
        ...recipes.filter((el) => el._id.toString().includes(recipeId))
      );
    }
  }, [recipes]);

  return (
    currentRecept && (
      <>
        <div className="bg-secondary px-3 py-4 row">
          <div className="col detail__image-placehodler">
            <img src={currentRecept.photo} />
          </div>
          <div className="col pl-3">
            <h1 className="text-white mb-4">{currentRecept.name}</h1>
            <p> {currentRecept.method}</p>
          </div>
        </div>
        <h4 className="text-center mt-4">Počet porce: {portionCounter}</h4>
        <div className="filter-category text-center">
          <button
            className="btn btn-secondary m-1"
            onClick={() =>
              setPortionCounter(portionCounter > 1 ? portionCounter - 1 : 1)
            }
          >
            -
          </button>
          <button
            className="btn btn-secondary m-1"
            onClick={() => setPortionCounter(portionCounter + 1)}
          >
            +
          </button>
        </div>
        <ul className="text-center mt-3">
          {currentRecept.ingredients.map((ingredient) => (
            <>
              <IngredientInRecipe
                ingredientContent={ingredient}
                portion={portionCounter}
              />
            </>
          ))}
        </ul>
      </>
    )
  );
}
