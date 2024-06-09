import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Header from "../Header/Header";
import "../../common/Styles/CommonStyles.css";
import "./Login.css";
import {
  BUTTON_TEXT,
  LABEL_TEXT,
  MESSAGES,
  OTHER,
  PLACEHOLDER_TEXT,
  URI,
  USER_INFO,
} from "../../helpers/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchLogin({ email, password });

      if (response.ok) {
        const result = await response.json();
        handleLoginSuccess(result);
      } else {
        handleLoginFailure(response.status);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(MESSAGES.UNEXPECTED_ERROR);
    }
  };

  const fetchLogin = async ({ email, password }) => {
    return await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  };

  const handleLoginSuccess = (result) => {
    if (result.successful && result.result) {
      const token = result.result.replace("Bearer ", "");
      localStorage.setItem(USER_INFO.USER_TOKEN, token);
      if (result.user && result.user.name) {
        localStorage.setItem(USER_INFO.USERNAME, result.user.name);
        localStorage.setUserName(result.user.name);
      }
      navigate(URI.COURSE_LIST);
    } else {
      console.error(MESSAGES.LOGIN_ERROR);
      setErrorMessage(MESSAGES.LOGIN_ERROR);
    }
  };

  const handleLoginFailure = (status) => {
    console.error(MESSAGES.LOGIN_FAILED, status);
    setErrorMessage(`Fail status: ${status}`);
  };

  return (
    <div className="vertical-aligner">
      <Header />
      <div className="full-screen-container">
        <div className="vertical-aligner">
          <div className="title-container">{LABEL_TEXT.LOGIN}</div>
          <form onSubmit={handleSubmit}>
            <Input
              labelText={LABEL_TEXT.USER_EMAIL}
              type="email"
              placeholderText={PLACEHOLDER_TEXT.USER_EMAIL}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              labelText={LABEL_TEXT.USER_PASSWORD}
              type="password"
              placeholderText={PLACEHOLDER_TEXT.USER_PASSWORD}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" buttonText={BUTTON_TEXT.LOGIN} />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div>
              {OTHER.REGISTER_TEXT}
              <Link to={URI.REGISTRATION} className="registration-button">
                {BUTTON_TEXT.REGISTER}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
