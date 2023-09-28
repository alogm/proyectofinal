import React, { useEffect } from 'react';
import Cambio from './Cambio';
function Dia({ data, currentDate, city }) {

  const cambiodia = {
    Clear: "https://github.com/alogm/proyectofinal/blob/master/public/img/Clear.png?raw=true",
    Hail: "https://github.com/alogm/proyectofinal/blob/master/public/img/Hail.png?raw=true",
    Cloud: "https://github.com/alogm/proyectofinal/blob/master/public/img/HeavyCloud.png?raw=true",
    Rain: "https://github.com/alogm/proyectofinal/blob/master/public/img/HeavyRain.png?raw=true",
    Clouds: "https://github.com/alogm/proyectofinal/blob/master/public/img/LightCloud.png?raw=true",
    LightRain: "https://github.com/alogm/proyectofinal/blob/master/public/img/LightRain.png?raw=true",
    Shower: "https://github.com/alogm/proyectofinal/blob/master/public/img/Shower.png?raw=true",
    Sleet: "https://github.com/alogm/proyectofinal/blob/master/public/img/Sleet.png?raw=true",
    Snow: "https://github.com/alogm/proyectofinal/blob/master/public/img/Snow.png?raw=true",
    Thunderstorm: "https://github.com/alogm/proyectofinal/blob/master/public/img/Thunderstorm.png?raw=true",
    Mist: "https://img2.freepng.es/20180406/qdq/kisspng-condensation-cloud-animation-clip-art-mist-5ac7fc2920a0f2.7650557115230556571337.jpg"
  };
  
  useEffect(() => {
   
  }, [data]);

  return (
    <section className="pag">
      <img src={ data ? cambiodia[data.weather[0].main] : "Loading..." } alt="clima"/>
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

