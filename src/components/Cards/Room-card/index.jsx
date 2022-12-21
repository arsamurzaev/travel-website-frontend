import React from 'react';
import styles from './RoomCard.module.scss';
import img from '../../../Images/Rectangle75.png'

export default function RoomCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.info}>
            <div className={styles.data}>
                <div className={styles.data_info}>
                    <div>14:10 - 21:00</div>
                    <div className={styles.den}>8 дней 7 ночей</div>
                </div>
                <div className={styles.user}>
                    <div className={styles.d}>D</div>
                </div>
            </div>
            <div className={styles.ikona}>
                <img src={img} alt="none" />
                <div className={styles.inf}>
                    <div className={styles.s}>Standard</div>
                    <div>2 ad tarif promo</div>
                    <div>78 | Turkey Antalya MOW</div>
                </div>
            </div>
            <div className={styles.all}>
                <span>AL</span>
                <span>All inclusive</span>
            </div>
        </div>
        <div className={styles.info2}>
            <button className={styles.btn}>Подробнее ∨</button>
            <div>80 666 ₽</div>
            <button className={styles.btn2}>В корзину</button>
        </div>
      </div>
    </>
  )
}
