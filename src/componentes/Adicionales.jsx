import React, { useState, useEffect } from 'react';

function Adicionales({ data }) {
  const [humidityPercentage, setHumidityPercentage] = useState(0);

  useEffect(() => {
    if (data) {
      const humidity = data.main.humidity;
      setHumidityPercentage(humidity);
    }
  }, [data]);

  return (
    <div>
      <div className="today">
        <h1>Today's Highlights</h1>
      </div>
      <div className="adi-container">
        <div className="adi1">
          <h1>Wind status</h1>
          <h1>{data ? data.wind.deg : "Loading..."} mph</h1>
          <h1>wsw</h1>
        </div>
        <div className="adi2">
          <h1>Humidity</h1>
          <h1>{data ? data.main.humidity : "Loading..."} %</h1>
          <div className='por'>
          <h3>0</h3><h3>50</h3><h3>100</h3>
          </div>
          <div className="humidity-bar">
            <div
              className="humidity-fill"
              style={{ width: `${humidityPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="adi-container2">
        <div className="adi3">
          <h1>Air Pressure</h1>
          <h1>{data ? data.main.pressure : "Loading..."} mb</h1>
        </div>
        <div className="adi4">
          <h1>Visibility</h1>
          <h1>{data ? data.visibility : "Loading..."} miles</h1>
        </div>
      </div>
    </div>
  );
}

export default Adicionales;
