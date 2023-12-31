import { MiniSideBar, Navbar, Sidebar } from "@/components";


export default function DashboardLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <div className="bg-slate-100 overflow-y-auto  w-screen h-screen antialiased  selection:bg-blue-600 selection:text-white">

      <div className="flex">
        <Sidebar/>
        <div className="p-4 w-full text-slate-900 ">
          <Navbar/>
          <MiniSideBar/>
          { children }
        </div>

      </div>
    </div>
  );
}