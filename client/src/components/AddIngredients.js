import React, { useEffect, useReducer, useState } from "react";

import Button from "react-bootstrap/Button";
import Ingredient from "./Ingredient";
import IngredientName from "./IngredientName";
import Input from "./UI/Input";
import Modal from "react-bootstrap/Modal";
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
        ...state.map(function (el, i) {
          if (i === index) {
            return {
              name: state[index].name,
              quantity: {
                amount: amount,
                measure: state[index].quantity.measure,
              },
            };
          } else {
            return el;
          }
        }),
      ];
    case "CHANGE_MEASURE":
      return [
        ...state.map(function (el, i) {
          if (i === index) {
            return {
              name: state[index].name,
              quantity: {
                amount: state[index].quantity.amount,
                measure: measure,
              },
            };
          } else {
            return el;
          }
        }),
      ];
    case "DELETE_INGREDIENT":
      return [...state.filter((el, i) => i !== action.payload)];
    default:
      return state;
  }
}

const AddIngredients = ({ sentIngredients, show, handleClose }) => {
  const [selectedIngredients, dispatch] = useReducer(reducer, initialState);
  const [ingredients, setIngredients] = useState([]);
  const [value, setValue] = useState("");
  const [isUseEffectUpdate, setIsUseEffectUpdate] = useState(false);
  useEffect(() => {
    axios.get(`${env.APIURL}/get-ingredients`).then((res) => {
      const finalData = res.data;
      const { documents } = finalData;
      setIngredients(documents);
    });
    setIsUseEffectUpdate(false);
  }, [isUseEffectUpdate]);

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

  function getSelectedIngredient(name) {
    dispatch({ type: "ADD_INGREDIENT", payload: name });
  }

  const handleRemoveIngredient = (index) =>
    dispatch({
      type: "DELETE_INGREDIENT",
      payload: index,
    });

  function handleAddIngredients() {
    axios
      .post(`${env.APIURL}/save-ingredient`, { name: value })
      .then((response) => console.log(response));
    setIsUseEffectUpdate(true);
  }

  function handleSaveChanges() {
    sentIngredients(selectedIngredients);
    handleClose();
  }

  function isMutchFulter(ingredient) {
    console.log(ingredient);
    if (!value || !ingredient.name) return true;
    return ingredient.name
      .toLocaleLowerCase()
      .includes(value.toLocaleLowerCase());
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <div className="d-flex justify-center mb-4">
            <Input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Button onClick={handleAddIngredients} className="ml-2">
              Přidat surovinu
            </Button>
          </div>
          {ingredients.length && (
            <ul className="d-flex flex-wrap m-auto container justify-center">
              {ingredients.filter(isMutchFulter).map(({ name, _id }) => (
                <IngredientName
                  name={name}
                  id={_id}
                  sentSelectedIngredient={getSelectedIngredient}
                />
              ))}
            </ul>
          )}
          <ul className="align-center d-flex flex-column mt-4">
            {selectedIngredients.map((ingredient, index) => (
              <li
                key={ingredient._id}
                className="align-center d-f d-flex font-weight-bold mb-2"
              >
                <Ingredient
                  index={index}
                  name={ingredient.name}
                  amount={ingredient.quantity.amount}
                  measure={ingredient.quantity.measure}
                  sentChangedAmont={handleChangeAmount}
                  sentChangeMeasure={handleChangeMeasure}
                  sentToDelete={handleRemoveIngredient}
                />
              </li>
            ))}
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Zavřit
        </Button>
        <Button variant="primary" onClick={() => handleSaveChanges()}>
          Uložit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddIngredients;
