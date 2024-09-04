function Button({ city, onClick, isCurrentLocation, displayText }) {
  return (
    <button onClick={() => onClick(city)}>{isCurrentLocation ? '현재 위치' : displayText}</button>
  );
}

export default Button;
