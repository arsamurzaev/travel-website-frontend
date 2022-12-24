import React from "react";
import { useState } from "react";
import Order from "./Order";
import styles from "./personalOrders.module.scss";

const PersonalOrders = () => {
  const [orders, setOrders] = useState(0)
  const handleOrderClick = (i) =>{
    setOrders(i)
  }
  console.log(orders);
  const list = ["Все", "Прошлые", "Актуальные", "Аннулированные"]
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
            {list.map((item, i)=>{
              return(
                <div onClick={()=> handleOrderClick(i)} className={styles.link}>{item}</div>
              )
            })}
            {/* 
            {/* <div className={styles.link}>Все</div>
            <div className={styles.link}>Прошлые </div>
            <div className={styles.link}>Актуальные</div>
            <div className={styles.link}>Аннулированные</div> */}
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
