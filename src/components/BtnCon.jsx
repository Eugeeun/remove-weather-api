import Button from './Button';
import { cityMapping } from '../utils/cityMapping';

function BtnCon({ onCityChange, onCurrentLocation }) {
  return (
    <div>
      <Button key='current-location' isCurrentLocation onClick={onCurrentLocation} />
      {Object.keys(cityMapping).map(city => (
        <Button key={city} city={city} onClick={onCityChange} displayText={cityMapping[city]} />
      ))}
    </div>
  );
}

export default BtnCon;
