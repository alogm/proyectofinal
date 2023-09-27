import { useState } from 'react'
import './App.css'
import Dia from './componentes/Dia'
import Semana from './componentes/Semana'
import Seach from './componentes/Seach'
import Gps from './componentes/Gps'
import Adicionales from './componentes/Adicionales'
import Cambio from './componentes/Cambio'
import useApi from './componentes/servicios/useApi'

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const { data, currentDate} = useApi(latitude, longitude);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Agrega el estado para city aquí
 
  


  const handleSearch = (searchData) => {
    setWeatherData(searchData);
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const handleLocationChange = (newLatitude, newLongitude) => {
    setLatitude(newLatitude);
    setLongitude(newLongitude);
  };

  return (
    <>
     <section className='principal'>
      <Seach onSearch={handleSearch} />
      <Gps onLocationChange={handleLocationChange} />
      <Dia data={weatherData} currentDate={currentDate} city={city} />
    </section>
    <Cambio />
    <Semana data={weatherData}  city={weatherData ? weatherData.name : null} />
    <Adicionales data={weatherData} />
  </>
  );
}

export default App;