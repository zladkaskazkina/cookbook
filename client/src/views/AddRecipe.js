import React, { useState } from "react";

import AddIngredients from "../components/AddIngredients";
import Dropdown from "react-bootstrap/Dropdown";
import Input from "../components/UI/Input";
import Recipe from "../models/recipe";
import axios from "axios";
import { env } from "../config";
import { useRecipes } from "../customHooks/useRecipes";
import { useStore } from "../contexts/store";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipePhoto, setRecipePhoto] = useState("");
  const [recipePepreparationTime, setRecipePepreparationTime] = useState(0);
  const [recipeCategory, setRecipeCategory] = useState("Vybrat kategorie");
  const [recipeMethod, setRecipeMethod] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useRecipes();

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
    <div className="text-center">
      <h1 className="text-center">Přidat recept</h1>
      <form onSubmit={handleSubmit}>
        <div className="align-center d-flex flex-column">
          <Input
            label="přidat název"
            required
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
          <Input
            label="přidat odkaz na obrázek"
            value={recipePhoto}
            onChange={(e) => {
              setRecipePhoto(e.target.value);
            }}
          />
          {recipePhoto && <img src={recipePhoto} />}
          <label> pridat popis</label>
          <textarea
            value={recipeMethod}
            className="mb-4"
            required
            rows="5"
            onChange={(e) => {
              setRecipeMethod(e.target.value);
            }}
          ></textarea>
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
        </div>
        <AddIngredients sentIngredients={getIngredients} />
        <input
          className="btn btn-dark btn-lg"
          type="submit"
          value="Uložit recept"
        />
      </form>
    </div>
  );
}
