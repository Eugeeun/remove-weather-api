// src/App.js
import { useState, useEffect } from 'react';
import Weather from './components/Weather';
import BtnCon from './components/BtnCon';
import ErrorHandler from './components/ErrorHandler';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const fetchCurrentLocation = () => {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lon: longitude });
          },
          () => setErrorMessage('위치 정보를 가져오는 데 실패했습니다.')
        )
      : setErrorMessage('Geolocation을 지원하지 않는 브라우저입니다.');
  };

  const handleCityChange = city => {
    setSelectedCity(city);
    setCurrentLocation(null);
  };

  return (
    <main className='main'>
      <h1>날씨 API 활용</h1>
      <BtnCon onCityChange={handleCityChange} onCurrentLocation={fetchCurrentLocation} />
      <ErrorHandler message={errorMessage} />
      <Weather selectedCity={selectedCity} currentLocation={currentLocation} />
    </main>
  );
}

export default App;
