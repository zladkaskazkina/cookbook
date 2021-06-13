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
  sentToDelete,
  measure,
}) => {
  return (
    <>
      <span className="mr-2">{name}</span>
      <input
        value={Math.max(0, amount)}
        type="number"
        className="mr-2"
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
              key="el"
              as="button"
              onClick={() => sentChangeMeasure(el, index)}
            >
              {el}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Button onClick={() => sentToDelete(index)} className="btn-danger ml-2">
        -
      </Button>
    </>
  );
};

export default Ingredient;
