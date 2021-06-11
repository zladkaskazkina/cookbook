import React, { useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

const Ingredient = ({ name, id, sentName }) => {
  const { changeIngredient } = useContext(GlobalContext);
  return (
    <li key={id}>
      {name}
      <button
        onClick={() => {
          sentName(name);
          changeIngredient(name);
        }}
      >
        +
      </button>
    </li>
  );
};

export default Ingredient;
