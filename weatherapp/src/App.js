import "./App.css";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import WeatherPanel from "./components/WeatherPanel";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  function handleCityChange(city) {
    setCity(city);
  }

  return (
    <div className="App">
      <NavBar />
      <Form onCityChange={handleCityChange} />
      <WeatherPanel city={city} />
    </div>
  );
}

export default App;
