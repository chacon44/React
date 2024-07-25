import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import styles from "./Header.module.css";
import { BUTTON_TEXT, HEADER_TEXT } from "./headerStrings";
import { PATH_URIS } from "../../constants";
import { getCurrentUserThunk, logoutUserThunk } from "../../store/user/thunk";
import { getToken, getUserIsAuth, getUserName } from "../../store/selectors";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const isUserLogged = useSelector(getUserIsAuth);
  const token = useSelector(getToken);

  const onLogoutHandler = () => {
    dispatch(logoutUserThunk(token));
    navigate(PATH_URIS.LOGIN);
  };

  useEffect(() => {
    if (isUserLogged && token) {
      dispatch(getCurrentUserThunk(token));
    }
  }, [isUserLogged, token, dispatch]);

  const displayName = token ? userName : HEADER_TEXT.NOT_LOGGED;
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.userBlock}>
        <h2 className={styles.user}>{displayName}</h2>
        {isUserLogged && (
          <Button
            buttonText={BUTTON_TEXT.LOGOUT}
            type={BUTTON_TYPE.BUTTON}
            onClick={onLogoutHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
