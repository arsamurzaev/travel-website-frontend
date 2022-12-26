import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import MyProfile from "./pages/MyProfile/index";
<<<<<<< HEAD
import ToursPage from "./pages/ToursPage";
import Registration from "./components/Auth/RegistrationAuth";
=======
import ToursPage from "./pages/ToursPage"
>>>>>>> main

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/tours" element={<ToursPage/>}/>
        <Route path="/profile/*" element={<MyProfile/>}/>

        <Route path="/authreg/*" element={<Registration />}/>
      </Routes>
    </div>
  );
};
export default App;
