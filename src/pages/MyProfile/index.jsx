import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import PersonalData from "../../components/personalData/personalData";
import PersonalFavorites from "../../components/PersonalFavorites/PersonalFavorites";
import PersonalOrders from "../../components/PersonalOrders/Index";
import styles from "./myProfile.module.scss";
//My profile
const MyProfile = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.sidebar}>
              <ul className={styles.list}>
                <li className={styles.items}>
                  <Link to="">Мои данные</Link>
                </li>
                <li className={styles.items}>
                  <Link to="orders">Мои заказы</Link>
                </li>
                <li className={styles.items}>
                  <Link to="favorites">Избранное</Link>
                </li>
              </ul>
            </div>
            <Routes>
              <Route path="/" element={<PersonalData />} />
              <Route path="/orders" element={<PersonalOrders/>} />
              <Route path="/favorites" element={<PersonalFavorites/>} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyProfile;
