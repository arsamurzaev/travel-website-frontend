import FilterMenu from "../../components/Main/FilterMenu";
import InfifniteCarousel from "../../components/Main/InfiniteCarousel";
import Navbar from "../../components/Main/Navbar";
import TourSlider from "../../components/Main/TourSlider/index";
import styles from "./mainpage.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainReview from "../../components/Main/Review";
import Slider from "react-slick";
import CallTour from "../../components/Tour/CallTour";
import HotelsSlider from "../../components/Main/HotelsSlider";

const MainPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            <div className={styles.row}>
              <TourSlider />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.recommendations}>
            <h1>Мы рекомендуем</h1>
            <div className={styles.row}>
              <div className={styles.item}>
                <div className={styles.title}>СКИДКИ ОТ ПАРТНЁРОВ</div>
                <div className={styles.text}>
                  Воспользуйтесь скидками на товары и услуги наших партнёров
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>ТОЛЬКО МЕЖДУ НАМИ</div>
                <div className={styles.text}>
                  Ищите секретные предложения в телеграм-канале I LIKE TRAVEL
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>ПРИСОЕДИНЯЙСЯ В ВК</div>
                <div className={styles.text}>
                  Интересные предложения в группе ВК I LIKE TRAVEL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sl">
            <Slider {...settings}>
              <MainReview />
              <MainReview />
              <MainReview />
            </Slider>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <CallTour />
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.hotel}>
            <h2>Отели без перелета</h2>
            <HotelsSlider/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
