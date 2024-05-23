import React from "react";
import "./Input.css";

const Input = ({ labelText, placeholderText, value, onChange }) => {
  return (
    <div className="custom-input">
      <label>
        {labelText}
        <br />
        <input
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
