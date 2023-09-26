import React from 'react';

function Dia({ data, currentDate, cambioImg}) {
  return (
    <section className="pag">
      {cambioImg && <img src={cambioImg} alt="clima" />}
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
        <h5>
          <span className="material-symbols-outlined">location_on</span>{data ? data.name : "Loading..."}
        </h5>
      </div>
    </section>
  );
}

export default Dia;

