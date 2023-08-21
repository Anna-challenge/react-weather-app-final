import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Mexico" />
        <footer>
          This project was coded by{" "}
          <a
            rel="noreferrerb noopener"
            href="https://www.linkedin.com/in/hanna-velychko-1b6655264/"
            target="_blank"
          >
            Hanna Velychko
          </a>{" "}
          and is{" "}
          <a
            rel="noreferrer noopener"
            href="https://github.com/Anna-challenge/react-weather-week5"
            target="_blank"
          >
            opensourced on Github{" "}
          </a>{" "}
        </footer>{" "}
      </div>{" "}
    </div>
  );
}
