import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link, link } from 'react-scroll'
import { useState } from 'react'
import WeatherDashboard from '../pages/WeatherDashboard'
const ContentSection = () => {
    
    const [SelectedCity, setSelectedCity] = useState(null)
    const [ShowWeather, setShowWeather] = useState(false)
    
   const handleSubmit = (city) => {
     
       setSelectedCity(city);
    setShowWeather(true)


   }


  return (
    <>
    <div className='w-full h-screen grid grid-cols-2 bg-[#222222] text-white p-20'>
        <motion.div 

         variants={fadeIn('right', 0)}
         initial='hidden'
         whileInView='show'
         viewport={{ once: true, amount: 0.5 }}

        
        className='flex justify-center items-center flex-col text-2xl'>
            <p className='pb-6'>
            Source of any weather forecasts and updates.
            Stay updated of any weather changes with AirView. 
             </p>
             <p>
            We are an expert team specializing on everything that concerns weather data. Since 2010, our website has been providing accurate and detailed weather forecasts available on any device.
            </p>
        
        </motion.div>
        <motion.div 
            
        variants={fadeIn('left', 0)}
         initial='hidden'
         whileInView='show'
         viewport={{ once: true, amount: 0.5 }}

        
        
        className='flex justify-center items-center'>
            <img src="/frame.png" alt="frame" className='h-[25rem]'/>
        </motion.div>
    </div>
    <div className='w-full h-screen bg-[#222222] text-white p-20'>
        <h2 className='text-4xl'>World Weather Forecast</h2>
        <div className='flex justify-between items-center h-9 w-full pt-3'>
            <p className='text-sm'>please select a city</p>
            <Link to='weatherSearch' smooth={true} duration={2000}><p className='text-sm hover:cursor-pointer hover:text-[#57afbe]'>MORE LOCATIONS</p></Link>
            
        </div>
        <div className='grid grid-cols-4 gap-4 pt-4 space-y-6 mt-14'>
         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/PK/shiny/64.png"/><p>Lahore</p><i onClick={()=>{handleSubmit("lahore")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>


         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img  src="https://flagsapi.com/BD/shiny/64.png"/><p>Dhaka</p><i onClick={()=>{handleSubmit("dhaka")}}  className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>
         
         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/GB/shiny/64.png"/><p>London</p><i onClick={()=>{handleSubmit("london")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>



         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/TR/shiny/64.png"/><p>Istanbul</p><i onClick={()=>{handleSubmit("istanbul")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>

         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/US/shiny/64.png"/><p>Washington</p><i onClick={()=>{handleSubmit("washington")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>

         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/RU/shiny/64.png"/><p>Moscow</p><i onClick={()=>{handleSubmit("moscow")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>

         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/IN/shiny/64.png"/><p>Delhi</p><i onClick={()=>{handleSubmit("dehli")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>

         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/CN/shiny/64.png"/><p>Shanghai</p><i onClick={()=>{handleSubmit("shanghai")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>
        
         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/RU/shiny/64.png"/><p>Saint Petersburg</p><i onClick={()=>{handleSubmit("Saint Petersburg")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>

         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/SA/shiny/64.png"/><p>Riyadh</p><i onClick={()=>{handleSubmit("riyadh")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>

         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/OM/shiny/64.png"/><p>Muskat</p><i onClick={()=>{handleSubmit("Muskat")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>
          
         <div className='flex items-center justify-between h-12 w-full rounded-lg border-2 border-white py-3 px-1'><img src="https://flagsapi.com/ZA/shiny/64.png"/><p>Cape Town</p><i onClick={()=>{handleSubmit("cape town")}} className="fa-solid fa-arrow-up-right-from-square text-xl hover:cursor-pointer hover:text-[#57afbe] h-5"></i></div>
       
        </div>
    </div>
    { SelectedCity && ShowWeather && (<WeatherDashboard city={SelectedCity} onClose={()=>{setShowWeather(false)}}></WeatherDashboard>)}
    </>
  )
}

export default ContentSection



