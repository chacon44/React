import React from "react";
import "./Input.css";

<<<<<<< HEAD
const Input = ({ labelText, placeholderText, value, onChange }) => {
  return (
    <label className="input-label">
      {labelText}
      <br />
      <div className="input-container">
        <input
          className="custom-input"
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      </div>
    </label>
=======
const Input = ({ labelText, placeholderText, value, onChange, type = 'input' }) => {
  return (
    <div className="custom-input">
      <label>
        {labelText}
        <br />
        <input
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
          type={type}
        />
      </label>
    </div>
>>>>>>> Task1
  );
};

export default Input;
