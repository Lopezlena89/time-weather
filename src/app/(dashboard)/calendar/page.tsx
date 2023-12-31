'use client'
import { CalendarSchedule, MenuInput, Modal } from "@/components";
import { useUIModal } from "@/store/ui/ui-modal";

export default function CalendarPage() {
  
  const sideModalOpen = useUIModal(state => state.isSideModalOpen);
  return (
    <>
      <div  className="flex flex-col text-sm">
        
        <MenuInput/>
        <CalendarSchedule/>
        {
          sideModalOpen &&
          <Modal/>
        }
      </div>
    </>
  )
   
}