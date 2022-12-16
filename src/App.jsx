import Header from "./components/Header";
import FilterMenu from "./components/Main/FilterMenu";
import Navbar from "./components/Main/Navbar";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <FilterMenu/>
    </div>
  );
}

export default App;
