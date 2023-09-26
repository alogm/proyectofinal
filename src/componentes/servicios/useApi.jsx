import React, { useState, useEffect } from 'react';
import Search from '../Seach';

function useApi() {
  const  city = "mexico"
  const [data, setData] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [cambioImg, setCambioImg] = useState(null);

  const cambioImgs = {
    Clear: "https://scontent.fmex1-5.fna.fbcdn.net/v/t39.30808-6/380821275_6973001162718244_7261190589252990631_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEvMC-21lg1PfNY-imYmUzAwAp7d2-VKiDACnt3b5UqIPN0pAFegBdLzwcj1jiZ1EOPAGe7W6D9g0asDT_8AYxm&_nc_ohc=pqEYvqA2vSMAX9IDB2t&_nc_ht=scontent.fmex1-5.fna&oh=00_AfANM936Es9GNRBx3ks-UVqPlVODDLsmmM8NTl4XxM5DWA&oe=6517FEFC",
    Hail: "./public/img/Hail.png",
    Cloud: "./public/img/HeavyCloud.png",
    Rain: "./public/img/HeavyRain.png",
    Clouds: "./public/img/LightCloud.png",
    LightRain: "./public/img/LightRain.png",
    Shower: "./public/img/Shower.png",
    Sleet: "./public/img/Sleet.png",
    Snow: "./public/img/Snow.png",
    Thunderstorm: "./public/img/Thunderstorm.png",
  };

  useEffect(() => {
    const getData = async () => {
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const datos = await api.json();

      console.log(datos);
      setData(datos);

      // Obtener la descripción del clima para seleccionar la imagen adecuada
      const weatherDescription = datos.weather[0].main;
      if (cambioImgs[weatherDescription]) {
        setCambioImg(cambioImgs[weatherDescription]);
      }
    };
    getData();

    // Obtener la fecha actual y formatearla
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  
 

  return { data, currentDate, cambioImg };
}

export default useApi;
