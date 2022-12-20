import React from "react";
import styles from "./hotelsCard.module.scss";
import img from "../../../img/Card/Rectangle 9.png";
import { Carousel } from "react-bootstrap";

const HotelCard = () => {
  return (
    <>
      <div className={styles.card}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="none" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="none" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="none" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="none" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="none" />
          </Carousel.Item>
        </Carousel>
        <button className={styles.heart}></button>

        <div className={styles.dosc}>
          <div className={styles.info}>
            <div className={styles.nameHome}>
              Old Vic Sharm Resort
              <div className={styles.city}>
                Египет, Шарм-эль-Шейх, Наама Бей
              </div>
            </div>
            <div className={styles.nomer}>Чартер / c 04 октября / 7 ночей</div>
          </div>

          <button className={styles.btn}>от 61 028 ₽ </button>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
