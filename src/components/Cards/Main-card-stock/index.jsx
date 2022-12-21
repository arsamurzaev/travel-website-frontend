import styles from "./stockCard.module.scss";
import img from "../../../img/Stockcard/Rectangle 39.png";
import { Link } from "react-router-dom";

const StockCard = () => {
  return (
    <Link>
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.date}>Бессрочная</div>
          <div className={styles.title}>
            ОАЭ: отель Atlantis The Palm 5* со скидкой 10000₽
          </div>
        </div>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default StockCard;
