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
  const { data, currentDate, cambioImg } = useApi();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Agrega el estado para city aquí

  const handleSearch = (searchData) => {
    setWeatherData(searchData);
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
     <section className='principal'>
      <Seach onSearch={handleSearch} />
      <Gps />
      <Dia data={weatherData} currentDate={currentDate} cambioImg={cambioImg} city={weatherData ? weatherData.name : null} />
    </section>
    <Cambio />
    <Semana data={weatherData} cambioImg={cambioImg} city={weatherData ? weatherData.name : null} />
    <Adicionales data={weatherData} />
  </>
  );
}

export default App;