import React, { useEffect, useReducer, useState } from "react";

import Button from "react-bootstrap/Button";
import Ingredient from "./Ingredient";
import IngredientName from "./IngredientName";
import Input from "./UI/Input";
import axios from "axios";
import { env } from "../config";

const initialState = [];

function reducer(state, action) {
  const { amount, index, measure } = action.payload;
  switch (action.type) {
    case "ADD_INGREDIENT":
      return [
        ...state,
        { name: action.payload, quantity: { amount: 0, measure: "ml" } },
      ];
    case "CHANGE_AMOUNT":
      return [
        ...state.filter((el, i) => i !== index),
        {
          name: state[index].name,
          quantity: { amount: amount, measure: state[index].quantity.measure },
        },
      ];
    case "CHANGE_MEASURE":
      return [
        ...state.filter((el, i) => i !== index),
        {
          name: state[index].name,
          quantity: { amount: state[index].quantity.amount, measure: measure },
        },
      ];
    default:
      return state;
  }
}

const AddIngredients = ({ sentIngredients }) => {
  const [selectedIngredients, dispatch] = useReducer(reducer, initialState);
  const [ingredients, setIngredients] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    axios.get(`${env.APIURL}/get-ingredients`).then((res) => {
      const finalData = res.data;
      const { documents } = finalData;
      setIngredients(documents);
    });
  }, []);

  const handleChangeAmount = (amount, currIndex) =>
    dispatch({
      type: "CHANGE_AMOUNT",
      payload: { amount: amount, index: currIndex },
    });

  const handleChangeMeasure = (measure, currIndex) =>
    dispatch({
      type: "CHANGE_MEASURE",
      payload: { measure: measure, index: currIndex },
    });

  function getSelectedIngredient(name, id) {
    dispatch({ type: "ADD_INGREDIENT", payload: name });
  }

  function handleAddIngredients() {
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
      <Button onClick={handleAddIngredients}>Přidat material</Button>
      {ingredients.length && (
        <ul>
          {ingredients.map(({ name, _id }) => (
            <IngredientName
              name={name}
              id={_id}
              sentSelectedIngredient={getSelectedIngredient}
            />
          ))}
        </ul>
      )}
      <ul>
        {selectedIngredients.map((ingredient, index) => (
          <li key={ingredient._id} className="d-flex mb-2">
            <Ingredient
              index={index}
              name={ingredient.name}
              amount={ingredient.quantity.amount}
              measure={ingredient.quantity.measure}
              sentChangedAmont={handleChangeAmount}
              sentChangeMeasure={handleChangeMeasure}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddIngredients;
