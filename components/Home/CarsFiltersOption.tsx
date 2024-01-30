"use client"


import React, { useEffect } from 'react'
import { useState } from 'react';

function CarsFiltersOption({ carsList, setBrand,orderCarList }: any) {

  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set()

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList])


  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });

    console.log(BrandSet)
    setBrandList(Array.from(BrandSet));
  }

  return (
    <div className='mt-12 flex  items-center justify-between'>
      <div >
        <h2 className='text-[40px] py-6 text-black font-bold'>Our Vehicles</h2>
        <h2 className='text-[20px] text-gray-900'>Explore our vehicles you might like </h2>
      </div>



      <div className='gap-6 flex '>
        <select className="select w-full max-w-xs "
        onChange={(e)=>orderCarList(e.target.value)}>
          <option disabled selected>Price </option>
          <option value={-1}>Low to High</option>
          <option value={1}>High to Low  </option>
        </select>

        <select className="select px-7 select-bordered w-full 
        md:block  max-w-xs hidden "
          onChange={(e) => setBrand(e.target.value)}>

          <option disabled selected> Brands </option>

          {brandList && brandList.map((brand: string, index: number) => (
            <option key={index}>{brand}</option>
          ))}



        </select>


      </div>



    </div>
  )
}

export default CarsFiltersOption