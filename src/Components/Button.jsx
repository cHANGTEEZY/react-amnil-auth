import React from "react";

const Button = ({ type = "submit", disabled = false, children, className = "" }) => {
  return (
    <button
      type={type}
      className={`${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;