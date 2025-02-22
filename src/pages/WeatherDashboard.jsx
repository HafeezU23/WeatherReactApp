import React, { useEffect, useState, useRef } from 'react';
import { Insights } from '../weather';
import { ping } from 'ldrs';
import { motion, AnimatePresence } from 'framer-motion';
const WeatherDashboard = ({ city, onClose}) => {
  ping.register();
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      if (!city) {
        setIsLoading(false);
        return;
      }

      try {
        const data = await Insights(city);
        if (data.error) {
          console.error("API Error:", data.error);
        } else {
          setWeather(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);
  //  console.log(city);
  const modelRef = useRef();

  const model = (e) =>{
    if(modelRef.current === e.target
    ){
      onClose();
    }

  }
   
  return (
    <motion.div ref={modelRef} onClick={model} className="fixed inset-0 h-screen w-full  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-40"
            
     initial={{opacity: 0}}
     animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}  
    
    >
      

      {/* White Content Box */}
      <AnimatePresence>
        { weather ? (
          <>
      <motion.div className="bg-white bg-opacity-90 p-8 rounded-xl h-[35rem] shadow-lg w-[80rem] relative z-50 text-white"
                  
                  initial={{ scale: 0.8, opacity: 0 }} // Scale-in animation
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}

                 
      >
        
        
        <div className='flex justify-between items-center '>
          <h1>AirView ForeCast</h1>
      <button
          onClick={onClose}  
          className=" bg-gray-200 text-red-500 px-4 hover:bg-gray-300 py-2 rounded-lg"
        >
         X
        </button>
        </div>
        <div className='grid grid-cols-6 gap-4 h-auto w-auto my-3'>
        <div className='col-start-1 w-full mr-4 col-end-3'>
          
        <h2 className="text-4xl font-bold mb-4">{city}</h2>
        <p className='text-4xl mb-4'>  {weather?.description || "Loading..."}</p>
          <div className='grid grid-cols-2 gap-4'>
            <div>
          <div className='bg-transparent flex flex-col justify-center items-center w-[10rem] h-[10rem] p-2 rounded-lg backdrop-blur-xl text-white'>
            <span className='flex items-center justify-center'> 
              <p  className='pb-2.5'>Wind</p>
              </span>
              <div className='text-white'>
                <p>Speed: {weather?.windSpeed || "..."} m/s</p>
                <p>Direction: {weather?.wind_degree || "..."}°</p>
              </div>
          </div>
          <div className='bg-transparent backdrop-blur-xl flex flex-col justify-center items-center w-[10rem] h-[10rem] p-2 rounded-lg mt-2'>
            <span className='flex items-center justify-center'> 
              <p  className='pb-2.5'>Visibility</p>
              </span>
              <div className='flex items-center justify-center'>
              <p>{weather?.visi || "Loading..."} M</p>
              </div>
        
          </div>
          </div>
          <div>
          <div className='bg-transparent backdrop-blur-xl flex flex-col justify-center items-center w-[10rem] h-[10rem] p-2 rounded-lg'>
            <span className='flex items-center justify-center'> 
              <p className='pb-2.5'>Pressure</p>
              </span>
              <div className='flex items-center justify-center'>
              <p>{weather?.pressure || "Loading..."} hPa</p>
              </div>
        
          </div>

          <div className='bg-transparent backdrop-blur-xl flex flex-col justify-center items-center w-[10rem] h-[10rem] p-2 rounded-lg mt-2'>
            <span className='flex items-center justify-center'> 
              <p className='pb-2.5' >Humidity</p>
              </span>
              <div className='flex flex-col items-center justify-center'>
              <p>{weather?.humidity || "Loading..."} %</p>
              <p>{weather?.humidity <= 30 ? "Low Humadity" : weather?.humidity <=60 ? "Medium Humadity" : "High Humadity" }</p>
              </div>
        
          </div>
          </div>
          </div>
        </div>

        
         <div className='col-span-4 col-start-3 col-end-6 w-full bg-red-50 -z-10'>
              <video src="https://cdn.pixabay.com/video/2015/10/23/1154-143492926_medium.mp4 "
               muted
               autoPlay
                loop
                className='absolute top-0 left-0 w-full h-full object-cover rounded-xl'
              
              ></video>
   

         </div>
            
          <div className='w-full h-auto'>
         <div className=' w-full text-white h-32  bg-transparent backdrop-blur-xl rounded-lg mt-2 flex flex-col justify-center items-center'>
         <h2 className="text-4xl font-bold mb-4">{weather.temperature} °C</h2>
         <p>Feels like {weather?.feels_like || "Loading..."} °C </p>
         </div>

           <div className=' w-full text-white h-32  bg-transparent backdrop-blur-xl rounded-lg mt-2 flex flex-col justify-center items-center'>
                     <img src="./sunrise.png" alt="sunrise" />
                     <p>{weather?.sunriseTime || "..."}</p>
           </div>

           <div className=' w-full text-white h-32  bg-transparent backdrop-blur-xl rounded-lg mt-2 flex flex-col justify-center items-center'>
                     <img src="./sunset.png" alt="sunrise" />
                     <p>{weather?.sunsetTime || "..."}</p>
           </div>
              
          </div>


         </div>
         
      </motion.div>
      </>) : (
             <l-ping size="45" speed="2" color=""></l-ping>
      )
}
      </AnimatePresence>
      
    </motion.div>
  
  );

};

export default WeatherDashboard;