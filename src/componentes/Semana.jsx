
import { useEffect, useState } from "react"

function Semana({data, cambioImg}){
    const [semanas, setSemanas] = useState(null)

    const cambioSEmana = {
        Clear: "./public/img/Clear.png",
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
        const getSemanas = async () => {
            const seman = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=77e264a1bc872421b4e6ee74fc81cb0e`
                
            );
            const semans = await seman.json();

            console.log(semans);
            setSemanas(semans)

            const weatherDescription = datos.weather[0].main;
      if (cambioSEmana[weatherDescription]) {
        setCambioImg(cambioSEmana[weatherDescription]);
      }
        }
        getSemanas();
    },[]);


    return(
       <section className="semana">
            <section className="semana1">
                <h1>{semanas ? semanas.list[1].dt_txt : "Loading..."}</h1>
                <img src={cambioImg} alt="clima" />
                <h1>{semanas ? semanas.list[1].main.temp_min : "Loading..."}°c</h1><h1>{semanas ? semanas.list[1].main.temp_max : "Loading..."}°c</h1>
            </section>

            <section className="semana2">
                <h1>{semanas ? semanas.list[9].dt_txt : "Loading..."}</h1>
                <img src={cambioImg} alt="" />
                <h1>{semanas ? semanas.list[9].main.temp_min : "Loading..."}°c</h1><h1>{semanas ? semanas.list[9].main.temp_max : "Loading..."}°c</h1>
            </section>

            <section className="semana3">
                <h1>{semanas ? semanas.list[17].dt_txt : "Loading..."}</h1>
                <img src={cambioImg} alt="" />
                <h1>{semanas ? semanas.list[17].main.temp_min : "Loading..."}°c</h1><h1>{semanas ? semanas.list[17].main.temp_max : "Loading..."}°c</h1>
            </section>

            <section className="semana4">
                <h1>{semanas ? semanas.list[25].dt_txt : "Loading..."}</h1>
                <img src={cambioImg} alt="" />
                <h1>{semanas ? semanas.list[25].main.temp_min : "Loading..."}°c</h1><h1>{semanas ? semanas.list[25].main.temp_max : "Loading..."}°c</h1>
            </section>
            <section className="semana5">
                <h1>{semanas ? semanas.list[33].dt_txt : "Loading..."}</h1>
                <img src={cambioImg} alt="" />
                <h1>{semanas ? semanas.list[33].main.temp_min : "Loading..."}°c</h1><h1>{semanas ? semanas.list[33].main.temp_max : "Loading..."}°c</h1>
            </section>
        </section>
    )
}
export default Semana