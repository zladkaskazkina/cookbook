import React, { useEffect, useState } from "react";

import Recipe from "../models/recipe";
import axios from "axios";
import { env } from "../config";
import { useStore } from "../contexts/store";

export const useRecipes = () => {
  const { storeRecipes, storeCategories } = useStore();

  useEffect(() => {
    axios.get(`${env.APIURL}/get-recipes`).then((res) => {
      const finalData = res.data;
      const { documents } = finalData;
      const dataRecipeList = documents.map((recipe) => new Recipe(recipe));
      storeRecipes(dataRecipeList);

      const categoriesUniqueObj = new Set(
        dataRecipeList.map((recipe) => recipe.category)
      );
      storeCategories([...categoriesUniqueObj]);
    });
  }, []);
};
