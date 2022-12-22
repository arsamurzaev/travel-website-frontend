import React from "react";
import FilterMenu from "../../components/Main/FilterMenu";
import Navbar from "../../components/Main/Navbar";
import styles from './tours.module.scss';

const ToursPage = () => {
  return (
    <>
      <section>
        <Navbar />
        <FilterMenu />
      </section>
      <main>
        <div className="container">
          <div className={styles.title}>
            Туры в Турцию: найдено 12 предложений
          </div>
          <div className={styles.row}>

          </div>
        </div>
      </main>
    </>
  );
};

export default ToursPage;
