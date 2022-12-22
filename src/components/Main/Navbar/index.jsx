import { Link } from "react-router-dom";
import styles from "../Navbar/navbar.module.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul className={styles.list}>
          <li className={styles.item} tabIndex={1}>
            <Link to='/'>Туры</Link>
          </li>
          <li className={styles.item} tabIndex={2}>
            <Link to='/'>Отели</Link>
          </li>
          <li className={styles.item} tabIndex={3}>
            <Link to='/'>Авиа</Link>
          </li>
          <li className={styles.item} tabIndex={4}>
            <Link to='/'>Ж/Д</Link>
          </li>
          <li className={styles.item} tabIndex={5}>
            <Link to='/'>Трансферы</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
