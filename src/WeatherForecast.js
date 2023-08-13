import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div class="WeatherForcast-day">{forecast[0].time}</div>
            <WeatherIcon code={forecast[0].condition.icon} size={36} />
            <div className="WeatherForcast-temperatures">
              <span className="WeatherForcast-temperatures-max">
                {forecast[0].temperature.maximum}
              </span>
              <span className="WeatherForcast-temperatures-min">
                {forecast[0].temperature.minimum}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e3ob1a5bf8tfc2b1608935b2942bc5dc";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
