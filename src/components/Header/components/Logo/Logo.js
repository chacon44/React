import React from "react";
import "./Logo.css";
import logo from "./logo.png";
import { BANNER_TEXT } from "../../../../helpers/constants";

const Logo = () => {
  return (
    <div className="entire-container">
      <img src={logo} className="logo" alt="Web Logo" />
      <div className="banner">
        <h2 className="banner-content">{BANNER_TEXT.COURSES}</h2>
      </div>
    </div>
  );
};

export default Logo;
