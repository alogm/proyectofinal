import React, { useState } from 'react';

function Cambio({ temperaturaCelsius, onCelsiusClick, onFahrenheitClick }) {
  const [unit, setUnit] = useState('C'); // Unidad de temperatura actual (C o F)

  const convertirAFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const cambiarUnidad = () => {
    if (unit === 'C') {
      // Cambiar a Fahrenheit
      const temperaturaFahrenheit = convertirAFahrenheit(temperaturaCelsius);
      onFahrenheitClick(temperaturaFahrenheit);
      setUnit('F');
    } else {
      // Cambiar a Celsius
      onCelsiusClick(temperaturaCelsius);
      setUnit('C');
    }
  };

  return (
    <div>
      <button onClick={cambiarUnidad}>
        Cambiar a {unit === 'C' ? '°F' : '°C'}
      </button>
    </div>
  );
}

export default Cambio;
