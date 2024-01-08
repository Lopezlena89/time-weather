'use client'

import { useUIModal } from "@/store/ui/ui-modal";
import { weekFormat } from "@/utils";
import clsx from "clsx";

interface Remind{
      id: string;
      userId:string;
      title: string;
      date: string;
      theme: string;
  };
  

interface Props{
    days:number;
    currentDay:number;
    month:number;
    year:number;
    indice:number;
    dayStartMonth:number;
    date:Date;
    dataRemind:Remind[];
}

export const DateCalendar = ({indice,dayStartMonth,days,currentDay,month,year,date,dataRemind}:Props) => {
    const openSideModal = useUIModal(state => state.openSideModal);
    
    
    return (
    <>
        {
            indice <= 7 
            ? 
                <div 
                className="w-full h-[100px] border border-solid border-gray-200 p-1 flex flex-col overflow-hidden "
                >
                    <div className="flex justify-between h-8 bg-red">
                        <span 
                            className="w-5 h-5 text-center cursor-pointer hover:bg-blue-400 hover:text-white" 
                            style={{borderRadius:'100%'}} 
                            onClick={openSideModal}>
                            {
                                indice < dayStartMonth+1
                                ? ''
                                :
                                indice - dayStartMonth
                            }
                        </span>
                        <span className="text-sm font-bold text-gray-600">
                            {weekFormat[indice-1]}
                            
                        </span>
                    </div>
                    <div>
                    {
                    dataRemind.map(remaind =>(
                        <p className={
                            clsx( 
                                "rounded mt-1 overflow-hidden",
                                {
                                'bg-blue-400':remaind.theme === 'Blue theme'
                                },
                                {
                                'bg-yellow-400':remaind.theme === 'Yellow theme'
                                },
                                {
                                'bg-red-400':remaind.theme === 'Red theme'
                                }
                            )
                        } 
                        key={remaind.id}>
                            {remaind.title}
                        </p>
                    ))
                   }
                    </div>
                </div>
            : 
            <div 
            className="w-full h-[100px] border border-solid border-gray-200 p-1 flex flex-col overflow-hidden "
            >   
                <div className="flex justify-between h-8 bg-red">
                     <span 
                        className=" w-5 h-5 text-center cursor-pointer hover:bg-blue-400 hover:text-white" 
                        style={{borderRadius:'100%'}} 
                        onClick={openSideModal}>
                       {
                        indice - dayStartMonth > days
                        ? ''
                        :
                        indice - dayStartMonth
                       }
                    </span> 
                    
                </div>
                <div>
                {
                    dataRemind.map(remaind =>(
                        <p className={
                            clsx( 
                                "rounded mt-1 overflow-hidden",
                                {
                                'bg-blue-400':remaind.theme === 'Blue theme'
                                },
                                {
                                'bg-yellow-400':remaind.theme === 'Yellow theme'
                                },
                                {
                                'bg-red-400':remaind.theme === 'Red theme'
                                }
                            )
                        } 
                        key={remaind.id}>
                            {remaind.title}
                        </p>
                    ))
                   }
                </div>
            </div>
        }
    </>
  )
}
