import React, { useEffect, useState } from "react";

import RecipeList from "../components/recipeList";
import { useRecipes } from "../customHooks/useRecipes";
import { useStore } from "../contexts/store";

const Main = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [filterList, setFilterList] = useState([]);
  useRecipes();
  const { recipes, categories } = useStore();

  const handleChange = (event) => {
    setSearchRecipe(event.target.value);
  };

  function isMathFilter(recipe) {
    console.log(recipe.name)
    return (
      recipe.name
        .toLocaleLowerCase()
        .includes(searchRecipe.toLocaleLowerCase()) &&
      (filterList.length? filterList.some((el) => el === recipe.category) : true)
    );
  }

  const resultRecipeList =
    (searchRecipe || filterList.length) ? recipes.filter(isMathFilter) : recipes;

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
          <h3 className="text-center">Vybrat kategorie:</h3>
          <ul className="filter-category">
            {categories.map((category, index) => (
              <li key={index} className="filter-item">
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
      <div className="d-flex align-center">
      <input
        className="text-center el-center"
        type="text"
        placeholder="vyhledávání"
        value={searchRecipe}
        onChange={handleChange}
      />
      </div>
      {recipes && <RecipeList recipes={resultRecipeList} />}
    </>
  );
};

export default Main;
