import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function NavBar() {
  return (
    <div className='flex items-center justify-between p-0.2 px-6 shadow-sm border-b-[2px]'>
       <Image src='/carlogo2.png'
       alt='logo'
       width={70}
       height={70}
       />
       <div className=' hidden md:flex gap-5'>
        <h2 className='text-black hover:bg-blue-900
        px-5 cursor-pointer 
        p-2 rounded-full hover:text-white'>Home</h2>

         <h2 className='text-black hover:bg-blue-900
        px-5 cursor-pointer 
        p-2 rounded-full hover:text-white'>History</h2>  

        <h2 className='text-black hover:bg-blue-900
        px-5 cursor-pointer 
        p-2 rounded-full hover:text-white'>ContactUS</h2>

       </div>
       <UserButton/>



    </div>
  )
}

export default NavBar