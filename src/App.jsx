import 'bootstrap/dist/css/bootstrap.min.css';
  // import Tour from './components/Tour/Tour';
  // import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import MyProfile from "./pages/MyProfile/index";


const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      <Header />
      <Tour />

=======
>>>>>>> 67c018ee1ca6a7b5302a64dfce3163e1a033a158
=======
      {/* <Header />
      <Tour /> */}
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/profile/*" element={<MyProfile/>}/>
      </Routes>
>>>>>>> main
    </div>
  );
};
export default App;
