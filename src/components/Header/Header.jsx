import React from "react";
import "./Header.css";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button.jsx";

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
    </header>
  );
};

export default Header;
