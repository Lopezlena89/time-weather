'use client'

import { useUIModal } from "@/store/ui/ui-modal";
import { weekFormat } from "@/utils";
import { useState, useEffect } from 'react';

interface Props{
    days:number;
    currentDay:number;
    month:number;
    year:number;
    indice:number;
    dayStartMonth:string;
}

export const DateCalendar = ({indice,dayStartMonth,days,currentDay,month,year}:Props) => {
    const openSideModal = useUIModal(state => state.openSideModal);
    const [number, setNumber] = useState(0);
    

    useEffect(() => {
      setNumber(indice-1);
    }, [weekFormat[indice-1] === dayStartMonth])

  return (
    <>
        {
            indice <= 7 
            ? 
                <div 
                className="w-full h-[100px] border border-solid border-gray-200 p-1 flex justify-between"
                >
                    <span 
                        className="w-5 h-5 text-center cursor-pointer hover:bg-blue-400 hover:text-white" 
                        style={{borderRadius:'100%'}} 
                        onClick={openSideModal}>
                        {
                            (weekFormat[indice-1] === dayStartMonth) 
                            ? number
                            : number >= 1 && number


                        }
                    </span>
                    <span className="text-sm font-bold text-gray-600">
                        {weekFormat[indice-1]}
                    </span>
                </div>
            : 
                <div 
                className="w-full h-[100px] border border-solid border-gray-200 p-2 flex justify-between"
                >
                    <span 
                        className=" w-5 h-5 text-center cursor-pointer hover:bg-blue-400 hover:text-white" 
                        style={{borderRadius:'100%'}} 
                        onClick={openSideModal}>
                        {(number < days) && number}
                    </span>
                </div>
        }
    </>
  )
}
