import styles from "./review.module.scss";
import img from "../../../img/review/Ellipse 5.png";
import { useState } from "react";

const MainReview = ({text,
  updatedAt,
  service,
  conditions,
  userId}) => {

   
  const [disclosure, setDisclosure] = useState(false);
 //alks
  return (
    <div className={styles.review}>
      <div className={styles.row}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <img src={img} alt="" />
            <div className={styles.userInfo}>
              <div className={styles.fullname}>{userId?.firstName ? userId.firstName: ""}</div>
              <div className={styles.home}>Чехия / Прага</div>
            </div>
          </div>
          <div className={styles.date}>{updatedAt}</div>
          <div className={styles.rating}>
            <div className={styles.item}>
              уровень сервиса <span>{service}</span>
            </div>
            <div className={styles.item}>
              соблюдение условий <span>{conditions}</span>
            </div>
          </div>
        </div>
        <div className={styles.comment}>
          <p style={disclosure ? { height: "100%" } : { height: "235px" }}>
            {/* Организация отдыха в санатории - 5: встреча на ж/д вокзале
            трансфера, без задержек и переносов. Менеджеры - вежливые,
            тактичные, без долгих оформлений и подтверждений. Особо хочется
            похвалить Елену всегда на месте была и всегда все могла объяснить,
            рассказать о санатории. Экскурсионная программа, которая входила в
            путевки была отличная. Да и индивидуальные экскурсии были на высоте,
            единственное что цены их была конечно не маленькая, зато только мы,
            и по нашему требованию остановки, хотим фото или хотим еще туда и
            т.д. Замечательные две недели отдыха, а главное санаторного лечения. */}
            {text}
          </p>
          <button onClick={() => setDisclosure(!disclosure)}>
            Смотреть весь отзыв
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainReview;
