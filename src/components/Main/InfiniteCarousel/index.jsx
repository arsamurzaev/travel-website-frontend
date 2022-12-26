import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../../img/InfifniteCarousel/Group 235.png";
import styles from "./infinitecarousel.module.scss";
import { motion } from 'framer-motion'

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
          <motion.button 
          initial={{ opacity: 0.9 }}
          whileHover={{
            scale: 1.1,
            // transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>{" "}
          </motion.button>
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
          <motion.button 
          initial={{ opacity: 0.9 }}
          whileHover={{
            scale: 1.1,
            // transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>{" "}
          </motion.button>
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
          <motion.button 
          initial={{ opacity: 0.9 }}
          whileHover={{
            scale: 1.1,
            // transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>{" "}
          </motion.button>
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
          <motion.button initial={{ opacity: 0.9 }}
            whileHover={{
              scale: 1.1,
              // transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }} className={styles.btn}>
            <Link to="/tours" className={styles.link}>
              Выбрать тур
            </Link>
          </motion.button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default InfifniteCarousel;
