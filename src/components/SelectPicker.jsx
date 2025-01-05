import React from 'react';
import ChevronDown from './icons/ChevronDown';

function SelectPicker({ label, options, value, onChange, placeholder }) {
  return (
    <>
    <style>
        {
            `
            .select-picker {
            flex:1;
              padding: 0px 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.select-picker label {
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}

.select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.select-wrapper select {
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
  width: 100%;
}

.select-wrapper select:focus {
  border-color: #007bff;
  outline: none;
}

.select-wrapper .arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 14px;
  color: #333;
}
            `
        }
    </style>
    <div className="select-picker">
      <label>{label}</label>
      <div className="select-wrapper">
        <select value={value} onChange={onChange}>
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className="arrow">
          <ChevronDown/>
        </div>
      </div>
    </div>
    </>
  );
}

export default SelectPicker;