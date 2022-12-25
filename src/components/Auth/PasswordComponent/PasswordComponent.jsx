import React, { useState } from 'react';
import PhoneInput from "react-phone-number-input";
import styles from './PasswordComponent.module.scss'
import eye_off from '../../../img/fi_eye-off.png'
import eye_on from '../../../img/fi_eye-on.png'

const PasswordComponent = () => {

    const [password, setPassword] = useState("");
    const [eye, setEye] = useState(false)

    return (
        <div className={styles.password}>
            <p>пароль
                <img 
                src={eye === false ? eye_off : eye_on }
                onClick={() => setEye(!eye)}
                alt="" />
            </p>
            <input
                className={styles.password_input}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={eye === false ? 'password' : 'text'}
            />
        </div>
    );
};

export default PasswordComponent;