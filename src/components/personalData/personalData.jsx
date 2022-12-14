import React from "react";
import styles from "./personData.module.scss";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css";
import "./style.css";
const PersonalData = () => {
  const [phone, setPhone] = useState("");

  const [firstName, setFirstName] = useState("");

  const [secondName, setSecondName] = useState("");

  const [lastName, setLastName] = useState("");

  const [mail, setMail] = useState("");

  const [dateBird, setDateBird] = useState("");

  const [documentSeries, setDocumentSeries] = useState("");

  const [documentNumber, setDocumentNumber] = useState("");

  const [dateDocument, setDateDocument] = useState("");

  const [documentIssued, setDocumentIssued] = useState("");

  const [documentDivision, setDocumentDivision] = useState("");

  const [document, setDocument] = useState('Паспорт')

  const [gender, setGender] = useState('Мужской')
  
  console.log(gender, document);
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
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
            />
          </div>
          <div className={styles.secondName_input}>
            <p>Имя</p>
            <input
              onChange={(e) => setSecondName(e.target.value)}
              value={secondName}
              type="text"
            />
          </div>
          <div className={styles.lastName_input}>
            <p>Отчество</p>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
            />
          </div>
        </div>
        <div className={styles.inputs_contact}>
          <div className={styles.mail}>
            <p>E-mail</p>
            <input
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              type="text"
            />
          </div>
          <div className={styles.number}>
            <p>Номер телефона</p>
            <PhoneInput
              className="phoneInput"
              international
              defaultCountry="RU"
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </div>
        </div>
        <div className={styles.b_of_d}>
          <div className={styles.birdOfDate}>
            <h3>Дата рождения</h3>
            <input
              onChange={(e) => setDateBird(e.target.value)}
              value={dateBird}
              type="date"
            />
          </div>
          <div className={styles.gender}>
            <p>Пол</p>
            <select onChange={(e)=>setGender(e.target.value)}>
              <option selected = {true}> Мужской </option>
              <option> Женский</option>
            </select>
          </div>
        </div>
        <div className={styles.documents}>
          <h4>Документы</h4>
          <div className={styles.content_documents}>
            <div className={styles.document_pasp}>
              <p>Документ</p>
              <select onChange={(e)=> setDocument(e.target.value)}>
                <option selected={true}>Паспорт</option>
                <option>Загран паспорт</option>
              </select>
            </div>
            <div className={styles.document_series}>
              <p>Серия документа</p>
              <input
                onChange={(e) => setDocumentSeries(e.target.value)}
                value={documentSeries}
                type="text"
                placeholder="__.__"
              />
            </div>
            <div className={styles.document_number}>
              <p>Номер Документа</p>
              <input
                onChange={(e) => setDocumentNumber(e.target.value)}
                value={documentNumber}
                type="text"
                placeholder="____"
              />
            </div>
            <div className={styles.document_data}>
              <p>Дата выдачи</p>
              <input
                onChange={(e) => setDateDocument(e.target.value)}
                value={dateDocument}
                type="date"
              />
            </div>
            <div className={styles.document_issued}>
              <p>Кем выдан</p>
              <input
                onChange={(e) => setDocumentIssued(e.target.value)}
                value={documentIssued}
                type="text"
              />
            </div>
            <div className={styles.document_division}>
              <p>Код подразделения</p>
              <input
                onChange={(e) => setDocumentDivision(e.target.value)}
                value={documentDivision}
                type="text"
              />
            </div>
          </div>
        </div>
        <button>Сохранить изменения</button>
      </div>
    </div>
  );
};

export default PersonalData;
