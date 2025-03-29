import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  name,
  label,
  value,
  onChange,
  className = "",
  error,
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
