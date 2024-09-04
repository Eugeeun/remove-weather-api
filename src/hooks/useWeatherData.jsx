import { useState, useEffect, useCallback } from 'react';
import ky from 'ky';

// 상수 정의
const API_KEY = import.meta.env.VITE_API_KEY;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const useWeatherData = (selectedCity, currentLocation) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = useCallback(async params => {
    setLoading(true);
    setError(null);

    try {
      const response = await ky
        .get(WEATHER_API_URL, {
          searchParams: { ...params, appid: API_KEY, units: 'metric' },
        })
        .json();

      setWeatherData(response);
    } catch (error) {
      console.error('날씨 데이터를 가져오는 데 실패했습니다:', error);
      setError('날씨 데이터를 가져오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      fetchWeatherData({ lat: currentLocation.lat, lon: currentLocation.lon });
    } else if (selectedCity) {
      fetchWeatherData({ q: selectedCity });
    }
  }, [selectedCity, currentLocation, fetchWeatherData]);

  return { weatherData, loading, error };
};

export default useWeatherData;
