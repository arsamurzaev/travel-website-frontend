import React from 'react';
import styles from './navigation.module.scss';


export default function index() {
  return (
    <>
        <div className={styles.nav}>
            <button className={styles.btn}>Цены</button>
            <button className={styles.btn2}>Описание</button>
            <button className={styles.btn3}>На карте</button>
        </div>
    </>
  )
}
