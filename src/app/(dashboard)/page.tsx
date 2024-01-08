import { getUserModal } from "@/actions/modal/get-user-modal";
import { auth } from "@/auth.config";
import { PagePrincipal } from "@/components";
import { NoAuthPage } from "@/components/ui/dashboard/NoAuthPage";


export default async function HomePage() {
  const sessiones = await auth();


  if ( !sessiones?.user ) {
    return (
      <div>
        <NoAuthPage/>
      </div>
    )
  }
  

  const reminders = await getUserModal(sessiones.user.id) ?? undefined;
  
  
  return (
    <div>
      <PagePrincipal sessiones={sessiones} reminders={reminders}/>
    </div>
  );
}