import "bootstrap/dist/css/bootstrap.min.css";
import Tour from './components/Tour/Tour';
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import MyProfile from "./pages/MyProfile/index";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile/*" element={<MyProfile />} />
      </Routes>
    </div>
  );
};
export default App;
