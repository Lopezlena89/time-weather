'use client'

import { IoChevronBackOutline,IoChevronForwardOutline } from "react-icons/io5";
import { DateCalendar } from "./DateCalendar";
import { weekFormat } from "@/utils/data-numbers";
import { daysFormat } from '../../../utils/data-numbers';
import { useEffect } from "react";

export const CalendarSchedule = () => {
    //Todo logica 
    // const data  = new Date(2000, 7, 29);
    // console.log(data)
   
    

  return (
    <div 
        className="w-full border border-solid border-gray-300 bg-white rounded-lg shadow overflow-hidden"
        style={{height:'calc(100vh - 150px)'}}         
    >
        <div className="flex  items-center justify-between py-2 px-6">
            <div>
                <span  className="text-lg font-bold text-gray-800">January</span>
                <span  className="ml-1 text-lg text-gray-600 font-normal">2024</span>
            </div>
            <div className="border rounded-lg px-1" style={{paddingTop:'2px'}}>
                <button 
                    type="button"
                    className="mr-1 leading-none rounded-lg transition ease-in-out duration-300 inline-flex cursor-pointer hover:bg-gray-100 p-1 items-center"> 
                    <IoChevronBackOutline size={25}  className=" text-gray-500 inline-flex leading-none"/>
                </button>
                <div className="border-r inline-flex h-6"/>		
                <button 
                    type="button"
                    className=" ml-1 leading-none rounded-lg transition ease-in-out duration-300 inline-flex items-center cursor-pointer hover:bg-gray-100 p-1" >
                    <IoChevronForwardOutline size={25}  className=" text-gray-500 inline-flex leading-none " />						  
                </button>
			</div>
        </div>
       
        <div className="grid grid-cols-7 grid-row-5 justify-items-center p-2 text-black">
            
            {
                daysFormat.map(day =>(
                    <DateCalendar key={day} days={day} week={weekFormat}/>
                ))
            }
            
         
        </div>

    </div>
  )
}
