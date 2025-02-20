import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Insights } from "../weather";
import { ping } from "ldrs";
import { Link } from "react-router-dom";
import WeatherDashboard from "../pages/WeatherDashboard";

const HeroSection = () => {
  ping.register();
  const [weather, setWeather] = useState(null);
  const [InputCity, setInputCity] = useState(""); // ✅ Use an empty string
  const [City, setCity] = useState(""); // ✅ Use an empty string

  useEffect(() => {
    const fetchData = async () => {
      const data = await Insights("lahore");
      setWeather(data);
    };
    
    fetchData();
  }, []);

 
  const handleChange = (event) => {
    setInputCity(event.target.value); // ✅ Pass event
  };
  

  const handleSubmit = () => {
    setCity(InputCity); // ✅ Update City state correctly
  };

  return (
    <>
      <div
        className="w-full h-screen grid grid-cols-2 bg-[url('/homepage.jpg')] bg-center bg-cover bg-fixed"
        id="weatherSearch"
      >
        <div className="w-full col-span-1 h-full p-20 flex align-middle justify-center flex-col">
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-bold text-white"
          >
            <h2 className="pb-8 text-5xl text-black leading-relaxed">
              Weather forecasts for thousands of locations around the world
            </h2>
            <div className="flex justify-left items-center space-x-4">
              {/* ✅ Fixed onChange */}
              <input
                type="text"
                value={InputCity} // ✅ Controlled input
                onChange={handleChange} // ✅ Pass function reference
                placeholder="Search for a location..."
                className="w-[30rem] h-12 p-4 border-black bg-white border-2 text-black rounded-full"
              />

              {/* ✅ Fix button and Link structure */}
              <Link to="/WeatherDashboard">
                <button
                  className="text-3xl h-12 w-12 rounded-full bg-white border-2 border-black hover:border-[#1e86cb]"
                  onClick={handleSubmit}
                >
                  <i className="fa-duotone fa-solid fa-magnifying-glass text-black h-1 cursor-pointer hover:text-[#1e86cb] hover:transition-normal"></i>
                </button>
              </Link>

              {/* ✅ Pass updated City prop to WeatherDashboard */}
              {City && < WeatherDashboard city={City} />}
            </div>
          </motion.div>
        </div>

        <div className="w-full h-full p-20 flex align-middle justify-center flex-col">
          <motion.div
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-bold text-white"
          >
            <div className="h-[30rem] w-[32rem] rounded-2xl bg-[#032f96] flex justify-center items-center flex-col">
              {weather ? (
                <>
                  <div className="flex justify-center items-center space-x-4 p-4">
                    <img src="/sun.png" alt="img" className="h-16 w-auto" />
                    <p className="text-5xl">{weather.city}</p>
                    <p className="text-5xl">{weather.temperature}°</p>
                  </div>
                  <div className="grid grid-cols-2 space-y-3.5 p-4 h-[20rem] w-[23rem] bg-[#032d8e] rounded-2xl">
                    <div className="flex justify-center flex-col items-center">
                      <img src="/sunrise.png" alt="sunrise" className="h-9" />
                      <p>Sunrise</p>
                      <p>{weather.sunriseTime}</p>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                      <img src="/sunset.png" alt="sunset" className="h-9" />
                      <p>Sunset</p>
                      <p>{weather.sunsetTime} </p>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                      <img src="/humidity.png" alt="humidity" className="h-9" />
                      <p>Humidity</p>
                      <p>{weather.humidity}%</p>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                      <img src="/wind.png" alt="wind" className="h-7" />
                      <p>Wind Speed</p>
                      <p>{weather.windSpeed}km/h</p>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <l-ping size="45" speed="2" color=""></l-ping>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;