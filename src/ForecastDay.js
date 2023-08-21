import WeatherIcon from "./WeatherIcon";
const ForecastDay = (props) => {
  const MinTemperature = () => {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature} °`;
  };
  const MaxTemperature = () => {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature} °`;
  };
  const Day = () => {
    const date = new Date(props.data.time * 1000);
    const day = date.getDay();
    const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    return week[day];
  };
  return (
    <div>
      <div className="forecast-day">{Day()}</div>
      <div className="forecast-temp mt-3">
        <span className="min-temp">{MinTemperature()} C</span>
        <span className="max-temp">{MaxTemperature()} C</span>
      </div>
      <div className="weather-icon mt-3">
        <WeatherIcon size={35}  code={props.data.condition.icon} />
      </div>
    </div>
  );
};

export default ForecastDay;
