import React from "react";
import styles from "./Organization.module.scss";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css";
import "./Organization.css";
import { useDispatch } from "react-redux";
import { addOrganization } from "../../slices/organization.slice";

function Organization() {
  const dispatch = useDispatch();

  const [firstN, setfirstN] = useState("");
  const [secondN, setsecondN] = useState("");
  const [lastN, setlastN] = useState("");
  const [organization, setOrganization] = useState("");
  const [legalAd, setlegalAd] = useState("");
  const [photo, setPhoto] = useState(null);
  const [inn, setInn] = useState("");
  const [bik, setBik] = useState("");
  const [counte, setCount] = useState("");
  //контакты

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [adress, setAdress] = useState("");
  const [teleg, setTeleg] = useState("");

  console.log(firstN, secondN, lastN);
  console.log(organization);
  console.log(legalAd);
  console.log(photo);
  console.log(inn);
  console.log(bik);
  console.log(counte);

  console.log(email);
  console.log(number);
  console.log(adress);
  console.log(teleg);

  const active = firstN && secondN && lastN && organization && legalAd && photo && inn && bik && counte && email && number && adress && teleg

  const createOrganization = () => {
  
    dispatch(
      addOrganization({
        login: "timur",
        password: "timur",
        image: photo,
        requisites: { 
          name_organization: organization,
          INN: inn,
          legal_address: legalAd,
          BIK_bank: bik,
          initials_user: `${firstN} ${secondN} ${lastN}`,
          count_organization: counte,
        },
        contacts: {
          adress: adress,
          phone: number,
          email: email,
          link: teleg,
        }
      })
    );
  };

  console.log(true);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header_txt}>
          <p>
            Телефон отдела продаж: <span>+7 928 695 30 59</span>
          </p>
          <p>
            Email:{" "}
            <span>
              <a href={"https://mail.ru/"}>jorikridvan@mail.ru</a>
            </span>{" "}
          </p>
        </div>
        <h1>Организация</h1>
        <h3>Реквизиты</h3>
        <div className={styles.name}>
          <div className={styles.firstName_input}>
            <p>Фамилия</p>
            <input
              type="text"
              value={firstN}
              onChange={(e) => setfirstN(e.target.value)}
            />
          </div>
          <div className={styles.secondName_input}>
            <p>Имя</p>
            <input
              type="text"
              value={secondN}
              onChange={(e) => setsecondN(e.target.value)}
            />
          </div>
          <div className={styles.lastName_input}>
            <p>Отчество</p>
            <input
              type="text"
              value={lastN}
              onChange={(e) => setlastN(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.organization_inp}>
          <div className={styles.nameOrg_input}>
            <p>Название организация</p>
            <input
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              type="text"
            />
          </div>
          <div className={styles.legAdress_input}>
            <p>Юридический адрес</p>
            <input
              type="text"
              value={legalAd}
              onChange={(e) => setlegalAd(e.target.value)}
            />
          </div>
          <div className={styles.avatar_input}>
            <p>Изображение</p>
            <label className={styles.input_file}>
              <input
                onChange={(e) => setPhoto(e.target.files[0])}
                type="file"
                name="file"
              />
              <span>{photo ? "Фото уже выбрано" : "Выберите файл"}</span>
            </label>
          </div>
        </div>

        <div className={styles.organization_inp}>
          <div className={styles.inn_input}>
            <p>ИНН</p>
            <input
              type="text"
              value={inn}
              onChange={(e) => setInn(e.target.value)}
            />
          </div>
          <div className={styles.bik_input}>
            <p>БИК банка</p>
            <input
              type="text"
              value={bik}
              onChange={(e) => setBik(e.target.value)}
            />
          </div>
          <div className={styles.schetOrg_input}>
            <p>Расчетный счет организации</p>
            <input
              type="text"
              value={counte}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
        </div>

        <h3 className={styles.h3}>Контакты</h3>

        <div className={styles.inputs_contact}>
          <div className={styles.mail}>
            <p>E-mail</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.number}>
            <p>Номер телефона</p>
            <PhoneInput
              className="phoneInput"
              international
              defaultCountry="RU"
              value={number}
              onChange={(value) => setNumber(value)}
            />
          </div>
        </div>

        <div className={styles.b_of_d}>
          <div className={styles.adress_input}>
            <h3>Адресс</h3>
            <input
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className={styles.gender}>
            <p>Телеграмм</p>
            <input
              className={styles.teleg_input}
              type="text"
              value={teleg}
              onChange={(e) => setTeleg(e.target.value)}
            />
          </div>
        </div>

        <button onClick={createOrganization} className={styles.button}>
          Добавить организацию
        </button>
      </div>
    </div>
  );
}

export default Organization;
