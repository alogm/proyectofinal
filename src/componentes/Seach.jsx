import React, { useState } from 'react';

function Seach({ onSearch }) {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiKey = '77e264a1bc872421b4e6ee74fc81cb0e'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      onSearch(data); 
      onCityChange(city);
    } catch (error) {
      
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa una ciudad"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Seach;