import React, { useState, useEffect } from "react";
import "./WeatherImage.css";

import clear_sky_icon from "../../assets/icons/clear_sky.png";
import few_clouds_icon from "../../assets/icons/few_clouds.png";
import scattered_clouds_icon from "../../assets/icons/scattered_clouds.png";
import broken_clouds_icon from "../../assets/icons/broken_clouds.png";
import shower_rain_icon from "../../assets/icons/shower_rain.png";
import rain_icon from "../../assets/icons/rain.png";
import thunderstorm_icon from "../../assets/icons/thunderstorm.png";
import snow_icon from "../../assets/icons/snow.png";
import mist_icon from "../../assets/icons/mist.png";
import weather_icon from "../../assets/icons/weather.png";

export const WeatherImage = (props) => {
  const [weatherIcon, setWeatherIcon] = useState(weather_icon);

  useEffect(() => {
    switch (props.weather) {
      case "01d":
      case "01n":
        setWeatherIcon(clear_sky_icon);
        break;
      case "02d":
      case "02n":
        setWeatherIcon(few_clouds_icon);
        break;
      case "03d":
      case "03n":
        setWeatherIcon(scattered_clouds_icon);
        break;
      case "04d":
      case "04n":
        setWeatherIcon(broken_clouds_icon);
        break;
      case "09d":
      case "09n":
        setWeatherIcon(shower_rain_icon);
        break;
      case "10d":
      case "10n":
        setWeatherIcon(rain_icon);
        break;
      case "11d":
      case "11n":
        setWeatherIcon(thunderstorm_icon);
        break;
      case "13d":
      case "13n":
        setWeatherIcon(snow_icon);
        break;
      case "50d":
      case "50n":
        setWeatherIcon(mist_icon);
        break;
      default:
        setWeatherIcon(weather_icon);
    }
  }, [props.weather]);

  return (
    <div className="weather-image-container">
      <img src={weatherIcon} alt="weather image" className="weather-image" />
    </div>
  );
};
