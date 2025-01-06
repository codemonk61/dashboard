import React from "react";

const Button = ({ appearance = "default", label, onClick, icon, type, block }) => {
  return (
    <>
    <style>
        {
            `
            /* Button container styles (unchanged) */
.custom-button {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Space between icon and label */
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Default appearance (unchanged) */
.custom-button.default {
  background-color: #fff;
  color: #000;
  border: 1px solid #c6c6c6;
}

.custom-button.default:hover {
  background-color: #f8f8f8;
  border-color: #b0b0b0;
}

/* Primary appearance (unchanged) */
.custom-button.primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.custom-button.primary:hover {
  background-color: #0056b3;
}

/* Icon styling */
.button-icon {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
            `
        }
    </style>
    <button
      className={`custom-button ${appearance === "primary" ? "primary" : "default"}`}
      onClick={onClick}
      type={type}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
    </>
  );
};

export default Button;
