import React, { useEffect, useState } from "react";

function Dia() {
  const city = "japon";
  const [data, setData] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [cambioImg, setCambioImg] = useState(null);

  const cambioImgs = {
    Clear: "./public/img/Clear.png",
    Hail: "./public/img/Hail.png", 
    Clouds: "./public/img/HeavyCloud.png",
    Rain: "./public/img/HeavyRain.png",
    LightCloud: "./public/img/LightCloud.png",
    LightRain: "./public/img/LightRain.png",
    Shower: "./public/img/Shower.png",
    Sleet: "./public/img/Sleet.png",
    Snow: "./public/img/Snow.png",
    Thunderstorm: "./public/img/Thunderstorm.png",

  };

  useEffect(() => {
    const getData = async () => {
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77e264a1bc872421b4e6ee74fc81cb0e`
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

  return (
    <section className="pag">
      {cambioImg && <img src={cambioImg} alt="" />}
      <div>
        <h1>{data ? data.main.temp : "Loading..."}</h1>
      </div>
      <div>
        <h3>{data ? data.weather[0].main : "Loading..."}</h3>
      </div>
      <div>
        <h5>{currentDate}</h5>
      </div>
      <div>
        <h5>{city}</h5>
      </div>
    </section>
  );
}

export default Dia;
