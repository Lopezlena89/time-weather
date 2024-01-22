
import { auth } from "@/auth.config";
import { MiniSideBar, Navbar, Sidebar } from "@/components";
import { Suspense } from "react";


export default async function DashboardLayout( { children }: {
  children: React.ReactNode;
} ) {

  

  return (
    <div className="bg-gray-100 overflow-hidden w-screen antialiased  selection:bg-blue-600 selection:text-white ">
      
      <div className="flex">
        <Sidebar/>
        <div className=" p-4 text-slate-900 " style={{width:'calc(100vw )'}}   >
          <Navbar/>
          <MiniSideBar />
         {children}
         
        </div>

      </div>
    </div>
  );
}

