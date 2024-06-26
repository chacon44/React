import React from "react";
import PropTypes from "prop-types";

import "./Input.module.css";

function Input(props) {
  const {
    placeholderText = "",
    onChange,
    labelText = "",
    value,
    name,
    type,
  } = props;

  return (
    <>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeholderText}
        onChange={onChange}
      />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Input;
