import React from 'react';
import styles from './NavigMap.module.scss';
import { YMaps, Map } from 'react-yandex-maps';


export default function index() {
  return (
    <>
        <div className={styles.nav}>
            <button className={styles.btn}>Цены</button>
            <button className={styles.btn2}>Описание</button>
            <button className={styles.btn3}>На карте</button>
        </div>
        <YMaps>
          <div>
            <Map defaultState={{center: [50.55, 30.35], zoom: 9}} />
          </div>
        </YMaps>

    </>
  )
}
