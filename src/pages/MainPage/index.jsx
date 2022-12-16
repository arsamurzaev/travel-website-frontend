import FilterMenu from "../../components/Main/FilterMenu";
import Navbar from "../../components/Main/Navbar";

const MainPage = () => {
  return (
    <main>
      <Navbar />
      <FilterMenu />
      <section>
        <div className="container">
          <div className="burningTours">
            <div className={styles.row}>
              <div className="carousel"></div>
              <div className="block"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
