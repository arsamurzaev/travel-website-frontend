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
import StockSlider from "../../components/Main/StockSlider";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComments } from "../../app/features/comment.slice";
import Comments from "../../components/Main/Review/comments/Comments";

const MainPage = () => {
  //asdas
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getComments())
  }, [])
  const comments = useSelector((state)=>state.comments.comments)
  console.log(comments);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <section>
        <Navbar />
        <FilterMenu />
      </section>
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
              {comments.map((item)=>{
                return (<MainReview 
                  key={item.userId}
                  text = {item.text}
                  updatedAt = {item.updatedAt}
                  service = {item.service}
                  conditions = {item.conditions}
                  userId = {item.userId}
                />)
              })}
              
            </Slider>
          </div>
          {/* <Comments /> */}
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.hotel}>
            <h2>Отели без перелета</h2>
            <HotelsSlider />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.online}>
            <h2 className={styles.title}>Что вы получите бронируя онлайн</h2>
            <div className={styles.row}>
              <div className={styles.item}>
                <h3 className={styles.label}>Безопасная сделка</h3>
                <div className={styles.text}>
                  Все банковские операции и онлайн-платежи на сайте защищены
                </div>
              </div>
              <div className={styles.item}>
                <h3 className={styles.label}>Скорость и удобство</h3>
                <div className={styles.text}>
                  Никаких ожиданий в очередях: можно сравнить предложения
                  самостоятельно
                </div>
              </div>
              <div className={styles.item}>
                <h3 className={styles.label}>Выгодная цена</h3>
                <div className={styles.text}>
                  Акции и горящие туры отображаются на сайте в реальном времени
                </div>
              </div>
              <div className={styles.item}>
                <h3 className={styles.label}>Поддержка 24/7</h3>
                <div className={styles.text}>
                  Служба поддержки поможет с бронированием тура онлайн и найдёт
                  решение на ваш вопрос
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>{/* Пустой тег */}
          <div className={styles.stock}>
            {/* <h2 className={styles.title}></h2> */}
            <div className={styles.slider}>
              <StockSlider />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <CallTour />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MainPage;
