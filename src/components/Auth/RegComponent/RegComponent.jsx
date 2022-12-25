import React from 'react';
import EmailComponent from '../EmailComponent/EmailComponent';
import JoinInComponent from '../JoinInComponent/JoinInComponent';
import NameComponent from '../NameComponent/NameComponent';
import PasswordComponent from '../PasswordComponent/PasswordComponent';
import styles from './RegComponent.module.scss'
const RegComponent = () => {
    return (
        <div className={styles.container}>
            <NameComponent />
            <EmailComponent />
            <PasswordComponent />
            <JoinInComponent /> 
        </div>
    );
};

export default RegComponent;