import Slider from "react-slick";
import Card from "../../Cards/Main-card-toor/Card";
import styles from "./slider.module.scss";

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: true
      };
  return (
    <div>
      <Slider {...settings} className={styles.slider}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Slider>
    </div>
  );
};

export default CardSlider;
