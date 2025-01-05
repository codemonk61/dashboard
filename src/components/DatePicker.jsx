import React, { useState } from "react";
import ChevronDown from "./icons/ChevronDown";
import Calendar from "./icons/Calendar";

const DatePicker = ({id, onChange, value}) => {

  return (
    <>
    <style>
        {
            `
            .date-picker-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
    padding: 0px 12px;
}

/* Label styling */
.date-picker-label {
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
  margin-bottom: 5px;
}

.required {
  color: red;
}

/* Wrapper for input and icons */
.date-picker-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  background-color: #fff;
  padding: 5px 10px;
}

/* Calendar icon on the left */
.calendar-icon {
  font-size: 18px;
  color: #6c757d;
  margin-right: 10px;
  pointer-events: none; /* Icon is non-interactive */
}

/* Input field styling */
.date-picker-input {
  flex-grow: 1;
  border: none;
  padding: 10px;
  font-size: 14px;
  color: #4a4a4a;
  background-color: transparent;
  outline: none;
  appearance: none; /* Remove native date picker styles */
  -webkit-appearance: none; /* Remove styles for Safari */
}

.date-picker-input::-webkit-calendar-picker-indicator {
  display: none; /* Remove default calendar icon */
}

.date-picker-input::placeholder {
  color: #c6c6c6;
}

/* Custom dropdown button on the right */
.custom-dropdown-icon {
  background: none;
  border: none;
  color: #6c757d;
  font-size: 12px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
}
            `
        }
    </style>
    <div className="date-picker-container">
      <label htmlFor="invoice-due-date" className="date-picker-label">
        Invoice Due Date <span className="required">*</span>
      </label>
      <div className="date-picker-wrapper">
        <span className="calendar-icon">
          <Calendar/>
        </span>
        <input
          type="date"
          id={id}
          value={value}
          onChange={onChange}
          className="date-picker-input"
        />
        <button
          type="button"
          className="custom-dropdown-icon"
          onClick={() => document.getElementById(`${id}`).showPicker()} // Trigger the native date picker
        >
          <ChevronDown/>
        </button>
      </div>
    </div>
    </>
  );
};

export default DatePicker;
