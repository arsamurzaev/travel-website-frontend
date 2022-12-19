import React from 'react';
import hotel from "../../img/hotel.png";
import Carousel from 'react-bootstrap/Carousel';
import styles from "./HotelCard.module.scss";


const Slider = () => {
    return (
        <Carousel indicators={false} slide={false}>
            <Carousel.Item  >
                <img className={styles.image} src={hotel} alt="/" />
            </Carousel.Item>
            <Carousel.Item >
                <img  src={hotel} alt="/" />
            </Carousel.Item>
            <Carousel.Item >
                <img  src={hotel} alt="/" />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;