import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

const Ingredient = ({ name, id, sentName }) => {
  const { changeIngredient } = useContext(GlobalContext);
  return (
    <li key={id}>
      {name}
      <button
        onClick={() => {
          sentName(name);
          console.log("name", name);
          changeIngredient(name);
        }}
      >
        +
      </button>
    </li>
  );
};

export default Ingredient;
