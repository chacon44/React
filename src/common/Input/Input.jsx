import React from "react";
import "./Input.css";

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
  );
};

export default Input;
