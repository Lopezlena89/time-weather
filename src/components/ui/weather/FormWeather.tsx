'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

    

export const FormWeather = () => {
  
   
    const [state, setState] = useState('')
    console.log(state);
    const onSubmitWeather = (e:any) =>{
        e.preventDefault();
       
       
    }

  return (
    <form onSubmit={onSubmitWeather} className="flex justify-end h-20">
        <div className="relative flex items-center h-14 ">
            <CiSearch className='absolute text-gray-500 left-1'/>
            <input 
                type="text" 
                placeholder="Search" 
                className="pl-6 h-7 rounded-lg text-gray-500"
                onChange={({target})=>setState(target.value) }
            />
        </div>
    </form>
  )
}
