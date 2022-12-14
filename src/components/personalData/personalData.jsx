import React from "react";
import styles from "./personData.module.scss";
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";
import "react-phone-number-input/style.css"
import "./style.css"
const PersonalData = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header_txt}>
          <p>
            Телефон отдела продаж: <span>+7 928 695 30 59</span>
          </p>
          <p>
            Email: <span>martazanov2020@mail.ru</span>{" "}
          </p>
        </div>
        <h1>Мои данные</h1>
        <h3>Персональные данные</h3>
        <div className={styles.name}>
          <div className={styles.firstName_input}>
            <p>Фамилия</p>
            <input type="text" />
          </div>
          <div className={styles.secondName_input}>
            <p>Имя</p>
            <input type="text" />
          </div>
          <div className={styles.lastName_input}>
            <p>Отчество</p>
            <input type="text" />
          </div>
        </div>
        <div className={styles.inputs_contact}>
          <div className={styles.mail}>
            <p>E-mail</p>
            <input type="text" />
          </div>
          <div className={styles.number}>
            <p>Номер телефона</p>
            <PhoneInput
              className="phoneInput"
              international
              defaultCountry="RU"
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
        </div>
        <div className={styles.b_of_d}>
          <div className={styles.birdOfDate}>
            <h3>Дата рождения</h3>
            <input type="date" />
          </div>
          <div className={styles.gender}>
            <p>Пол</p>
            <select>
              <option> Мужской </option>
              <option> Женский</option>
            </select>
          </div>
        </div>
        <div className={styles.documents}>
            <h4>Документы</h4>   
            <div className={styles.content_documents}>  
            <div className={styles.document_pasp}>
                <p>Документ</p>
                <select >
                    <option>Паспорт</option>
                    <option>Загран паспорт</option>
                </select>
            </div>
            <div className={styles.document_series}>
                <p>Серия документа</p>
                <input type="text" placeholder="__.__" />
            </div>
            <div className={styles.document_number}>
                <p>Номер Документа</p>
                <input type="text" placeholder="____" />
            </div>
            <div className={styles.document_data}>
                <p>Дата выдачи</p>
                <input type="date" />
            </div>
            <div className={styles.document_issued}>
                <p>Кем выдан</p>
                <input type="text" />
            </div>
            <div className={styles.document_division}>
                <p>Код подразделения</p>
                <input type="text" />
            </div>
            
        </div>
        </div> 
        <button>Сохранить изменения</button>
      </div>
    </div>
  );
};

export default PersonalData;
