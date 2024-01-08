
import { auth } from "@/auth.config";
import { CalendarForm } from "./ui/CalendarForm";
import { getUserModal } from "@/actions/modal/get-user-modal";


export default  async function CalendarPage() {
  
  const session = await auth();

  if ( !session?.user ) {
    return (
      <CalendarForm reminders={undefined}/>
    )
  }
  
  const otro= await getUserModal(session.user.id) || undefined;
  
  
  
  return (
    <>
      <div  className="flex justify-center items-center text-sm">
          <CalendarForm reminders={otro} />
        
      </div>
    </>
  )
   
}