import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import MyProfile from "./pages/MyProfile/index";
import ToursPage from "./pages/ToursPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/tours" element={<ToursPage/>}/>
        <Route path="/profile/*" element={<MyProfile/>}/>
      </Routes>
    </div>
  );
};
export default App;
