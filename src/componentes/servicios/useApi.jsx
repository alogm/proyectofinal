import React, { useState, useEffect } from 'react';

function useApi() {
  const city = "london"; 
  const [data, setData] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [cambioImg, setCambioImg] = useState({});

  const apiKey = '77e264a1bc872421b4e6ee74fc81cb0e';

  const cambioImgs = {
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
    const getData = async () => {
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const datos = await api.json();

      console.log(datos);
      setData(datos);

      // Obtener el código de icono del clima para seleccionar la imagen adecuada
      const weatherDescription = datos.weather[0].main;
      const weatherIconCode = cambioImgs[weatherDescription];
      if (weatherIconCode) {
        setCambioImg({ [weatherDescription]: weatherIconCode });
      }
      
    };
    getData();

   
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  return { data, currentDate, cambioImg };
}

export default useApi;