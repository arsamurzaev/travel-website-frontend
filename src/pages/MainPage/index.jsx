import FilterMenu from "../../components/Main/FilterMenu";
import InfifniteCarousel from "../../components/Main/InfiniteCarousel";
import Navbar from "../../components/Main/Navbar";
import styles from "./mainpage.module.scss";

const MainPage = () => {
  return (
    <main>
      <Navbar />
      <FilterMenu />
      <section>
        <div className="container">
          <div className={styles.burningTours}>
            <div className={styles.row}>
              <div className={styles.carousel}>
                <InfifniteCarousel />
              </div>
              <div className={styles.additionalInformation}>
                <div className={styles.item}>
                  <div className={styles.title}>Тур дня</div>
                  <div className={styles.text}>Сегодня цена снижена</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>Бронирование отелей</div>
                  <div className={styles.text}>Легко и найти купить онлайн</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.toursRussia}>
            <h2 className={styles.title}>Подборка туров по России и Абхазии</h2>
            <div className={styles.row}>'1'</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
