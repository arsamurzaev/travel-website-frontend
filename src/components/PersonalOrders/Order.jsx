import React from "react";
import styles from "./personalOrders.module.scss";

const Order = ({route,
  price,
  info}) => {
  return (
    <div className={styles.Order}>
      <div className={styles.row}>
        <div className={styles.label}>Заказ № </div>
        <div className={styles.status}></div>
      </div>
      <div className={styles.name}>Тур в {info.restType} </div>
      <div className={styles.info}>взрослых на ночей {info.restType}</div>
      <div className={styles.price}>{price} <span>Рублей</span></div>
      <button className={styles.details}>Посмотреть подробности</button>
    </div>
  );
};

export default Order;
