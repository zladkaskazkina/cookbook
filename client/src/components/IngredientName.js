import React from "react";

const IngredientName = ({ name, id, sentSelectedIngredient }) => {
  return (
    <li key={id}>
      {name}
      <button
        onClick={(e) => {
          sentSelectedIngredient(name, id);
          e.target.parentNode.style.display = "none";
        }}
      >
        +
      </button>
    </li>
  );
};

export default IngredientName;
