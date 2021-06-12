import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import IngredientModel from "../models/ingredient";
import IngredientName from "./IngredientName";
import Input from "./UI/Input";
import axios from "axios";
import { env } from "../config";

const AddIngredients = ({ sentIngredients }) => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredientsNames, setSelectedIngredientsNames] = useState([]);
  const [value, setValue] = useState("");
  const [measure, setMeasure] = useState("ml");
  const [amount, setAmount] = useState("0");

  const measures = ["ml", "g", "ks", "lžíce", "stroužky", "hrst", "svázek"];

  useEffect(() => {
    axios.get(`${env.APIURL}/get-ingredients`).then((res) => {
      const finalData = res.data;
      const { documents } = finalData;
      setIngredients(documents);
    });
  }, []);

  console.log(selectedIngredientsNames);

  function getIngredientName(name) {
    setSelectedIngredientsNames([...selectedIngredientsNames, name]);
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
            <IngredientName name={name} id={_id} sentName={getIngredientName} />
          ))}
        </ul>
      )}

      <ul>
        {selectedIngredientsNames.map((ingredient) => (
          <li>
            {ingredient}
            <input
              value={amount}
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {measure}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {measures.map((el) => (
                  <Dropdown.Item as="button" onClick={() => setMeasure(el)}>
                    {el}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>{" "}
            <Button>-</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddIngredients;
