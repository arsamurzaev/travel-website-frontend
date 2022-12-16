import Header from "./components/Header";
import FilterMenu from "./components/Main/FilterMenu";
import Navbar from "./components/Main/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/MainPage";



const App = () => {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
  );
}
export default App;
