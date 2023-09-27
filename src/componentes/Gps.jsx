import React, { useState, useEffect } from 'react';
import useApi from './servicios/useApi';// Importa el componente useApi

function Gps({ onLocationChange }) {
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          onLocationChange(latitude, longitude);
        },
        (error) => {
          console.error('Error obtaining location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  };

  return (
    <section>
      <button className="gps" onClick={handleGetLocation}>
        <span className="material-symbols-outlined">share_location</span>
      </button>
    </section>
  );
}

export default Gps;
