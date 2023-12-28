import React from "react";
import { useState } from "react";
import API from "../../API.js";
import "./WeatherApp.css";
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import { WeatherImage } from "../WeatherImage/WeatherImage.jsx";
import { WeatherInfo } from "../WeatherInfo/WeatherInfo.jsx";

export const WeatherApp = (props) => {
  const [search, setSearch] = useState(null);
  const [city, setCity] = useState("City/Town");
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weather, setWeather] = useState(null);

  const getWeatherData = async (event) => {
    if (event.key == "Enter" || event.target.className == "search-icon") {
      try {
        if (search !== "") {
          const response = await fetch(
            `${API.base}weather?q=${search}&units=Metric&APPID=${API.key}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          setCity(search);
          setTemp(Math.floor(data.main.temp));
          setWind(Math.floor(data.wind.speed));
          setHumidity(Math.floor(data.main.humidity));
          setWeather(data.weather[0].icon);
          setSearch("");
        } else {
          alert("Please enter city/town");
        }
      } catch (err) {
        alert("We didn't find the city. Please enter again");
        setCity("City/Town");
      }
    }
  };
  return (
    <div className="weatherapp-container">
      <SearchBar
        onChange={(e) => setSearch(e.target.value)}
        onClick={getWeatherData}
        search={search}
        onKeyDown={getWeatherData}
      />
      <WeatherImage weather={weather} />
      <WeatherInfo city={city} temp={temp} wind={wind} humidity={humidity} />
    </div>
  );
};
