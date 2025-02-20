import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen w-full bg-black'>
        <div className='grid grid-cols-2 gap-4 p-20 h-[70%]'>   
           <div className='flex justify-center items-left flex-col h-full'>
                <p className='text-gray-300 text-2xl pb-10'>AirView</p>
                 <p className='text-gray-300 text-normal'>
                 AirWeat partners with national weather services and qualified meteorologists to bring you accurate forecasts for any location. We help people understand the impact of weather, make the best decisions, and plan their day in advance.         </p>
           </div>

           <div className='flex justify-center items-left flex-col h-full'>
                  <p className='text-2xl text-gray-300 text-center pb-10'>FIND ME</p>
                  <div className='flex justify-center items-center text-gray-300	text-4xl'>
                  <a href="https://www.threads.net/@hafeezullah2004" target="_blank"><i className="fa-brands fa-square-threads pr-4 hover:text-[#57afbe]"></i></a>
                  <a href="https://www.linkedin.com/in/hafeez-ullah-khan-211855293/" target='_blank'><i className="fa-brands fa-linkedin pr-4 hover:text-[#57afbe]"></i></a>
                  <a href="https://github.com/HafeezU23" target='_blank'><i className="fa-brands fa-github hover:text-[#57afbe]"></i></a>
                  </div>
                
           </div>
           
        </div>
        

        <footer className="bg-black text-gray-300 text-sm p-8" >
      <div className="container mx-auto px-4">
        <hr className="border-gray-300 mb-4" />
        <div className="flex justify-start space-x-6">
          <span>Hafeez Ullah ©. All rights reserved.</span>
          <a href="#" className="hover:text-white transition duration-300">
            Privacy policy
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Terms & use
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer