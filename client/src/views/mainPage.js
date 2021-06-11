import React, { useEffect, useState } from "react";

import RecipeList from "../components/recipeList";
import { useRecipes } from "../customHooks/useRecipes";
import { useStore } from "../contexts/store";

//filter
// recipes.filter((el) => ["starter", "soup"].some(e=>e === el.category))

const Main = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [categories, setCategories] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  useRecipes();
  const { recipes } = useStore();

  useEffect(() => {
    const categoriesUniqueObj = new Set(
      recipes.map((recipe) => recipe.category)
    );
    setCategories([...categoriesUniqueObj]);
  }, []);

  const handleChange = (event) => {
    setSearchRecipe(event.target.value);
  };

  const resultRecipeList = searchRecipe
    ? recipes.filter((recipe) =>
        recipe.name
          .toLocaleLowerCase()
          .includes(searchRecipe.toLocaleLowerCase())
      )
    : recipes;

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
        <div className="filter-category">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                onChange={handleFilterChange}
                name={category}
              ></input>
              <span>
                <p>{category}</p>
              </span>
            </label>
          ))}
        </div>
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
