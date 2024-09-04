import useWeatherData from '../hooks/useWeatherData';
import WeatherDetails from './WeatherDetails';
import LoadingSpinner from './LoadingSpinner';
import ErrorHandler from './ErrorHandler';

function Weather({ selectedCity, currentLocation }) {
  const { weatherData, loading, error } = useWeatherData(selectedCity, currentLocation);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorHandler message={error} />;

  return <div>{weatherData && <WeatherDetails data={weatherData} />}</div>;
}

export default Weather;
