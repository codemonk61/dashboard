import React from "react";
import ChevronDown from "./icons/ChevronDown";
import Calendar from "./icons/Calendar";

const DatePicker = ({ id, onChange, value, label, required }) => {
  return (
    <>
      <style>
        {`
          .date-picker-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            padding: 0px 12px;
          }

          .date-picker-label {
            font-size: 14px;
            font-weight: 500;
            color: #4a4a4a;
            margin-bottom: 5px;
          }

          .required {
            color: red;
          }

          .date-picker-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            border: 1px solid #c6c6c6;
            border-radius: 4px;
            background-color: #fff;
            padding: 5px 10px;
          }

          .calendar-icon {
            font-size: 18px;
            color: #6c757d;
            margin-right: 10px;
            pointer-events: none;
          }

          .date-picker-input {
            flex-grow: 1;
            border: none;
            padding: 10px;
            font-size: 14px;
            color: #4a4a4a;
            background-color: transparent;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
          }

          .date-picker-input::-webkit-calendar-picker-indicator {
            display: none;
          }

          .date-picker-input::placeholder {
            color: #c6c6c6;
          }

          .custom-dropdown-icon {
            background: none;
            border: none;
            color: #6c757d;
            font-size: 12px;
            cursor: pointer;
            padding: 0;
            margin-left: 10px;
          }
        `}
      </style>
      <div className="date-picker-container">
        <label htmlFor={id} className="date-picker-label">
          {label} {required && <span className="required">*</span>}
        </label>
        <div className="date-picker-wrapper">
          <span className="calendar-icon">
            <Calendar />
          </span>
          <input
            type="date"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)} // Pass only the value to Formik
            className="date-picker-input"
          />
          <button
            type="button"
            className="custom-dropdown-icon"
            onClick={() => document.getElementById(id)?.showPicker()} // Show native date picker
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
