import React from 'react';
import Image from 'next/image'

function Hero() {
  return (
    <div className='grid grid-cols-1
    md:grid-cols-2'>
        <div>
        <h2 className='text-black text-[40px] md:text-[50px]
        font-bold'>Premium Car Rental</h2>
        <h2 className='text-[20px] text-gray-500 pr-20 mt-5'>
            Book the Car easily from anywhere 
           
        </h2>
        <h2 className='text-[20px] text-gray-500 pr-20 mt-5'>
        Travel with our vehicle 
            Book NOW.
           
        </h2>
        
        <button className='p-2 mt-5 bg-blue-500 text-white px-4 rounded-full 
        hover:scale-105 transition-all'>Explore Cars </button>

        </div>

        <div>
            <Image src="/cfr.svg"  alt='hero'
             width={300}
             height={500}
             className='w-full object-cover align-middle'
            />

        </div>

    </div>
  )
}

export default Hero;