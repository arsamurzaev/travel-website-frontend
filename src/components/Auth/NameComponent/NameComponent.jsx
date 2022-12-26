// ненужная хреьнт

import React, { useState } from 'react';
import styles from './NameComponent.module.scss'
const NameComponent = () => {

    const [name, setName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [lastName, setLastName] = useState("")

    return (
        <>

            <div className={styles.name}>
                <p>Имя</p>
                <input
                    className={styles.name_input}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
        </>
    );
};

export default NameComponent;