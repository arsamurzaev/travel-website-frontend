import styles from "./filtermenu.module.scss";
import { useState } from "react";
import { motion, Variants } from "framer-motion";



const FilterMenu = () => {
  return (
    <div className="container">
      <div className="filterMenu">
        <div className={styles.row}>
          <div className={styles.item}>
            <p>Откуда</p>
            <select name="" id="">
              <option value="">Москва</option>
            </select>
          </div>
          <div className={styles.item}>
            <p>Куда</p>
            <select name="" id="">
              <option value="">Турция</option>
            </select>
          </div>
          <div className={styles.item}>
            <p>Дата вылета</p>
            <input type="date" name="" id="" />
          </div>
          <div className={styles.item}>
            <p>Длительность</p>
            <select name="" id="">
              <option value="">3 дня</option>
            </select>
          </div>
          <div className={styles.item}>
          <p>Туристы</p>
            <select name="" id="">
              <option value="">2 взрослых</option>
            </select>
          </div>
          <button>Найти</button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
