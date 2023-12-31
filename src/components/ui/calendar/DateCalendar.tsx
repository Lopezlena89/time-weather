'use client'

import { useUIModal } from "@/store/ui/ui-modal";

interface Props{
    week:string[],
    days:number
}

export const DateCalendar = ({week,days}:Props) => {
    const openSideModal = useUIModal(state => state.openSideModal);

  return (
    <>
        {
            days < 8 
            ? 
                <div 
                className="w-full h-[100px] border border-solid border-gray-200 p-1 flex justify-between"
                >
                    <span 
                        className="w-5 h-5 text-center cursor-pointer hover:bg-blue-400 hover:text-white" 
                        style={{borderRadius:'100%'}} 
                        onClick={openSideModal}>
                        {days}
                    </span>
                    <span className="text-sm font-bold text-gray-600">
                        {week[days-1]}
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
                        {days}
                    </span>
                </div>
        }
    </>
  )
}
