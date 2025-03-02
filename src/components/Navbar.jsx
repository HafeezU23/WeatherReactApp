import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-16 bg-black flex justify-between items-center p-4 fixed top-0 w-full z-50">
        {/* Logo */}
        <div className="text-white">
          <p className="text-3xl cursor-pointer hover:text-[#57afbe]">
            <Link to="/">AirView</Link>
          </p>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:block w-auto">
          <ul className="flex space-x-4 place-items-center">
            <li className="text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] hover:border-b-2 transition transform-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] hover:border-b-2 transition transform-300">
              <Link to="/">About</Link>
            </li>
            <li className="text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] hover:border-b-2 transition transform-300">
              <Link to="/">Contact</Link>
            </li>
            <li className="text-gray-300 pl-10 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] text-2xl">
              <a href="https://www.linkedin.com/in/hafeez-ullah-khan-211855293/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] text-2xl">
              <a href="https://www.threads.net/@hafeezullah2004" target="_blank">
                <i className="fa-brands fa-square-threads"></i>
              </a>
            </li>
            <li className="text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] text-2xl">
              <a href="https://github.com/HafeezU23" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
         <div className="lg:hidden block z-10"><FaArrowRightArrowLeft className="fixed rounded-full text-gray-700 top-18 right-4" size={22} onClick={()=>{setIsOpen(!isOpen)}}/></div>

         <div className={`absolute lg:hidden top-16 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isOpen == true ? "opacity-100" : "opacity-0"}`}
       
       style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
            
            <li className='list-none w-full text-center p-4 hover:bg-[#57afbe] hover:text-white transition-all cursor-pointer'><Link to="/">Home</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-[#57afbe]  hover:text-white transition-all cursor-pointer'><Link to="/">About</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-[#57afbe]  hover:text-white transition-all cursor-pointer'><Link to="/">Contact</Link></li>


       </div>
      </div>
    </>
  );
};

export default Navbar;