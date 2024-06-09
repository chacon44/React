import React from "react";
import "./Input.css";

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
  );
};

export default Input;
