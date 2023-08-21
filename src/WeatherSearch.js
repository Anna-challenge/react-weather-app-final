import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherSearch(props) {
  return (
    <div className="WeatherSearch">
      <h1> {props.data.city} </h1>{" "}
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />
        </li>{" "}
        <li className="text-capitalize mt-2"> {props.data.description} </li>{" "}
      </ul>{" "}
      <div className="row">
        <div className="col-6 mt-3">
          <div className="d-flex">
            <div className="weather-icon">
              <WeatherIcon
                code={props.data.icon}
                size={52}
                alt={props.data.description}
                
              />
            </div>
            <Temperature celsius={props.data.temperature} />{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-6">
          <ul>
            <li className="mb-2"> Humidity: {props.data.humidity} % </li>{" "}
            <li> Wind: {props.data.wind} km / h </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
