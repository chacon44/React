import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/user/actions";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import styles from "./Header.module.css";
import { BUTTON_TEXT, USER_LOGGED } from "./headerStrings";
import { PATH_URIS } from "../../constants";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.name);

  function onLogoutHandler() {
    dispatch(removeUser());
    navigate(PATH_URIS.LOGIN);
  }

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.userBlock}>
        <h2 className={styles.user}>{userName || USER_LOGGED.NO_USER}</h2>
        {userName && (
          <Button
            buttonText={BUTTON_TEXT.LOGOUT}
            type="button"
            onClick={onLogoutHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
