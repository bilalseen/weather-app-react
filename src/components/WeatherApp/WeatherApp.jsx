import React from "react";
import { useState } from "react";
import { api } from "../../api";
import "./WeatherApp.css";
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import { WeatherImage } from "../WeatherImage/WeatherImage.jsx";
import { WeatherInfo } from "../WeatherInfo/WeatherInfo.jsx";

export const WeatherApp = (props) => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("City/Town");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeatherData = () => {
    if (search != "") {
      fetch(`${api.base}weather?q=${search}&units=Metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((data) => {
          setCity(search);
          setTemp(Math.floor(data.main.temp));
          setWind(Math.floor(data.wind.speed));
          setHumidity(Math.floor(data.main.humidity));
          setWeather(data.weather[0].icon);
          setSearch("");
        })
        .catch((err) => {
          alert("We didn't find the city. Please enter again");
          setCity("City/Town");
        });
    } else alert("Please enter city/town");
  };
  return (
    <div className="weatherapp-container">
      <SearchBar
        onChange={(e) => setSearch(e.target.value)}
        onClick={getWeatherData}
        search={search}
      />
      <WeatherImage weather={weather} />
      <WeatherInfo city={city} temp={temp} wind={wind} humidity={humidity} />
    </div>
  );
};
