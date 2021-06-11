import React, { useState } from "react";

import AddIngredient from "../components/AddIngredient";
import Input from "../components/UI/Input";
import Recipe from "../models/recipe";
import axios from "axios";
import { env } from "../config";
import { useStore } from "../contexts/store";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipePepreparationTime, setRecipePepreparationTime] = useState(0);
  const [recipeMethod, setRecipeMethod] = useState("");

  const { addRecipe, recipes } = useStore();
  console.log("context recipes", recipes);

  function handleSubmit(e) {
    e.preventDefault();
    addRecipe(
      new Recipe({
        name: recipeName,
        method: recipeMethod,
        preparationTime: recipePepreparationTime,
      })
    );
    axios
      .post(`${env.APIURL}/save-recipe`, {
        name: recipeName,
        preparationTime: recipePepreparationTime,
        method: recipeMethod,
      })
      .then((response) => console.log(response));
  }

  return (
    <div>
      <h1>Přidat recept</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="přidat název"
          value={recipeName}
          onChange={(e) => {
            setRecipeName(e.target.value);
          }}
        />
        <Input
          value={recipePepreparationTime}
          onChange={(e) => {
            setRecipePepreparationTime(e.target.value);
          }}
          label="doba připravy"
        />
        <label>
          pridat popis
          <textarea
            value={recipeMethod}
            rows="5"
            onChange={(e) => {
              setRecipeMethod(e.target.value);
            }}
          ></textarea>
        </label>
        {/** 1. add images to localStore
         *   2. switch betweeb categories,
         *   3. set when required
         *   4. search ingredients
         */}
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <AddIngredient />
    </div>
  );
}
