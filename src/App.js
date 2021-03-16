import logo from "./logo.svg";
import "./App.css";
import BikeCard from "./components/BikeCard";

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Page Title */}
        <div className="page_title">
          <h1>Bikes in San Francisco</h1>
        </div>

        {/* Bikes Cards Component*/}
        <BikeCard></BikeCard>
      </header>
    </div>
  );
}

export default App;
