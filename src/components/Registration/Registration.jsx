/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "../../common/Styles/CommonStyles.css";
import "./Registration.css";
import {
  BUTTON_TEXT,
  LABEL_TEXT,
  OTHER,
  PLACEHOLDER_TEXT,
  URI
} from "../../helpers/constants";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="vertical-aligner">
      <Header />
      <div className="full-screen-container">
        <div className="vertical-aligner">
          <div className="title-container">{LABEL_TEXT.REGISTRATION}</div>
          <Input
            labelText={LABEL_TEXT.USER_NAME}
            placeholderText={PLACEHOLDER_TEXT.USER_NAME}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            labelText={LABEL_TEXT.USER_EMAIL}
            placeholderText={PLACEHOLDER_TEXT.USER_EMAIL}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            labelText={LABEL_TEXT.USER_PASSWORD}
            placeholderText={PLACEHOLDER_TEXT.USER_PASSWORD}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button buttonText={BUTTON_TEXT.REGISTER} />
          <div>
            {OTHER.LOGIN_TEXT}
            <Link to={URI.LOGIN} className="login-button">
              {BUTTON_TEXT.LOGIN}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
