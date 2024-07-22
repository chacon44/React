import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/user/actions";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import styles from "./Header.module.css";
import { BUTTON_TEXT, HEADER_TEXT } from "./headerStrings";
import { PATH_URIS } from "../../constants";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";
import { getCurrentUserThunk } from "../../store/user/thunk";
import { logoutUserAPI } from "../../services";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.name);
  const isUserLogged = useSelector((state) => state.user.isAuth);
  const token = useSelector((state) => state.user.token);

  async function onLogoutHandler() {
    await logoutUserAPI(token);
    dispatch(removeUser());
    navigate(PATH_URIS.LOGIN);
  }

  useEffect(() => {
    if (isUserLogged && token) {
      dispatch(getCurrentUserThunk(token));
    }
  }, [isUserLogged, token, dispatch]);

  const displayName = isUserLogged
    ? userName || HEADER_TEXT.NO_NAME
    : HEADER_TEXT.NOT_LOGGED;
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.userBlock}>
        <h2 className={styles.user}>{userName || displayName}</h2>
        {isUserLogged && (
          <Button
            buttonText={BUTTON_TEXT.LOGOUT}
            type={BUTTON_TYPE.BUTTON}
            onClick={onLogoutHandler}
          />
        )}
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
