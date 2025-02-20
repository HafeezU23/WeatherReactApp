import React, { useEffect, useState } from 'react';
import { Insights } from '../weather';
import { ping } from 'ldrs';

const WeatherDashboard = ({ city }) => {
  ping.register();
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
      if (!city) {
        console.error("City is undefined, cannot fetch weather data.");
        setIsLoading(false);
        return;
      }
      
      try {
        const data = await Insights(city);
        if (data) {
          setWeather(data);
        } else {
          console.error("No weather data returned.");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
}, [city]);
     

  return (
    <div className="h-screen bg-white w-full text-black text-2xl flex justify-center items-center" id="weatherSearch">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">{city}</h1>
        <div className="flex items-center space-x-4">
          <div>

            {isLoading ? (
              <p>Loading weather data ...</p>
            ) : weather ? ( 
              <p>Temperature: {weather.temperature}°C</p>
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;