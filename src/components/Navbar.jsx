import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    
    <div className='h-16 bg-black flex justify-between items-center p-4 fixed top-0 w-full z-50'>
        <div className='text-white'><p className='text-3xl cursor-pointer hover:text-[#57afbe]  '><Link to='/'>AirView</Link></p></div>
        <div>
            <ul className='flex space-x-4 place-items-center'>
                <li className='text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] hover:border-b-2 transition transform-300'><Link to='/'>Home</Link></li>
                <li className='text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] hover:border-b-2 transition transform-300'><Link to='/'>About</Link></li>
                <li className='text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] hover:border-b-2 transition transform-300'><Link to='/'>Contact</Link></li>

               <li className='text-gray-300 pl-10  hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] text-2xl'> <a href="https://www.linkedin.com/in/hafeez-ullah-khan-211855293/" target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>

               <li className='text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] text-2xl'><a href="https://www.threads.net/@hafeezullah2004" target="_blank"><i class="fa-brands fa-square-threads"></i></a></li>

                <li className='text-gray-300 hover:text-[#57afbe] cursor-pointer hover:border-b-[#57afbe] text-2xl'><a href="https://github.com/HafeezU23" target='_blank'><i class="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
    </div>
    
    
    </>
    
  )
}

export default Navbar