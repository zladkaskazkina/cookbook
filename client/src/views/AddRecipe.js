import React, { useState } from "react";

import AddIngredients from "../components/AddIngredients";
import Dropdown from "react-bootstrap/Dropdown";
import Input from "../components/UI/Input";
import Recipe from "../models/recipe";
import axios from "axios";
import { env } from "../config";
import { useStore } from "../contexts/store";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipePepreparationTime, setRecipePepreparationTime] = useState(0);
  const [recipeCategory, setRecipeCategory] = useState("Vybrat kategorie");
  const [recipeMethod, setRecipeMethod] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const { addRecipe, categories } = useStore();

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

  function getIngredients(name, amount, measure) {}

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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {recipeCategory}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.map((caterory) => (
              <Dropdown.Item
                as="button"
                onClick={() => setRecipeCategory(caterory)}
              >
                {caterory}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <AddIngredients sentIngredients={getIngredients} />
        <input type="submit" value="Uložit recept" />
      </form>
    </div>
  );
}
