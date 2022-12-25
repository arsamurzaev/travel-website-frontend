import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import logo_svg from "../../img/Header/logo.svg";
import phone_svg from "../../img/Header/phone.svg";
import like_svg from "../../img/Header/like.svg";
import user_svg from "../../img/Header/user.svg";
import basket_svg from "../../img/Header/basket.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchTour())
  }, [dispatch])
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo_svg} alt="" />
          <button>Подобрать тур</button>
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
            <Link to="/profile/orders"><img src={basket_svg} alt="" /></Link>
              
            </button>
            <Link to="/profile">
              <button>
                <img src={user_svg} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
