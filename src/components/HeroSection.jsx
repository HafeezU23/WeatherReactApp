import React, { useState, useEffect} from "react";
import browseGIF from "../assets/browse.gif" //
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Insights } from "../weather";
import { ping } from "ldrs";
import WeatherDashboard from "../pages/WeatherDashboard";


const HeroSection = () => {
  ping.register();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState(""); // ✅ Use controlled input
  const [searchCity, setSearchCity] = useState(""); // ✅ Separate state for search
      const [showWeather, setShowWeather] = useState(false);
   
  useEffect(() => {
    const fetchData = async () => {
      if (searchCity) {
        const data = await Insights(searchCity);
        setWeather(data);
      }
    };
    fetchData();
  }, [searchCity]); // ✅ Run effect when searchCity changes

  // useEffect(() => {
    
  // if(showWeather){
  //   document.body.style.overflow = "hidden";
    
  // }
  // else {
  //   document.body.style.overflow = "auto"; // Enable scrolling
  // }
    
  // }, [showWeather])
  

  const handleSubmit = () => {
    if (city.trim() !== "") {
      setSearchCity(city); // ✅ Trigger fetch for new city
      setShowWeather(true);
      
    }
  };

  return (
    <>
      <div
        className="w-full h-auto lg:h-screen grid grid-rows-2 lg:grid lg:grid-cols-2 bg-[url('/homepage.jpg')] bg-center bg-cover bg-fixed"
        id="weatherSearch"
      >
        <div className="w-screen lg:w-full col-span-1  lg:h-screen p-10 lg:p-20 flex align-middle justify-center flex-col">
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-bold text-white"
          >
            <h2 className="pb-8 text-2xl lg:text-5xl text-black leading-relaxed">
              Weather forecasts for thousands of locations around the world
            </h2>
            <div className="flex justify-left items-center space-x-4">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for a location..."
                className="w-full lg:w-[30rem] h-12 p-4 border-black bg-white border-2 text-black rounded-full"
              />
              <button
                className="text-lg lg:text-3xl h-12 w-12 rounded-full bg-white border-2 border-black hover:border-[#1e86cb]"
                onClick={handleSubmit}
              >
                <i className="fa-duotone fa-solid fa-magnifying-glass text-black h-1/2 lg:h-1 cursor-pointer hover:text-[#1e86cb] hover:transition-normal"></i>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="w-screen lg:w-full lg:h-screen p-10 lg:p-20 flex align-middle justify-center flex-col ">
          <motion.div
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-bold text-white"
          >
            <div className="h-[25rem] w-72 lg:h-[30rem] lg:w-[32rem] rounded-2xl bg-[#032f96] md:flex justify-center items-center flex-col mb-16 lg:mb-0 hidden">
              {weather ? (
                weather.error ? (
                  <p className="text-2xl text-red-500">{weather.error}</p>
                ) : (
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
                )
              ) : (
                <div className="text-center w-screen lg:w-full flex flex-col items-center justify-center">  
                
                  <img src={browseGIF} alt="loading" className="h-28 lg:h-48 w-auto mix-blend-normal" />
                   <p className="text-lg lg:text-2xl text-white ">Browse you first City</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
       
      {/* ✅ Pass city as a prop to WeatherDashboard */}
      {searchCity && showWeather && (<WeatherDashboard city={searchCity} onClose={()=>{setShowWeather(false)}}/>)}
    </>
  );
};

export default HeroSection;