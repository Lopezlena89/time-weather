
import { auth } from "@/auth.config";
import { CalendarForm } from "./ui/CalendarForm";
import { getUserModal } from "@/actions/modal/get-user-modal";


export default  async function CalendarPage() {
  
  const session = await auth();

  if ( !session?.user ) {
    return (
      <h3 className="text-5xl">500 -  No hay sesión de usuario</h3>
    )
  }
  
  const reminders = await getUserModal(session.user.id) ?? undefined;
  
 
  
  return (
    <>
      <div  className="flex justify-center items-center text-sm">
          <CalendarForm reminders={reminders?.reminder} />
        
      </div>
    </>
  )
   
}