import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  );
};
export default App;
