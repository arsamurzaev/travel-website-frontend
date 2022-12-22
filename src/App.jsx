import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import MyProfile from "./pages/MyProfile/index";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/profile/*" element={<MyProfile/>}/>
      </Routes>
    </div>
  );
};
export default App;
