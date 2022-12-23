import React from 'react';
import styles from './JoinInComponent.module.scss'
const JoinInComponent = () => {
    return (
        <div className={styles.button_center}>
            <button className={styles.button}>
                Войти
            </button>
        </div>
    );
};

export default JoinInComponent;