import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
};
export default App;
