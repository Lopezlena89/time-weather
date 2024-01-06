import { auth } from "@/auth.config";
import { PagePrincipal } from "@/components";


export default async function HomePage() {
  const sessiones = await auth();
  
  return (
    <div>
      <PagePrincipal sessiones={sessiones}/>
    </div>
  );
}