import React from "react";
import "./Button.css";

<<<<<<< HEAD
const Button = ({ buttonText, onClick }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
=======
const Button = ({ buttonText, onClick, type = 'button' }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {buttonText}
    </button>
>>>>>>> Task1
  );
};

export default Button;
