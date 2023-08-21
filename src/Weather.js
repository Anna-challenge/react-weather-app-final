import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = "e3ob1a5bf8tfc2b1608935b2942bc5dc";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>{" "}
            <div className="col-3">
              {" "}
              <input type="submit" value="search" className="btn w-100" />{" "}
            </div>{" "}
          </div>{" "}
        </form>{" "}
        <WeatherSearch data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Searching";
  }
}
