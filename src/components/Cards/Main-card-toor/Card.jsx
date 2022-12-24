import React from "react";
import styles from "./CardMain.module.scss";
// import { useDispatch } from 'react-redux'
import img from "../../../img/Card/Rectangle 9.png";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { fetchTour } from "../../../app/features/tourSlice";

const Card = ({creatorTour,
  hotelId,
  name,
  rooms,
  description,
  route,
  info,
  food,
  restType,
  beach,
  flight,
  price}) => {
 console.log(rooms);
    
  return (
    <>
      <div className={styles.card}>
       
        <Link>
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
              <div className={styles.city}>{route[0].split(",")}</div>
              <div className={styles.nameHome}>{name}</div>
              <div className={styles.nomer}>
                Bed & Breakfast | Двухместный номер
              </div>
            </div>

            <button className={styles.btn}>от {price} ₽ </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
