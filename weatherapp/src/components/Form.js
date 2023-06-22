import React, { useState } from "react";
import "../stylesheets/Form.css";

function Form({ onCityChange }) {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "") {
      onCityChange("Sabadell"); // Llamar a la función de cambio de ciudad con el valor predeterminado o la ciudad ingresada
    } else {
      onCityChange(city);
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={onSubmit}>
        <div className="container-input">
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Ciudad"></input>
          <button type="submit">Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
