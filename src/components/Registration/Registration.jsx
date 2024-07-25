import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

import { GLOBAL_PARAMETERS, PATH_URIS } from "../../constants";
import classes from "./Registration.module.css";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  LABEL_TEXT,
  ALERT_TEXT,
  HEADER_TEXT,
  LINK_TEXT,
} from "./registrationStrings";
import { registerUserThunk } from "../../store/user/thunk";

const Registration = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  function isValidUserData() {
    if (typeof userName !== "string" || userName.trim() === "") {
      alert(ALERT_TEXT.INVALID_NAME);
      return false;
    }
    if (typeof userEmail !== "string" || userEmail.trim() === "") {
      alert(ALERT_TEXT.INVALID_EMAIL);
      return false;
    }
    if (
      typeof userPassword !== "string" ||
      userPassword.length <= GLOBAL_PARAMETERS.PASSWORD_LENGTH
    ) {
      alert(ALERT_TEXT.INVALID_PASSWORD);
      return false;
    }
    return true;
  }

  async function registrationOnSubmitHandler(e) {
    e.preventDefault();
    if (!isValidUserData()) {
      return;
    }

    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    const result = await dispatch(registerUserThunk(newUser));
    if (result.success) {
      setIsRegistered(true);
    }
  }

  return (
    <div className={classes.formWrapper}>
      <form
        className={classes.registrationForm}
        onSubmit={registrationOnSubmitHandler}
      >
        <h3>{HEADER_TEXT.REGISTRATION}</h3>
        <div>
          <Input
            name="registrationUserName"
            labelText={LABEL_TEXT.NAME}
            type="text"
            value={userName}
            placeholderText={PLACEHOLDER_TEXT.ENTER_NAME}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <Input
            name="registrationUserEmail"
            labelText={LABEL_TEXT.EMAIL}
            type="email"
            value={userEmail}
            placeholderText={PLACEHOLDER_TEXT.ENTER_EMAIL}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            name="registrationUserPass"
            labelText={LABEL_TEXT.PASSWORD}
            type="password"
            value={userPassword}
            placeholderText={PLACEHOLDER_TEXT.ENTER_PASSWORD}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>

        <Button type="submit" buttonText={BUTTON_TEXT.REGISTER} />
        {isRegistered && <Link to={PATH_URIS.LOGIN}></Link>}
        <h4>
          <span>{LINK_TEXT.LOGIN_PROMPT}</span>
          <Link to={PATH_URIS.LOGIN}>{LINK_TEXT.LOGIN}</Link>
        </h4>
      </form>
    </div>
  );
};

export default Registration;
