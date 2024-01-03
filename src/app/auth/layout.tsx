


export default function DashboardLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center ">
        {children}
    </div>
  );
}