import React from 'react';
import './Weather.css';

import search from '../Assets/search.png';
import cloud from '../Assets/cloud.png';
import humidityIcon from '../Assets/humidity.png';
import windIcon from '../Assets/wind.png';

const Weather = () => {
  let api = 'b77b939eeb92cc3c527b7ff9ea076fb5';

  const searchs = async () => {
    const element = document.getElementsByClassName('city')[0];
    if (element.value === '') {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&lat=44.34&lon=10.99&appid=${api}`;
    let response = await fetch(url);

    if (!response.ok) {
      alert('Failed to fetch weather data');
      return;
    }

    let data = await response.json();

    const humidityElem = document.getElementsByClassName('humidity-percent')[0];
    const windElem = document.getElementsByClassName('wind-rate')[0];
    const temperatureElem = document.getElementsByClassName('weather-temp')[0];
    const locationElem = document.getElementsByClassName('weather-location')[0];

    humidityElem.innerHTML = `${data.main.humidity}%`;
    windElem.innerHTML = `${data.wind.speed} km/h`;
    // Convert temperature from Kelvin to Celsius
    temperatureElem.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}°C`;
    locationElem.innerHTML = data.name;
  };

  return (
    <div className='container'>
      <div className='top'>
        <input type="text" className='city' placeholder='Please enter the city name' />
        <div className='search' onClick={searchs}>
          <img src={search} alt='' />
        </div>
      </div>
      <div className="weather">
        <img src={cloud} alt="" />
      </div>
      <div className="weather-temp">
        24 
      </div>
      <div className="weather-location">London</div>
      <div className='data-container'>
        <div className="element">
          <img src={humidityIcon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className='text'>humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className='text'>wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
