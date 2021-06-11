import React, { useEffect, useState } from "react";

import Ingredient from "./Ingredient";
import axios from "axios";
import { env } from "../config";

const AddIngredient = () => {
  const [ingredients, setIngredients] = useState([]);
  const [serverMessage, setServerMessage] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get(`${env.APIURL}/get-ingredients`).then((res) => {
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
    axios.post(`${env.APIURL}/save-ingredient`).then((req, res) => {
      const finalData = req.data;

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

export default AddIngredient;
