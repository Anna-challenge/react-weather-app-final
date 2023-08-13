import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Hanna Velychko and is{" "}
          <a
            href="https://github.com/Anna-challenge/weather-react-app-new"
            target="_blank"
          >
            opensourced on Github{" "}
          </a>{" "}
        </footer>{" "}
      </div>{" "}
    </div>
  );
}
