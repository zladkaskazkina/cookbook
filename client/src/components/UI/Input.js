import React from "react";

export default function Input({
  label,
  name,
  onChange,
  value,
  required,
  type = "text",
}) {
  return (
    <div className="d-flex flex-column position-relative">
      {label && (
        <>
          <label className="mb-1 mt-3" htmlFor={name}>{`${label}:`}</label>

          {required && <span className="asterisk">*</span>}
        </>
      )}

      <input
        aria-label={name}
        type={type}
        id={name}
        name={name}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
