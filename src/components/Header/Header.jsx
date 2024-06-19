import { useNavigate } from "react-router-dom";

import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import { BUTTON_TEXT_LOGOUT } from "../../constants.js";

import styles from "./Header.module.css";

function Header({ userName, setUserName }) {
  const navigate = useNavigate();

  function onLogoutHandler() {
    localStorage.removeItem("token");
    setUserName("");
    navigate("/login");
  }

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.userBlock}>
        <h2 className={styles.user}>{userName || "No user logged"}</h2>
        {userName && <Button buttonText={"Logout"} onClick={onLogoutHandler} />}
      </div>
    </div>
  );
}

export default Header;
