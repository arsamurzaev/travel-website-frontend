import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSignUp } from '../../../app/features/authSlice';
import EmailComponent from '../EmailComponent/EmailComponent';
import JoinInComponent from '../JoinInComponent/JoinInComponent';
// import NameComponent from '../NameComponent/NameComponent';
import PasswordComponent from '../PasswordComponent/PasswordComponent';
import styles from './RegComponent.module.scss'
// pictures
import eye_off from '../../../img/fi_eye-off.png'
import eye_on from '../../../img/fi_eye-on.png'

const RegComponent = ({setAuthReg}) => {
    const [firstName, setName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [lastName, setLastName] = useState("")
    // мейл
    const [mail, setMail] = useState('')
    const [errMail, setErrMail] = useState(false) // надо ли?
    // пассворд
    const [password, setPassword] = useState("");
    const [eye, setEye] = useState(false)

const signUp = useSelector(state=> state.authSlice.signUp)
if (signUp) {
    setAuthReg('Авторизация')
}
console.log(signUp);

    const dispatch = useDispatch()
    const handleSignUp = (e) => {
        e.preventDefault()
        dispatch(authSignUp({ mail, password, secondName, lastName,firstName }))
    }

    return (
        <div className={styles.container} >
            <form action={styles.form} onSubmit={(e)=>  handleSignUp(e)}>
                <div className={styles.name}>
                    <p>Имя</p>
                    <input
                        className={styles.name_input}
                        onChange={(e) => setName(e.target.value)}
                        value={firstName}
                        type="text"
                    />
                    

                    <div className={styles.display_flex}>
                        <div>
                            <p>Фамилия</p>
                            <input
                                className={styles.name_input}
                                onChange={(e) => setSecondName(e.target.value)}
                                value={secondName}
                                type="text"
                            />
                        </div>

                        <div>
                            <p>Отчество</p>
                            <input
                                className={styles.name_input}
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                type="text"
                            />
                        </div>

                    </div>

                </div>

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


                <div className={styles.password}>
                    <p>пароль
                        <img
                            src={eye === false ? eye_off : eye_on}
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


                <JoinInComponent />
            </form>
        </div>
    );
};

export default RegComponent;