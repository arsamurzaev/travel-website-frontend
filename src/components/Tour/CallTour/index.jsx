import React from 'react';
import { useState } from 'react';
import styles from "./callTour.module.scss"
const CallTour = (value) => {
    const  listSort = [{raiting: "Популярности"}, {price:"Цена"}] 
    const sortName = listSort[value].name
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.content_container}>
                    <h1>Сложно сделать выбор?</h1>
                    <p>Подберём для вас лучший тур за несколько минут</p>
                   
                    <div className={styles.call__input}>
                    <div className={styles.call__text}>
                        <span>Номер телефона</span>
                        <p>+7 928 695 30 59</p>
                    </div>
                        <div className={styles.button}>  <button>Перезвонить</button></div>
                    </div>
                    <div className={styles.call__checkbox}>
                        <input type="checkbox" /> <span>Я согласен на обработку своих персональных данных согласно <br /> политике конфиденциальности</span></div>
                </div>
            <img src="/assets/foto.png" alt="" />         
            </div> 
        </div>
    );
};

export default CallTour;