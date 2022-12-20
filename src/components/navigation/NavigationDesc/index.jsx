import React from 'react';
import styles from './Navdesc.module.scss';


export default function index() {
  return (
    <>
        <div className={styles.nav}>
            <button className={styles.btn}>Цены</button>
            <button className={styles.btn2}>Описание</button>
            <button className={styles.btn3}>На карте</button>
        </div>
        <div className={styles.text}>
          <span className={styles.span}> <br />
          <span>Расположение</span> <br /> <br />
          <p>Центр города, район Лалели. В пешей доступности станция метро и<br /> площадь. Новый аэропорт Стамбула - 56 км.<br /> <br />
          До ближайших достопримечательностей: <br />
          - Площадь Таксим - 4 км <br />
          - Галатская Башня - 2,4 км <br />
          - Египетский базар - 1,5 км <br />
          - Собор Святой Софии - 2,1 км</p> <br />

          <span>Размещение</span> <br /> <br />
          <p>Всего в отеле 32 номера. <br /> <br />
          К размещению предлагаются номера категорий: <br />
          -Standard (20 кв.м, одна двуспальная или три односпальные кровати,  вид <br />на город, макс. 3 чел.) <br /> <br />

          Размещение с домашними животными запрещено.</p>

          <span>В номере</span>
          <p>- LCD ТВ <br />
          - Wi-Fi (бесплатно) <br />
          - мини-бар <br />
          - кондиционер <br />
          - фен <br />
          - телефон <br />
          - сейф <br />
          - душ <br />
          - уборка (ежедневно)</p>
          </span>
        </div>
    </>
  )
}