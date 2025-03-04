import React from 'react';

function Input({ label, name, value, onChange, placeholder, prefix, suffix, required, id }) {
  return (
    <>
      <style>
        {`
          .input-container {
            box-sizing: border-box;
            flex: 1;
            padding: 0px 12px;
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;
            width: 100%;
          }

          .input-container label {
            font-size: 14px;
            margin-bottom: 8px;
            color: #333;
          }

          .input-wrapper {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 4px;
            overflow: hidden;
          }

          .input-wrapper input {
            flex: 1;
            padding: 8px;
            border: none;
            font-size: 16px;
          }

          .input-wrapper input:focus {
            outline: none;
          }

          .input-prefix, .input-suffix {
            background-color: #f0f0f0;
            padding: 8px;
            font-size: 14px;
            color: #666;
          }

          .required {
            color: red;
          }
        `}
      </style>
      <div className="input-container">
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <div className="input-wrapper">
          {prefix && <span className="input-prefix">{prefix}</span>}
          <input
            type="text"
            name={name} // Add the name prop here
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
          />
          {suffix && <span className="input-suffix">{suffix}</span>}
        </div>
      </div>
    </>
  );
}

export default Input;
