import React from "react";
import styles from "./personalOrders.module.scss";

const Order = () => {
  return (
    <div className={styles.Order}>
      <div className={styles.row}>
        <div className={styles.label}>Заказ № </div>
        <div className={styles.status}></div>
      </div>
      <div className={styles.name}>Тур в </div>
      <div className={styles.info}>взрослых на ночей</div>
      <div className={styles.price}>Цена <span>Рублей</span></div>
      <button className={styles.details}>Посмотреть подробности</button>
    </div>
  );
};

export default Order;
