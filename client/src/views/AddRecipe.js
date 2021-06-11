import React, { useEffect, useState } from "react";

import Ingredient from "../components/Ingredient";
import axios from "axios";

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [serverMessage, setServerMessage] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [value, setValue] = useState("");

  console.log("----------------------", serverMessage);

  useEffect(() => {
    axios.get(`http://localhost:5000/get-ingredients`).then((res) => {
      const finalData = res.data;
      const { msg, documents } = finalData;
      setIngredients(documents);
      setServerMessage(msg);
    });
  }, []);

  function getIngredientName(name) {
    setSelectedIngredient(name);
  }
  function handleAddIngredient() {
    axios.post(`http://localhost:5000/save-ingredient`).then((req, res) => {
      const finalData = req.data;
      console.log("req", req, "res", res, "finalData", finalData);
      const { msg } = finalData;
      setServerMessage(msg);
    });
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button onClick={handleAddIngredient}>Přidat material</button>
      <ul>
        {ingredients.map(({ name, _id }) => (
          <Ingredient name={name} id={_id} sentName={getIngredientName} />
        ))}
      </ul>
      <h3>{selectedIngredient}</h3>
    </div>
  );
};

export default AddRecipe;
