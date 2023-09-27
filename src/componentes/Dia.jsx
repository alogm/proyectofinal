import React, { useEffect } from 'react';

function Dia({ data, currentDate, city }) {

  const cambiodia = {
    Clear: "https://openweathermap.org/img/wn/01d@2x.png",
    Hail: "https://openweathermap.org/img/wn/05d@2x.png",
    Cloud: "https://openweathermap.org/img/wn/02d@2x.png",
    Rain: "https://openweathermap.org/img/wn/09d@2x.png",
    Clouds: "https://openweathermap.org/img/wn/03d@2x.png",
    LightRain: "https://openweathermap.org/img/wn/10d@2x.png",
    Shower: "https://openweathermap.org/img/wn/09d@2x.png",
    Sleet: "https://openweathermap.org/img/wn/13d@2x.png",
    Snow: "https://openweathermap.org/img/wn/13d@2x.png",
    Thunderstorm: "https://openweathermap.org/img/wn/11d@2x.png",
  };
  
  useEffect(() => {
   
  }, [data]);

  return (
    <section className="pag">
      <img
        src={
          data
            ? cambiodia[data.weather[0].main] // Usar el valor de "main" de los datos de la API
            : "Loading..."
        }
        alt="clima"
        
      />
      <div>
        <h1>{data ? data.main.temp : "Loading..."}c°</h1>
      </div>
      <div>
        <h3>{data ? data.weather[0].main : "Loading..."}</h3>
      </div>
      <div>
        <h5>{currentDate}</h5>
      </div>
      <div>
        <h3>
          <span className="material-symbols-outlined">location_on</span>{data ? data.name : "Loading..."}
          
        </h3>
      </div>
    </section>
  );
}

export default Dia;

