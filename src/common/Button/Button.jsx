import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
