import React, { useState } from "react";

import AddIngredients from "../components/AddIngredients";
import Button from "react-bootstrap/Button";
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
  const [show, setShow] = useState(false);
  const [isEmptyIngredients, setIsEmptyIngredients] = useState(false);
  const [isEmptyCategory, setIsEmptyCategory] = useState(false);

  useRecipes();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { addRecipe, categories } = useStore();

  function getSelectedIngredients(ingredients) {
    setIngredients(ingredients);
    if (ingredients.length) {
      setIsEmptyIngredients(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (recipeCategory === "Vybrat kategorie") {
      setIsEmptyCategory(true);
      return;
    }
    if (!ingredients.length) {
      setIsEmptyIngredients(true);
      return;
    }
    addRecipe(
      new Recipe({
        name: recipeName,
        method: recipeMethod,
        preparationTime: recipePepreparationTime,
        ingredients: ingredients,
      })
    );
    axios
      .post(`${env.APIURL}/save-recipe`, {
        name: recipeName,
        preparationTime: recipePepreparationTime,
        photo: recipePhoto,
        method: recipeMethod,
        category: recipeCategory,
        ingredients: ingredients,
      })
      .then((response) => console.log(response));
  }

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
            type="number"
            onChange={(e) => {
              setRecipePepreparationTime(e.target.value);
            }}
            label="doba přípravy v minutách"
          />
          {/* http://placekitten.com/200/100 */}
          <Input
            label="přidat odkaz na obrázek"
            value={recipePhoto}
            onChange={(e) => {
              setRecipePhoto(e.target.value);
            }}
          />
          {recipePhoto && <img src={recipePhoto} />}
          <div className="d-flex flex-column position-relative">
            <label className="mt-3"> pridat popis</label>
            <span class="asterisk">*</span>
            <textarea
              value={recipeMethod}
              className="mb-4"
              required
              rows="5"
              onChange={(e) => {
                setRecipeMethod(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {recipeCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((caterory) => (
                  <Dropdown.Item
                    onClick={() => {
                      setRecipeCategory(caterory);
                      setIsEmptyCategory(false);
                    }}
                  >
                    {caterory}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            {isEmptyCategory && (
              <span class="error-text">Vyberte kategorie</span>
            )}
          </div>
        </div>
        <div className="align-center d-flex flex-column my-5 text-center">
          <Button variant="primary" onClick={handleShow}>
            Přidat suroviny
          </Button>

          <AddIngredients
            sentIngredients={getSelectedIngredients}
            show={show}
            handleClose={handleClose}
          />
          {isEmptyIngredients && (
            <span class="error-text">Přidejte surovinu</span>
          )}
        </div>
        <input
          className="btn btn-dark btn-lg"
          type="submit"
          value="Uložit recept"
        />
      </form>
    </div>
  );
}
