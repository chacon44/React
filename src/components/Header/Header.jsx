import React from "react";
import "./Header.css";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button.jsx";
<<<<<<< HEAD

const Header = ({ username, showLogoutButton }) => {
  return (
    <header className="header">
      <Logo />
      {username && (
        <div className="user-info">
          <h2 className="user-name">{username}</h2>
        </div>
      )}
      {showLogoutButton && <Button buttonText="Logout" />}
=======
import { USER_INFO, BUTTON_TEXT } from "../../helpers/constants.js";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="user-info">
        <h2 className="user-name">{USER_INFO.USERNAME}</h2>
      </div>
      <Button buttonText={BUTTON_TEXT.LOGOUT} />
>>>>>>> Task1
    </header>
  );
};

export default Header;
