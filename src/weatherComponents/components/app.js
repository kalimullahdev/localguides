import React, { useEffect } from 'react';
import debounce from 'lodash-es/debounce';

import WeatherCard from './weather-card';
import Loading from './loading';
import { useLocation } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const MyApp = () => {
  const searchTimeout = 1000;
  const llocation = useLocation();
  const [location, setLocation] = React.useState('Karachi');
  const [error, setError] = React.useState(null);
  const [forecast, setForecast] = React.useState([]);
  const [weather, setWeather] = React.useState({});
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  const [units, setUnits] = React.useState('metric');

  const debounceSearch = React.useMemo(
    () =>
      debounce(searchTerm => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeout),
    [],
  );


  useEffect(() => {
    async function searchPlace(){
      if(llocation.state != null){
        setIsSearching(true);
      debounceSearch(llocation.state);
      }
    }
    searchPlace();
  }, [debounceSearch, llocation.state]);

  const handleUnitsChange = newUnits => {
    setUnits(newUnits);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, isSearching]);

  useEffect(() => {
    async function getWeather() {
      setError(null);
      setIsSearching(false);

      try {
        const weather = await fetchWeather(location, units);
        setWeather(weather);
      } catch (err) {
        setError(err);
      }
    }

    getWeather();
  }, [location, units]);

  useEffect(() => {
    async function getForecast() {
      setError(null);
      setIsSearching(false);

      try {
        const forecast = await fetchForecast(location, units);
        setForecast(forecast);
      } catch (err) {
        setError(err);
      }
    }

    getForecast();
  }, [location, units]);

  return (
      <>
      {(weather && Object.keys(weather).length) ||
            (forecast && Object.keys(forecast).length) ? (
              <main>
                <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
                  <WeatherCard
                    error={error}
                    forecast={forecast}
                    weather={weather}
                    units={units}
                    onUnitsChange={handleUnitsChange}
                  />
                </div>
              </main>
            ) : (
              <Loading />
            )}
      </>
  );
};

async function fetchForecast(location, units) {
  const response = await window.fetch(
    `${apiUrl}/forecast/?q=${location}&units=${units}&APPID=${apiKey}`,
  );
  const forecast = await response.json();
  if (response.ok) {
    if (Object.entries(forecast).length) {
      return forecast.list
        .filter(f => f.dt_txt.match(/09:00:00/))
        .map(mapDataToWeatherInterface);
    }
  } else {
    const error = new Error(`No results for "${location}"`);
    return Promise.reject(error);
  }
}

async function fetchWeather(location, units) {
  const response = await window.fetch(
    `${apiUrl}/weather/?q=${location}&units=${units}&APPID=${apiKey}`,
  );
  const weather = await response.json();
  if (response.ok) {
    if (Object.entries(weather).length) {
      return mapDataToWeatherInterface(weather);
    }
  } else {
    const error = new Error(`No results for "${location}"`);
    return Promise.reject(error);
  }
}

function mapDataToWeatherInterface(data) {
  const mapped = {
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt * 1000, // convert from seconds to milliseconds
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    sunrise: data.sys.sunrise * 1000, // convert from seconds to milliseconds
    sunset: data.sys.sunset * 1000, // convert from seconds to milliseconds
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600, // convert from seconds to hours
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = Math.round(data.main.temp_max);
    mapped.min = Math.round(data.main.temp_min);
  }

  // remove undefined fields
  Object.entries(mapped).map(
    ([key, value]) => value === undefined && delete mapped[key],
  );

  return mapped;
}

export default MyApp;
