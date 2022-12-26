import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo_svg from "../../img/Header/logo.svg";
import phone_svg from "../../img/Header/phone.svg";
import like_svg from "../../img/Header/like.svg";
import user_svg from "../../img/Header/user.svg";
import basket_svg from "../../img/Header/basket.svg";
import { Link } from "react-router-dom";
import Registration from "../Auth/RegistrationAuth";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(state => state.authSlice)

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo_svg} alt="" />
          </Link>
          <motion.button
            initial={{ opacity: 0.9 }}
            whileHover={{
              scale: 1.1,
              // transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            Подобрать тур
          </motion.button>
        </div>
        <div className={styles.infa}>
          <div className={styles.help}>
            <p>Служба поддержки</p>
          </div>
          <div className={styles.vector}>
            <img src={phone_svg} alt="" />
            <p>7 992 345-40-87</p>
          </div>
          <div className={styles.icons}>
            <button>
              <img src={like_svg} alt="" />
            </button>
            <button>
              <Link to="/profile/orders">
                <img src={basket_svg} alt="" />
              </Link>
            </button>
            <Link to={user ? "/profile" : "/auth/*"}>
              <button>{user ? <img src={user_svg} alt="" /> : "Войти"}</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
