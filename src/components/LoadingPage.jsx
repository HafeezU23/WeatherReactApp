import React from 'react'
import { ping } from 'ldrs'
const LoadingPage = () => {

    ping.register()
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-blue-200'>

  <l-ping
  size="90"
  speed="2" 
  color="white" 
  ></l-ping>

    </div>
  )
}

export default LoadingPage





// Default values shown
