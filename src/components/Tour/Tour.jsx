import React from 'react';
import styles from './tour.module.scss'
import CartTour from './CartTour';
import CallTour from "./CallTour"
const Tour = () => {
    return (
        <div className={styles.tour_container}>
            <CartTour />
            <CartTour />
            <CartTour />
            <CartTour />
            <div className={styles.call_tour}>
            <CallTour />

            </div>
        </div>
    );
};

export default Tour;