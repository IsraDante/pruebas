import React, { useState, useEffect } from "react";

function WeatherPanel({ city }) {
  const [localWeather, setLocalWeather] = useState(null);

  const UrlWeather = `http://api.weatherapi.com/v1/forecast.json?key=48dea4ae6d0740c888e92400231505&q=${city}&days=3&aqi=no&alerts=no`;

  // Llamada a la API
  useEffect(() => {
    getWeather();
  }, [city]);

  async function getWeather() {
    try {
      const respuesta = await fetch(UrlWeather);
      const data = await respuesta.json();
      setLocalWeather(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      {localWeather && (
        <div className="card-currentinfo">
          <h1>{localWeather.location.name}</h1>
          <span>
            <h2>{localWeather.location.region}</h2>
            <h2>({localWeather.location.country})</h2>
          </span>
          <img src={localWeather.current.condition.icon} alt="Weather Icon" />
          <p>Temperature: {localWeather.current.temp_c}°C</p>
          <p>Condition: {localWeather.current.condition.text}</p>
        </div>
      )}
      <div className="secondary-cards">
        {localWeather && (
          <div className="card-tomorrow">
            <h3>Mañana</h3>
            <img src={localWeather.forecast.forecastday[1].hour[8].condition.icon} alt="Weather Icon" />
            <div className="maxmin">
              <p>Máx: {localWeather.forecast.forecastday[1].day.maxtemp_c}°C</p>
              <p>/ Mín: {localWeather.forecast.forecastday[1].day.mintemp_c}°C</p>
            </div>
            <p>Temperature: {localWeather.forecast.forecastday[1].hour[8].temp_c}°C</p>
            <p>Condition: {localWeather.forecast.forecastday[1].hour[8].condition.text}</p>
          </div>
        )}
        {localWeather && (
          <div className="card-pasttomorrow">
            <h3>Pasado mañana</h3>
            <img src={localWeather.forecast.forecastday[2].hour[8].condition.icon} alt="Weather Icon" />
            <div className="maxmin">
              <p>Máx: {localWeather.forecast.forecastday[2].day.maxtemp_c}°C</p>
              <p>/ Mín: {localWeather.forecast.forecastday[2].day.mintemp_c}°C</p>
            </div>
            <p>Temperature: {localWeather.forecast.forecastday[2].hour[8].temp_c}°C</p>
            <p>Condition: {localWeather.forecast.forecastday[2].hour[8].condition.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherPanel;
