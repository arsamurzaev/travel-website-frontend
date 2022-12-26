import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import MyProfile from "./pages/MyProfile/index";
import ToursPage from "./pages/ToursPage"
import Registration from './components/Auth/RegistrationAuth';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Registration/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/tours" element={<ToursPage/>}/>
        <Route path="/profile/*" element={<MyProfile/>}/>
      </Routes>
    </div>
  );
};
export default App;
