import React from "react";
import Order from "./Order";
import styles from "./personalOrders.module.scss";

const PersonalOrders = () => {
  return (
      <div className={styles.PersonalOrders}>
        <div className={styles.subInfo}>
          <p>
            Телефон отдела продаж: <span>7 992 345-40-87</span>
          </p>
          <p>
            Email: <span>online@fstravel.com</span>
          </p>
        </div>
        <div className={styles.orders}>
          <h2 className={styles.title}>Мои заказы</h2>
          <div className={styles.navbar}>
            <div className={styles.link}>Все</div>
            <div className={styles.link}>Прошлые </div>
            <div className={styles.link}>Актуальные</div>
            <div className={styles.link}>Аннулированные</div>
          </div>
          <div className={styles.items}>
            <Order />
          </div>
          <div className={styles.documents}></div>
        </div>
      </div>
  );
};

export default PersonalOrders;
