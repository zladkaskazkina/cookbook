import React from "react";

const IngredientName = ({ name, id, sentName }) => {
  return (
    <li key={id}>
      {name}
      <button
        onClick={() => {
          sentName(name);
        }}
      >
        +
      </button>
    </li>
  );
};

export default IngredientName;
