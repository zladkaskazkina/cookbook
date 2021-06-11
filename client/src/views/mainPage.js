import React, { useEffect, useState } from "react";

import RecipeList from "../components/recipeList";
import { useRecipes } from "../customHooks/useRecipes";
import { useStore } from "../contexts/store";

const Main = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [filterList, setFilterList] = useState([]);
  useRecipes();
  const { recipes, categories } = useStore();
  const [checkedState, setCheckedState] = useState(null);

  useEffect(() => {
    if (categories.length) {
      setCheckedState(new Array(categories.length).fill(false));
    }
  }, [categories]);

  const handleChange = (event) => {
    setSearchRecipe(event.target.value);
  };

  function isMathFilter(recipe) {
    return (
      recipe.name
        .toLocaleLowerCase()
        .includes(searchRecipe.toLocaleLowerCase()) &&
      filterList.some((el) => el === recipe.category)
    );
  }

  const resultRecipeList =
    searchRecipe || filterList.length ? recipes.filter(isMathFilter) : recipes;

  const handleFilterChange = (e) => {
    const checkedCategory = e.target.name;

    setFilterList(
      e.target.checked
        ? [...filterList, ...[checkedCategory]]
        : filterList.filter((item) => item !== checkedCategory)
    );
  };

  return (
    <>
      {categories && (
        <>
          <h3>Vybrat categorie</h3>
          <ul className="filter-category">
            {categories.map((category, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    onChange={handleFilterChange}
                    name={category}
                  ></input>
                  <span>
                    <p>{category}</p>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </>
      )}
      <input
        className="text-center d-flex justify-center"
        type="text"
        placeholder="vyhledávání"
        value={searchRecipe}
        onChange={handleChange}
      />
      {recipes && <RecipeList recipes={resultRecipeList} />}
    </>
  );
};

export default Main;
