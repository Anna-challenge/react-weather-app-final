import React, { useState } from "react";
export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="temperature"> {Math.round(props.celsius)} </span>
        <span className="unit">
          {" "}
          °C|
          <span className="unitLink" onClick={convertFahrenheit}>
            °F
          </span>{" "}
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="temperature">
          {" "}
          {Math.round((props.celsius * 9) / 5)}{" "}
        </span>
        <span className="unit">
          {" "}
          <span className="unitLink" onClick={convertCelsius}>
            °C
          </span>
          |°F
        </span>{" "}
      </div>
    );
  }
}
