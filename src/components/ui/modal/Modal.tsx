'use client'

import { useUIModal } from "@/store/ui/ui-modal";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx"

export const Modal = () => {

    const isSideModalOpen = useUIModal(state => state.isSideModalOpen);
    const closeSideModal = useUIModal(state => state.closeSideModal);

  return (
    <div >
         {
            isSideModalOpen && (
                <>
                    <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />
                    <div
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                        onClick={closeSideModal}
                    />
                </>
            )
        }

        {/* Modal */}

        <div 
            //Todo efecto de slice
            className={
                clsx(
                    "fixed left-1/4 bottom-1/4  w-2/4 h-2/4 rounded-lg bg-white z-20 shadow-2xl transform transition-all duration-300 sm:left-1/3 sm:w-1/3 sm:h-2/4",
                    {
                        "translate-x-full" :!isSideModalOpen
                    }
                )
            }
            
        >
            <div 
                className="absolute w-[40px] h-[40px] bg-gray-100 rounded-full -right-4 -top-4 flex justify-center items-center border border-solid border-neutral-400 cursor-pointer"
                onClick={closeSideModal}
            >
                <IoCloseOutline size={30} className="text-gray-500" />
            </div>
            <form className="p-5 flex flex-col w-full h-full" action="" >
                <p className="text-lg font-bold">Add Event Details</p>
                <div className="w-full h-px bg-gray-200 my-5" />
                <span className="font-bold mt-3">Event Title</span>
                <input className="h-10 rounded-md bg-gray-200 mt-3" type="text" placeholder="" autoFocus={true}/>
                <span className="font-bold mt-3">Event date</span>
                <input className="h-10 rounded-md bg-gray-200 mt-3" type="text" placeholder="" />
                <span className="font-bold mt-3">Select a theme</span>
                <select className="h-10 rounded-md bg-gray-200 mt-3 cursor-pointer" name="select">
                    <option value="Blue theme" >Blue Theme</option>
                    <option value="Yellow theme">Yellow theme</option>
                    <option value="Red theme">Red theme</option>
                </select>
                <input 
                    type="submit" 
                    className="w-24 h-10 m-8 rounded-sm border border-solid border-black bg-gray-200 cursor-pointer self-center"  
                    value='Agregar'
                />

            </form>

        </div>

    </div>
  )
}
