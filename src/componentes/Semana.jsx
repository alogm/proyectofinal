import React, { useEffect, useState } from "react";

function Semana({ city }) {
  const [semanas, setSemanas] = useState(null);
  const apiKey = "77e264a1bc872421b4e6ee74fc81cb0e"; // 
 

  const cambioSemana = {
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
  };

  useEffect(() => {
    const getSemanas = async () => {
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
console.log(response);
        const semans = await response.json();
        setSemanas(semans);
      } catch (error) {
       
      }
    };
    if (city) {
        getSemanas();
      }
  }, [city]);

  const diasDeLaSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <section className="semana">
      {semanas &&
        [1].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>Tommorow</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" className="imgsema" />
            <h4>{semanas.list[index].main.temp_min}°c</h4>
            <h4>{semanas.list[index].main.temp_max}°c</h4>
     
          </section> ))}
          
          {semanas &&
        [9].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h4>{semanas.list[index].main.temp_min}°c</h4>
            <h4>{semanas.list[index].main.temp_max}°c</h4>

     
          </section> ))}

          {semanas &&
        [17].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h4>{semanas.list[index].main.temp_min}°c</h4>
            <h4>{semanas.list[index].main.temp_max}°c</h4>

     
          </section> ))}

          {semanas &&
        [25].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h4>{semanas.list[index].main.temp_min}°c</h4>
            <h4>{semanas.list[index].main.temp_max}°c</h4>

     
          </section> ))}

         {semanas &&
        [33].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h4>{semanas.list[index].main.temp_min}°c</h4>
            <h4>{semanas.list[index].main.temp_max}°c</h4>

     
          </section> ))}


    </section>
  );
}

export default Semana;