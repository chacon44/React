import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { BUTTON_TEXT, BUTTON_TYPE } from "./buttonStrings";
function Button({
  buttonText = BUTTON_TEXT.DEFAULT_TEXT,
  onClick,
  type = BUTTON_TYPE.BUTTON,
}) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Button;
