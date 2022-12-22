import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../../img/InfifniteCarousel/Group 235.png";
import styles from "./infinitecarousel.module.scss";

const InfifniteCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img} className="d-block w-100" alt="" />
        <Carousel.Caption className={styles.dBlock}>
          <h2 className={styles.title}>ГОРЯЩИЕ ТУРЫ</h2>
          <div className={styles.side}>Мальдивы</div>
          <p className={styles.text}>
            Бонус при размещении от 5 ночей в Fushifaru Maldives 5*
          </p>
          <button className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>{" "}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img} className="d-block w-100" alt="" />
        <Carousel.Caption className={styles.dBlock}>
          <h2 className={styles.title}>ГОРЯЩИЕ ТУРЫ</h2>
          <div className={styles.side}>Мальдивы</div>
          <p className={styles.text}>
            Бонус при размещении от 5 ночей в Fushifaru Maldives 5*
          </p>
          <button className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>{" "}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img} className="d-block w-100" alt="" />
        <Carousel.Caption className={styles.dBlock}>
          <h2 className={styles.title}>ГОРЯЩИЕ ТУРЫ</h2>
          <div className={styles.side}>Мальдивы</div>
          <p className={styles.text}>
            Бонус при размещении от 5 ночей в Fushifaru Maldives 5*
          </p>
          <button className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>{" "}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img} className="d-block w-100" alt="" />
        <Carousel.Caption className={styles.dBlock}>
          <h2 className={styles.title}>ГОРЯЩИЕ ТУРЫ</h2>
          <div className={styles.side}>Мальдивы</div>
          <p className={styles.text}>
            Бонус при размещении от 5 ночей в Fushifaru Maldives 5*
          </p>
          <button className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default InfifniteCarousel;
