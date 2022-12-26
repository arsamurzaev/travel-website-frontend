import React, { useState } from "react";

import styles from "./RegistrationAuth.module.scss";
import AuthComponent from "./AuthComponent/AuthComponent";
// images
import apple_log_img from "../../img/apple_logo.png";
import google_log_img from "../../img/google_logo.jpg";
import yandex_log_img from "../../img//yandex_logo.png";
import RegComponent from "./RegComponent/RegComponent";

const Registration = () => {
  const [authReg, setAuthReg] = useState("Авторизация");

  // Функции

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.reg_card}>
            <div className={styles.close_block}>
              <div className={styles.close}>✕</div>
            </div>

            <h1 className={styles.h1}>
              {authReg === "Авторизация" ? "Авторизация" : "Регистрация"}
            </h1>

            <div className={styles.auth_reg_flex}>
              <div className={styles.auth_reg}>
                <div
                  className={
                    authReg === "Авторизация"
                      ? styles.selected
                      : styles.not_selected
                  }
                  onClick={() => setAuthReg("Авторизация")}
                >
                  Авторизация
                </div>
                <div
                  className={
                    authReg === "Регистрация"
                      ? styles.selected
                      : styles.not_selected
                  }
                  onClick={() => setAuthReg("Регистрация")}
                >
                  Регистрация
                </div>
              </div>
            </div>

            <div className={styles.center}>
              {authReg === "Авторизация" ? (
                <AuthComponent />
              ) : (
                <RegComponent setAuthReg={setAuthReg} />
              )}

              <div className={styles.or}>
                <div></div>
                <span>или</span>
                <div></div>
              </div>

              <div className={styles.social_clubs}>
                <img src={apple_log_img} alt="/" />
                <img src={google_log_img} alt="" />
                <img src={yandex_log_img} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.h1}>
        {authReg === "Авторизация" ? "Авторизация" : "Регистрация"}
      </h1>

      <div className={styles.auth_reg_flex}>
        <div className={styles.auth_reg}>
          <div
            className={
              authReg === "Авторизация" ? styles.selected : styles.not_selected
            }
            onClick={() => setAuthReg("Авторизация")}
          >
            Авторизация
          </div>
          <div
            className={
              authReg === "Регистрация" ? styles.selected : styles.not_selected
            }
            onClick={() => setAuthReg("Регистрация")}
          >
            Регистрация
          </div>
        </div>
      </div>

      <div className={styles.center}>
        {authReg === "Авторизация" ? <AuthComponent /> : <RegComponent />}

        <div className={styles.or}>
          <div></div>
          <span>или</span>
          <div></div>
        </div>

        <div className={styles.social_clubs}>
          <img src={apple_log_img} alt="/" />
          <img src={google_log_img} alt="" />
          <img src={yandex_log_img} alt="/" />
        </div>
      </div>
    </>
  );
};

export default Registration;
