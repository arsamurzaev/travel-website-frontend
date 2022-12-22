import React from "react";
import styles from "./cartTour.module.scss";

const CartTour = () => {

  return (
    <div className={styles.cart__container}>
      <div className={styles.cart__items}>
        <div className={styles.cart__slader}>
          <img src="/assets/Rectangle.png" alt="none" />
        </div>
        <div className={styles.cart__content}>
          <div className={styles.cart__frame}>
            <div className={styles.cart__favorite}>
              <img src="/assets/Favorite.svg" alt="" />
              <img src="/assets/Favorite.svg" alt="" />
              <img src="/assets/Favorite.svg" alt="" />
              <img src="/assets/Favorite.svg" alt="" />
            </div>
            <p>Belkon Hotel</p>
            <span>Турция, Белек, Белек Центр</span>
            <div className={styles.cart__frame_class}>
              <div className={styles.class__bus}>
                <img src="/assets/bus.png" alt="none" />
                <span>Shuttle-bus до пляжа</span>
              </div>
              <div className={styles.class__spa}>
                <img src="/assets/spa.svg" alt="none" />
                <span>SPA</span>
              </div>
              <div className={styles.class__location}>
                <img src="/assets/notime.svg" alt="notime.svg" />
                <span>Тихое расположение</span>
              </div>
            </div>
          </div>
          <div className={styles.cart__also}>
            <ul>
              <li>Мгновенное подтверждение</li>
              <li>Оздоровительный SPA отдых</li>
              <li>Пляжный отдых</li>
            </ul>
          </div>
          <div className={styles.cart__total}>
            <ul>
              <li>
                <img src="/assets/plane.svg" alt="plane" /> <span>12 окт</span>
              </li>
              <li>2 взрослых</li>
              <li>7 ночей</li>
            </ul>
            <button>от 80 665 ₽</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTour;
