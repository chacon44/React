import React from "react";
import logo from "./logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImg} src={logo} alt="logo" />
      <span className={styles.logoText}>Courses</span>
    </div>
  );
}

export default Logo;
