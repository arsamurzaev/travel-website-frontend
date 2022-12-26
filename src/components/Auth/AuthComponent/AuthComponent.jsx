import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailComponent from "../EmailComponent/EmailComponent";
import JoinInComponent from "../JoinInComponent/JoinInComponent";
import NameComponent from "../NameComponent/NameComponent";
import PasswordComponent from "../PasswordComponent/PasswordComponent";
import styles from "./AuthComponent.module.scss";

const AuthComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <EmailComponent />
      <PasswordComponent />

      <JoinInComponent />
    </div>
  );
};

export default AuthComponent;
