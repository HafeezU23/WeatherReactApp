


import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="grid grid-rows-2 lg:grid-cols-2 gap-4 p-10 md:p-20 h-auto">   
        <div className="flex justify-center items-left flex-col h-full">
          <p className="text-gray-300 text-xl md:text-2xl pb-5 md:pb-10">AirView</p>
          <p className="text-gray-300 text-sm md:text-base">
            AirWeat partners with national weather services and qualified meteorologists to bring you accurate forecasts for any location. We help people understand the impact of weather, make the best decisions, and plan their day in advance.
          </p>
        </div>

        <div className="flex justify-center items-left flex-col h-full mt-6 lg:mt-0">
          <p className="text-xl md:text-2xl text-gray-300 text-left lg:text-center pb-5 md:pb-10">FIND ME</p>
          <div className="flex justify-center items-center space-x-3 md:space-x-4 text-gray-300 text-xl md:text-3xl">
            <a href="https://www.threads.net/@hafeezullah2004" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-threads hover:text-[#57afbe]"></i>
            </a>
            <a href="https://www.linkedin.com/in/hafeez-ullah-khan-211855293/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin hover:text-[#57afbe]"></i>
            </a>
            <a href="https://github.com/HafeezU23" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github hover:text-[#57afbe]"></i>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-black text-gray-300 text-xs md:text-sm p-6 md:p-8">
        <div className="container mx-auto px-4">
          <hr className="border-gray-300 mb-4" />
          <div className="flex flex-col md:flex-row justify-start md:space-x-6 text-center md:text-left">
            <span>Hafeez Ullah ©. All rights reserved.</span>
            <a href="#" className="hover:text-white transition duration-300">Privacy policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms & use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;