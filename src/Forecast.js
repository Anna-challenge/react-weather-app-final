import { useState, useEffect } from "react";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

const Forecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  const handleResponse = (response) => {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  };
  if (loaded) {
    //console.log(forecast);
    return (
      <div className="forecast mt-3">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "e3ob1a5bf8tfc2b1608935b2942bc5dc";
    const city = props.city;
    console.log(city);

    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
};

export default Forecast;
