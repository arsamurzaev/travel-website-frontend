import React from "react";
import styles from "./CardMain.module.scss";
// import { useDispatch } from 'react-redux'
import img from "../../../img/Card/Rectangle 9.png";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

// import { fetchTour } from "../../../app/features/tourSlice";
import { ReactComponent as Heart } from "../../../img/Card/Vector.svg";

const Card = ({ name, rooms, route, price }) => {
  const handleAddTourBasket = () => {
    alert(123);
  };
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

          <button className={styles.heart}>
            <Heart className={styles.imgS} />
          </button>

          <div className={styles.dosc}>
            <div className={styles.info}>
              <div className={styles.city}>{route[0].split(",")}</div>
              <div className={styles.nameHome}>{name}</div>
              <div className={styles.nomer}>
                Bed & Breakfast | {rooms}
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0.9 }}
              whileHover={{
                scale: 1.1,
                // transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              className={styles.btn}
              onClick={() => handleAddTourBasket()}
            >
              от 61 028 ₽
            </motion.button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
