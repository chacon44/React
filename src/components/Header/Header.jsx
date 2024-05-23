import React from "react";
import "./Header.css";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button.jsx";
import { USER_INFO, BUTTON_TEXT } from "../../helpers/constants.js";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="user-info">
        <h2 className="user-name">{USER_INFO.USERNAME}</h2>
      </div>
      <Button buttonText={BUTTON_TEXT.LOGOUT} />
    </header>
  );
};

export default Header;
