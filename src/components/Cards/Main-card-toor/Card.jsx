import React from "react";
import styles from "./CardMain.module.scss";
import img from "../../../img/Card/Rectangle 9.png";
import { Carousel } from "react-bootstrap";

const Card = () => {
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
            <div className={styles.city}>Абхазия, Пицунда</div>
            <div className={styles.nameHome}>"Эдем", гостевой дом</div>
            <div className={styles.nomer}>
              Bed & Breakfast | Двухместный номер
            </div>
          </div>

          <button className={styles.btn}>от 61 028 ₽ </button>
        </div>
      </div>
    </>
  );
};

export default Card;
