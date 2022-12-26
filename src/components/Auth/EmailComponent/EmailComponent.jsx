import React, { useState } from 'react';
import styles from './EmailComponent.module.scss'

const EmailComponent = () => {
    const [mail, setMail] = useState('')
    const [errMail, setErrMail] = useState(false)
    


    // handlers 
    const handleErrMail = async (e) => {
        // карочет вохможно хендлер заменим ответом с бэка

    }

    return (
        <div className={styles.mail}>
            <p>E-mail</p>
            <input
                className={styles.mail_input}
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                type="text"
            />
            {errMail && <p className={styles.errMail}>Ошибка ввода пароля</p>}
        </div>
    );
};

export default EmailComponent;