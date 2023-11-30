import React from "react";
import "./WeatherInfo.css";
import humidityIcon from "../../assets/icons/humidity.png";
import windIcon from "../../assets/icons/wind.png";

export const WeatherInfo = (props) => {
  return (
    <div className="weather-info-container">
      <div className="weather-temp">{props.temp}°C</div>
      <div className="weather-location">{props.city}</div>
      <div className="data-container">
        <div className="weather-element">
          <img
            src={humidityIcon}
            className="weather-icon"
            alt="humidity icon"
          />
          <div className="weather-data">
            <div className="humidity-percent">{props.humidity}%</div>
            <div className="weather-text">Humidity</div>
          </div>
        </div>
        <div className="weather-element">
          <img src={windIcon} className="weather-icon" alt="wind icon" />
          <div className="weather-data">
            <div className="wind-speed">{props.wind}km/h</div>
            <div className="weather-text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
