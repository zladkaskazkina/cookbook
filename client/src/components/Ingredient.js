import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

const measures = ["ml", "g", "ks", "lžíce", "stroužky", "hrst", "svázek"];

const Ingredient = ({
  name,
  sentChangedAmont,
  index,
  sentChangeMeasure,
  amount,
  measure,
}) => {
  return (
    <>
      {name}
      <input
        value={amount}
        type="number"
        onChange={(e) => {
          sentChangedAmont(e.target.value, index);
        }}
      />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {measure}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {measures.map((el) => (
            <Dropdown.Item
              as="button"
              onClick={() => sentChangeMeasure(el, index)}
            >
              {el}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Button>-</Button>
    </>
  );
};

export default Ingredient;
