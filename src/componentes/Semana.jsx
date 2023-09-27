import React, { useEffect, useState } from "react";

function Semana({ city }) {
  const [semanas, setSemanas] = useState(null);
  const apiKey = "77e264a1bc872421b4e6ee74fc81cb0e"; // 
 

  const cambioSemana = {
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
    const getSemanas = async () => {
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
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
            <h1>{semanas.list[index].main.temp_min}°c</h1>
            <h1>{semanas.list[index].main.temp_max}°c</h1>

     
          </section> ))}
          
          {semanas &&
        [9].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h1>{semanas.list[index].main.temp_min}°c</h1>
            <h1>{semanas.list[index].main.temp_max}°c</h1>

     
          </section> ))}

          {semanas &&
        [17].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h1>{semanas.list[index].main.temp_min}°c</h1>
            <h1>{semanas.list[index].main.temp_max}°c</h1>

     
          </section> ))}

          {semanas &&
        [25].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h1>{semanas.list[index].main.temp_min}°c</h1>
            <h1>{semanas.list[index].main.temp_max}°c</h1>

     
          </section> ))}

         {semanas &&
        [33].map((index) => (
          <section className={`semana${index}`} key={index}>
            <h1>{semanas.list[index].dt_txt}</h1>
            <img src={cambioSemana[semanas.list[index].weather[0].main]} alt="clima" />
            <h1>{semanas.list[index].main.temp_min}°c</h1>
            <h1>{semanas.list[index].main.temp_max}°c</h1>

     
          </section> ))}


    </section>
  );
}

export default Semana;