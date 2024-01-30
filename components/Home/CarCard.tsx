import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
function CarCard(props: any) {
    const [car, setCar] = useState<any>();



    useEffect(() => {
        if (props.car) {
            setCar(props.car)
        }
    }, [props.car])






    return car && (
        <div className='group bg-gray-50 p-4 rounded-3xl mx-5 my-6
        sm:p-5  m-1 hover:bg-white 
        hover:border-[6px]   cursor-pointer duration-50  border-black-150'>

            <h2 className=' text-[20px] font-medium mb-2'> {car.name}</h2>
            <h2 className='text-[28px] font-bold mb-2'>
                <span className='text-[12px] font-light'>$</span>
                {car.price}
                <span className='text-[12px] font-light'>/day</span></h2>
            <Image src={car.image?.url}
                alt={car.name}
                width={200}
                height={150}
                className='w-[250px] h-[270px] mb-3 object-contain' />
            <div className='flex justify-around group-hover:hidden'>
                <div className='text-center text-black'>
                    <PiSteeringWheelFill className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[15px] font-light'>{car.carType}</h2>
                </div>
                <div className='text-center text-black'>
                    <FaGasPump className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[15px] font-light'>{car.carAvg}</h2>
                </div>
            </div>

            <button className='hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-700
           p-2 rounded-lg   text-white w-full px-5 justify-betwen'>Rent Now
                <span className=' p-1 rounded-md'>
                    <FaAngleDoubleRight />
                </span>
            </button>
        </div>
    )
}

export default CarCard