import React from "react";

export default function Input({ label, name, onChange, value, required }) {
  return (
    <>
      {label && (
        <>
          <label htmlFor={name}>{`${label}:`}</label>

          {required && <span>*</span>}
        </>
      )}

      <input
        aria-label={name}
        type="text"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
