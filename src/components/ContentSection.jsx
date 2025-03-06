import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import WeatherDashboard from '../pages/WeatherDashboard';

const ContentSection = () => {
  const [SelectedCity, setSelectedCity] = useState(null);
  const [ShowWeather, setShowWeather] = useState(false);

  const handleSubmit = (city) => {
    setSelectedCity(city);
    setShowWeather(true);
  };

  return (
    <>
      <div className="w-full h-auto lg:h-[60vh] grid grid-cols-1 lg:grid-cols-2 bg-[#222222] text-white p-6 sm:p-12">
        <motion.div
          variants={fadeIn('right', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col justify-center items-center text-sm sm:text-lg lg:text-2xl text-center lg:text-left"
        >
          <p className="pb-4 sm:pb-6">
            Source of any weather forecasts and updates.
            Stay updated with AirView.
          </p>
          <p>
            Since 2010, our expert team has provided accurate weather forecasts available on any device.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center items-center"
        >
          <img src="/frame.png" alt="frame" className="h-[15rem] sm:h-[20rem] lg:h-[25rem]" />
        </motion.div>
      </div>

      <div className="w-full h-auto bg-[#222222] text-white p-6 sm:p-12">
        <h2 className="text-lg sm:text-2xl lg:text-4xl">World Weather Forecast</h2>
        <div className="flex justify-between items-center pt-3">
          <p className="text-xs sm:text-sm hidden lg:block">Please select a city</p>
          <Link to="weatherSearch" smooth={true} duration={2000}>
            <p className="text-xs sm:text-sm hover:cursor-pointer hover:text-[#57afbe]">MORE LOCATIONS</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mt-8">
          {[
            { name: 'Lahore', code: 'PK' },
            { name: 'Dhaka', code: 'BD' },
            { name: 'London', code: 'GB' },
            { name: 'Istanbul', code: 'TR' },
            { name: 'Washington', code: 'US' },
            { name: 'Moscow', code: 'RU' },
            { name: 'Delhi', code: 'IN' },
            { name: 'Shanghai', code: 'CN' },
            { name: 'Saint Petersburg', code: 'RU' },
            { name: 'Riyadh', code: 'SA' },
            { name: 'Muscat', code: 'OM' },
            { name: 'Cape Town', code: 'ZA' },
          ].map((city, index) => (
            <div
              key={index}
              className="flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-4 text-sm sm:text-base"
            >
              <img src={`https://flagsapi.com/${city.code}/shiny/64.png`} alt={city.name} className="h-6 sm:h-8" />
              <p>{city.name}</p>
              <i
                onClick={() => handleSubmit(city.name.toLowerCase())}
                className="fa-solid fa-arrow-up-right-from-square text-lg hover:cursor-pointer hover:text-[#57afbe]"
              ></i>
            </div>
          ))}
        </div>
      </div>

      {SelectedCity && ShowWeather && (
        <WeatherDashboard city={SelectedCity} onClose={() => setShowWeather(false)} />
      )}
    </>
  );
};

export default ContentSection;