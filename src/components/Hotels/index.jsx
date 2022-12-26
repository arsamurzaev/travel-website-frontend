import React from "react";

const HotelInfoCard = ({hotelName, mood, rating, description }) => {
  return (
    <div>
      <div className="container">
        <div className={styles.img_block}></div>
        <div className={styles.info}>
          <div className={styles.title}></div>
          <div className={styles.location}></div>
          <div className={styles.subinfo}></div>
          <div className={styles.description}></div>
          <div className={styles.price_block}>
            <div className={styles.price_info}></div>
            <button className={styles.price}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoCard;
