import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import classes from './Login.module.css';
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  LABEL_TEXT,
  ALERT_TEXT,
  HEADER_TEXT,
  LINK_TEXT,
} from './loginStrings';

const Login = ({ setUserName }) => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function isValidUserData() {
    return userEmail && userPassword;
  }

  async function loginOnSubmitHandler(e) {
    e.preventDefault();
    if (!isValidUserData()) {
      alert(ALERT_TEXT.FILL_ALL_FIELDS);
    } else {
      const user = {
        email: userEmail,
        password: userPassword,
      };

      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.successful) {
        localStorage.setItem('token', JSON.stringify(result));
        setUserName(result.user.name);
        navigate('/courses');
      }
    }
  }

  return (
    <div className={classes.formWrapper}>
      <form className={classes.loginForm} onSubmit={loginOnSubmitHandler}>
        <h3>{HEADER_TEXT.LOGIN}</h3>
        <div className={classes.inputBlock}>
          <Input
            name='loginUserEmail'
            labelText={LABEL_TEXT.EMAIL}
            type='email'
            value={userEmail}
            placeholderText={PLACEHOLDER_TEXT.ENTER_EMAIL}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className={classes.inputBlock}>
          <Input
            name='loginUserPass'
            labelText={LABEL_TEXT.PASSWORD}
            type='password'
            value={userPassword}
            placeholderText={PLACEHOLDER_TEXT.ENTER_PASSWORD}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>

        <Button type='submit' buttonText={BUTTON_TEXT.LOGIN} />
        <h4>
          <span>{LINK_TEXT.REGISTRATION_PROMPT}</span>
          <Link to='/registration'>{LINK_TEXT.REGISTRATION}</Link>
        </h4>
      </form>
    </div>
  );
};

export default Login;