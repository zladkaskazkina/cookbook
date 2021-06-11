import React, { useEffect, useState } from "react";

const Ingredient = ({ name, id, sentName }) => {
  return (
    <li key={id}>
      {name} <button onClick={() => sentName(name)}>+</button>
    </li>
  );
};

export default Ingredient;
