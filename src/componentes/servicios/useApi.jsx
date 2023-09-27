import { useState, useEffect } from 'react';

function useApi(city = "London", latitude, longitude) {
  const [data, setData] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const apiKey = '77e264a1bc872421b4e6ee74fc81cb0e';

  useEffect(() => {
    const getData = async () => {
      let apiUrl = '';

      if (latitude !== null && longitude !== null) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      }

      const api = await fetch(apiUrl);
      const datos = await api.json();

      console.log(datos);
      setData(datos);
    };

    getData();

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, [city, latitude, longitude]); // Actualiza cuando cambian la ciudad o las coordenadas

  return { data, currentDate, city };
}

export default useApi;
