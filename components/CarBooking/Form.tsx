import {  createBooking, getStoreLocations } from '@/services'
import React, { useEffect, useState } from 'react'



function Form({car}:any) {

    const [storeLocation,setStoreLocation]=useState<any>([]);
    const [formValue,setFormValue]=useState({
        location:'',
        pickUpDate:'',
        dropOffDate:'',
        pickUpTime:'',
        dropOffTime:'',
        contactNumber:'',
        userName:"",
        carId:{connect:
        {id: ""}}
    })
    const today:any=new Date();

    useEffect(()=>{
        getStoreLocation_()
    },[])

    useEffect(()=>{
        if(car)
        {
            setFormValue({
                ...formValue,
                carId:{connect:
                {id:car.id}}
            });
        }
    },[car])
    const getStoreLocation_=async()=>{
        const resp:any= await getStoreLocations();
        console.log(resp);
        setStoreLocation(resp?.storesLocations)
    }



    const handleChange=(event:any)=>{
        setFormValue({
            ...formValue,
            [event?.target.name]:event?.target.value
        });
    }

    const handleSubmit=async()=>{
        console.log(formValue);
        const resp= await createBooking(formValue);
        console.log(resp)
        

    }


  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-black'>PickUp Location</label>
            <select className='select select-bordered w-full max-w-lg' name="location" onChange={handleChange}>
                <option>Pickup location</option>
                {storeLocation&&storeLocation.map((loc:any,index:number)=>(
                    <option key={index}>{loc?.address}</option>
                ))}
            </select>
        </div>
        <div className='flex flex-cols-2 gap-5 mb-3'>
            <div className='flex flex-col w-full'>
                <label className='text-black'> Pick Up Date</label>
                <input type="date" placeholder='type here ' name='pickUpDate'onChange={handleChange} className='input input-bordered w-full max-w-lg'/>   
            </div>
            <div className='flex flex-col w-full mb-3'>
                <label className='text-black'> Drop off Date</label>
                <input type="date" placeholder='type here ' name="dropOffDate"  onChange={handleChange} className='input input-bordered w-full max-w-lg'/>   
            </div>

        </div>
        <div className='flex flex-col-2 gap-5 mb-3'>
            <div className='flex flex-col w-full'>
                <label className='text-black'> Pick Up Time</label>
                <input type="time" placeholder='type here' name="pickUpTime"  onChange={handleChange} className='input input-bordered w-full max-w-lg'/>   
            </div>
            <div className='flex flex-col w-full mb-3'>
                <label className='text-black'> Drop Off Time</label>
                <input type="time" placeholder='type here ' name="dropOffTime" onChange={handleChange} className='input input-bordered w-full max-w-lg'/>   
            </div>

        </div>
        <div className='flex flex-col gap-5 mb-4'>
                <input type="input" placeholder='Contact Number' name="contactNumber" onChange={handleChange} className='input input-bordered w-full max-w-lg'/> 
        </div>

        <div className='modal-action'>
        <button className='btn px-10'>Close</button>
            <button className='btn px-10 bg-blue-500 text-white hover:bg-blue-800' 
            onClick={handleSubmit}>Save</button>
            
        </div>
    </div>
  )
}

export default Form