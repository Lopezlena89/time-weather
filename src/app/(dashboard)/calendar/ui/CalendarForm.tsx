'use client'

import { CalendarSchedule, MenuInput, Modal } from "@/components";

import { useUIModal } from "@/store/ui/ui-modal";



export const CalendarForm = ({reminders}:any) => {

    const sideModalOpen = useUIModal(state => state.isSideModalOpen);
    
  return (
    <>
        
        <CalendarSchedule reminders={reminders}/>
        {
          sideModalOpen &&
          <Modal/>
        }
    </>
  )
}
