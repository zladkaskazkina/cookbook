import React, { useEffect, useState } from "react";

import Ingredient from "./Ingredient";
import Input from "../components/UI/Input";
import axios from "axios";
import { env } from "../config";

const AddIngredient = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get(`${env.APIURL}/get-ingredients`).then((res) => {
      const finalData = res.data;
      const { documents } = finalData;
      setIngredients(documents);
    });
  }, []);

  function getIngredientName(name) {
    setSelectedIngredient(name);
  }

  function handleAddIngredient() {
    axios
      .post(`${env.APIURL}/save-ingredient`, { name: value })
      .then((response) => console.log(response));
  }
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleAddIngredient}>Přidat material</button>
      {ingredients.length && (
        <ul>
          {ingredients.map(({ name, _id }) => (
            <Ingredient name={name} id={_id} sentName={getIngredientName} />
          ))}
        </ul>
      )}
      <h3>{selectedIngredient}</h3>
    </div>
  );
};

export default AddIngredient;
