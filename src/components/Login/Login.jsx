import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/actions";
import { loginService } from "../../services";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { GLOBAL_PARAMETERS, PATH_URIS, ROLES } from "../../constants";
import classes from "./Login.module.css";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  LABEL_TEXT,
  ALERT_TEXT,
  HEADER_TEXT,
  LINK_TEXT,
} from "./loginStrings";
import { INPUT_TYPE } from "../../common/Input/inputStrings";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";
import { ADMIN_CREDENTIALS } from "../../constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState({});

  const adminEmail = ADMIN_CREDENTIALS.EMAIL;
  const adminPassword = ADMIN_CREDENTIALS.PASSWORD;
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return password.length >= GLOBAL_PARAMETERS.PASSWORD_LENGTH;
  }

  function isValidUserData() {
    const newErrors = {};
    if (!validateEmail(userEmail)) {
      newErrors.userEmail = ALERT_TEXT.INVALID_EMAIL;
    }
    if (!validatePassword(userPassword)) {
      newErrors.userPassword = ALERT_TEXT.INVALID_PASSWORD(
        GLOBAL_PARAMETERS.PASSWORD_LENGTH,
      );
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function loginOnSubmitHandler(e) {
    e.preventDefault();
    if (!isValidUserData()) {
      alert(ALERT_TEXT.FILL_ALL_FIELDS);
    } else {
      const user = {
        email: userEmail,
        password: userPassword,
        role: ROLES.USER,
      };

      try {
        const result = await loginService(user);
        if (result.successful) {
          if (user.email === adminEmail && user.password === adminPassword) {
            user.role = ROLES.ADMIN;
          }
          console.log("isAuth: ", user.isAuth);
          console.log("name: ", user.name);
          console.log("email: ", user.email);
          console.log("password: ", user.password);
          console.log("role: ", user.role);
          console.log("role: ", result.user.role);

          dispatch(
            setUser({
              isAuth: true,
              name: result.user.name,
              email: result.user.email,
              password: result.user.password,
              role: result.user.role,
              token: result.token,
            }),
          );
          console.log("isAuth: ", user.isAuth);

          navigate(PATH_URIS.COURSES_LIST);
        } else {
          alert(result.message || ALERT_TEXT.LOGIN_FAILED);
        }
      } catch (error) {
        alert(ALERT_TEXT.LOGIN_ERROR);
      }
    }
  }

  return (
    <div className={classes.formWrapper}>
      <form className={classes.loginForm} onSubmit={loginOnSubmitHandler}>
        <h3>{HEADER_TEXT.LOGIN}</h3>
        <div className={classes.inputBlock}>
          <Input
            name="loginUserEmail"
            labelText={LABEL_TEXT.EMAIL}
            type={INPUT_TYPE.EMAIL}
            value={userEmail}
            placeholderText={PLACEHOLDER_TEXT.ENTER_EMAIL}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          {errors.userEmail && (
            <div className={classes.error}>{errors.userEmail}</div>
          )}
        </div>
        <div className={classes.inputBlock}>
          <Input
            name="loginUserPass"
            labelText={LABEL_TEXT.PASSWORD}
            type={INPUT_TYPE.PASSWORD}
            value={userPassword}
            placeholderText={PLACEHOLDER_TEXT.ENTER_PASSWORD}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          {errors.userPassword && (
            <div className={classes.error}>{errors.userPassword}</div>
          )}
        </div>

        <Button
          type={BUTTON_TYPE.SUBMIT}
          buttonText={BUTTON_TEXT.LOGIN}
          onClick={loginOnSubmitHandler}
        />
        <h4>
          <span>{LINK_TEXT.REGISTRATION_PROMPT}</span>
          <Link to={PATH_URIS.REGISTRATION}>{LINK_TEXT.REGISTRATION}</Link>
        </h4>
      </form>
    </div>
  );
};

export default Login;
