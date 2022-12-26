import React, { useState } from "react";
import EmailComponent from "../EmailComponent/EmailComponent";
import JoinInComponent from "../JoinInComponent/JoinInComponent";
import PasswordComponent from "../PasswordComponent/PasswordComponent";
import styles from "./AuthComponent.module.scss";

const AuthComponent = () => {
  return (
    <div className={styles.container}>
      <EmailComponent />
      <PasswordComponent />

      <JoinInComponent />
    </div>
  );
};

export default AuthComponent;
