function WeatherDetails({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>온도: {data.main.temp}°C</p>
      <p>날씨: {data.weather[0].description}</p>
      <p>습도: {data.main.humidity}%</p>
      <p>풍속: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDetails;
