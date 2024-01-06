import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function DashboardLayout( { children }: {
  children: React.ReactNode;
} ) {

  const session = await auth();

  
  if ( session?.user ) {
    redirect('/');
  }
  

  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center ">
        {children}
    </div>
  );
}