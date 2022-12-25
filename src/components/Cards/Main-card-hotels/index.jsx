import React from "react";
import styles from "./hotelsCard.module.scss";
import img from "../../../img/Card/Rectangle 9.png";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';


import {ReactComponent as Heart} from "../../../img/Card/Vector.svg";



const HotelCard = () => {
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
          <button className={styles.heart}><Heart className={styles.imgS}/></button>

          <div className={styles.dosc}>
            <div className={styles.info}>
              <div className={styles.nameHome}>
                Old Vic Sharm Resort
                <div className={styles.city}>
                  Египет, Шарм-эль-Шейх, Наама Бей
                </div>
              </div>
              <div className={styles.nomer}>
                Чартер / c 04 октября / 7 ночей
              </div>
            </div>

            <motion.button className={styles.btn}
            initial={{ opacity: 0.9 }}
            whileHover={{
              scale: 1.1,
              // transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}>от 61 028 ₽ </motion.button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HotelCard;
