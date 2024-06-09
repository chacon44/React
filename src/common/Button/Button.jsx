import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick, type = 'button' }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {buttonText}
    </button>
  );
};

export default Button;
