import React, { useState } from "react";
import Dollar from "./icons/Dollar";
import Percentage from "./icons/Percentage";

const ToggleButton = ({ 
  options = [<Dollar fill="white"/>, <Percentage/>], 
  defaultSelected = 0, 
  onToggle 
}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleToggle = (index) => {
    setSelected(index);
    onToggle && onToggle(options[index]);
  };

  return (
    <>
    <style>
        {
            `
            .toggle-container {
  display: flex;
  background-color: #e9eef3;
  border-radius: 20px;
  padding: 4px;
  width: fit-content;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.toggle-option {
  flex: 1;
  padding: 8px 16px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 16px;
  cursor: pointer;
  color: #4a4a4a;
  transition: all 0.3s ease;
}

.toggle-option.active {
  background-color: #007bff;
  color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}

            `
        }
    </style>
    <div className="toggle-container">
      {options.map((option, index) => (
        <div
          key={index}
          className={`toggle-option ${selected === index ? "active" : ""}`}
          onClick={() => handleToggle(index)}
        >
          {option}
        </div>
      ))}
    </div>
    </>
  );
};

export default ToggleButton;
