import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import LoadingPage from './components/LoadingPage'
import { useState, useEffect } from 'react'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import { Link } from 'react-scroll'
import { FaChevronUp } from "react-icons/fa";
import WeatherDashboard from './pages/WeatherDashboard'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [IsLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
     
    const timer = setTimeout(() => {
        setIsLoading(false)
      }, 3000);
  
      return ()=>{ clearTimeout(timer);

       }
    
    
  }, [])
  
  

  return (
    <>


    

    {
      IsLoading ?  (<LoadingPage/> ) : 
      
      (
      <>


          
      <Navbar/>
      

      <Routes>
      <Route path='/' element={
        <>
        <HeroSection />
        <ContentSection/>
        </>
      
        } />
        
        <Route path='/WeatherDashboard' element={<WeatherDashboard />} />
      </Routes>

     
     <Link
      to="weatherSearch"
      smooth={true}
      duration={500}
      className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-700 transition duration-300"
    >
      <FaChevronUp size={20} />
    </Link>
    
     
        
     <Footer/>
      </>
      ) 
    }
        
</>  
  );
};

export default App