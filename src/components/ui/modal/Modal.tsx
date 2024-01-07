

import { useUIModal } from "@/store/ui/ui-modal";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx"
import { ModalForm } from "./ModalForm";


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
                        "translate-x-full" :!isSideModalOpen,
                        
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
            <ModalForm/>

        </div>

    </div>
  )
}
