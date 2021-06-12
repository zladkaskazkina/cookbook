import Button from "react-bootstrap/Button";
import React from "react";

const IngredientName = ({ name, id, sentSelectedIngredient }) => {
  return (
    <li key={id} className="p-1">
      <Button
        onClick={(e) => {
          sentSelectedIngredient(name, id);
          e.target.parentNode.style.display = "none";
        }}
      >
        {name}
      </Button>
    </li>
  );
};

export default IngredientName;
