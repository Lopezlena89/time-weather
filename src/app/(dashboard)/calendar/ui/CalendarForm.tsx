'use client'

import { CalendarSchedule, MenuInput, Modal } from "@/components";

import { useUIModal } from "@/store/ui/ui-modal";

interface Remind{
  reminder: { id: string; userId: string; title: string; date: string; theme: string; }[] 
};

interface Props {
  reminders:Remind | undefined ;
}


export const CalendarForm = ({reminders}:Props) => {
  
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
