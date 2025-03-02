import React, { useEffect, useState, useRef, useMemo } from 'react';
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
   
  const videoURL = useMemo(() => {
    if (!weather || !weather.main) return null;  // Ensure weather.main exists
    const currentTime = new Date().getTime() / 1000;
    if(currentTime < weather.sunsetTime && currentTime >= weather.sunriseTime) {
    switch (weather.main.toLowerCase()) {
      case "clear":
        return "https://assets.mixkit.co/videos/1706/1706-720.mp4";
      case "rain":
        return "https://assets.mixkit.co/videos/2846/2846-720.mp4";
      case "clouds":
        return "https://assets.mixkit.co/videos/47180/47180-720.mp4";
      case "snow":
        return "https://assets.mixkit.co/videos/47703/47703-720.mp4";
      case "thunderstorm":
        return "https://assets.mixkit.co/videos/9681/9681-720.mp4";
      default:
        return "https://assets.mixkit.co/videos/1706/1706-720.mp4";
    }
  }
    else{

      switch (weather.main.toLowerCase()) {
        case "clear":
          return "https://assets.mixkit.co/videos/4124/4124-720.mp4";
        case "rain":
          return "https://assets.mixkit.co/videos/28097/28097-720.mp4";
        case "clouds":
          return "https://assets.mixkit.co/videos/30586/30586-720.mp4";
        case "snow":
          return "https://assets.mixkit.co/videos/27439/27439-720.mp4";

        case "thunderstorm":
           return "https://assets.mixkit.co/videos/25081/25081-720.mp4";
        default:
          return "https://assets.mixkit.co/videos/4081/4081-720.mp4";

      }

    
  }
  }, [weather]);
  



  return (
    <motion.div ref={modelRef} onClick={model} className="fixed inset-0 h-[50rem] pb-6 lg:h-screen w-full  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-40"
            
     initial={{opacity: 0}}
     animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}  
    
    >
      

      {/* White Content Box */}
      <AnimatePresence>
        { weather ? (
          <>
      <motion.div className="bg-white bg-opacity-90 pb-14 mt-12 lg:mt-10 p-8 rounded-xl h-[38rem] lg:h-[35rem] shadow-lg w-screen lg:w-[80rem] relative z-50 text-white pt-2  lg:pt-2"
                  
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
        <div className='grid grid-rows-6 lg:grid-cols-6 gap-4 h-auto w-auto my-3'>
        <div className='col-start-1 w-full mr-4 col-end-3'>
          
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">{city}</h2>
        <p className=' text-2xl lg:text-4xl mb-4'>  {weather?.description || "Loading..."}</p>
          <div className='grid grid-cols-2 gap-4'>
            <div>
          <div className='bg-transparent flex flex-col justify-center items-center lg:w-[10rem] lg:h-[10rem] p-2 rounded-lg backdrop-blur-xl text-white'>
            <span className='flex items-center justify-center'> 
              <p  className='pb-2.5'>Wind</p>
              </span>
              <div className='text-white'>
                <p>Speed: {weather?.windSpeed || "..."} m/s</p>
                <p>Direction: {weather?.wind_degree || "..."}°</p>
              </div>
          </div>
          <div className='bg-transparent backdrop-blur-xl flex flex-col justify-center items-center lg:w-[10rem] lg:h-[10rem] p-2 rounded-lg mt-2'>
            <span className='flex items-center justify-center'> 
              <p  className='pb-2.5'>Visibility</p>
              </span>
              <div className='flex items-center justify-center'>
              <p>{weather?.visi || "Loading..."} M</p>
              </div>
        
          </div>
          </div>
          <div>
          <div className='bg-transparent backdrop-blur-xl flex flex-col justify-center items-center lg:w-[10rem] lg:h-[10rem] p-2 rounded-lg'>
            <span className='flex items-center justify-center'> 
              <p className='pb-2.5'>Pressure</p>
              </span>
              <div className='flex items-center justify-center'>
              <p>{weather?.pressure || "Loading..."} hPa</p>
              </div>
        
          </div>

          <div className='bg-transparent backdrop-blur-xl flex flex-col justify-center items-center lg:w-[10rem] lg:h-[10rem] p-2 rounded-lg mt-2'>
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

        
         <div className='col-span-4 col-start-3 col-end-4 lg:col-end-6 w-full bg-red-50 -z-10'>
              <video src={videoURL}
               muted
               autoPlay
                loop
                className='absolute top-0 left-0 w-full h-full object-cover rounded-xl'
              
              ></video>
   

         </div>
            
          <div className='w-full h-auto'>
         <div className=' w-full text-white lg:h-32  bg-transparent backdrop-blur-xl rounded-lg lg:mt-2 flex flex-row lg:flex-col justify-center items-center'>
         <h2 className="text-xl p-2 w- lg:p-0 lg:text-4xl font-bold mb-4">{weather.temperature}°C</h2>
         <p className='pl-6 w-40 lg:p-0'>Feels like {weather?.feels_like || "Loading..."}°C </p>
         </div>

           <div className=' w-full text-white lg:h-32  bg-transparent backdrop-blur-xl rounded-lg mt-2 flex flex-row lg:flex-col justify-between lg:justify-center items-center p-2 lg:p-0'>
                     <img src="./sunrise.png" alt="sunrise" />
                     <p>{weather?.sunriseTime || "..."}</p>
           </div>

           <div className=' w-full text-white lg:h-32  bg-transparent backdrop-blur-xl rounded-lg mt-2 flex flex-row lg:flex-col justify-between lg:justify-center items-center p-2'>
                     <img src="./sunset.png" alt="sunrise" />
                     <p>{weather?.sunsetTime || "..."}</p>
           </div>
              
          </div>


         </div>
         
      </motion.div>
      </>) : (
        <>
             { videoURL &&  (<l-ping size="45" speed="2" color=""></l-ping>)}
             </>
      )
}
      </AnimatePresence>
      
    </motion.div>
  
  );

};

export default WeatherDashboard;

