import React from 'react';
import Card from '../Cards/Main-card-toor/Card';
import styles from './personalFavorites.module.scss';

const PersonalFavorites = () => {
    return (
        <div className={styles.favorites}>
            <div className={styles.info_txt}>
                <p>Телефон отдела продаж: <span>7 992 345-40-87</span></p>
                <p>Email: <span>online@fstravel.com</span></p>
            </div>
            <div className={styles.favorite}>
                <div className={styles.title}>Избранное</div>
                <div className={styles.navbar}>
                    <div className={styles.link}>Туры</div>
                    <div className={styles.link}>Отели</div>
                </div>
                <div className={styles.card}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default PersonalFavorites;