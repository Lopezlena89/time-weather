import Link from "next/link";


export default function LoginPage() {
  return (
    <>
        <div className="w-96 rounded-xl shadow-xl bg-white">
            <div className="w-full h-full p-7 flex flex-col">
              <span className="text-xl font-bold">Login</span>
              <form className="w-full">
                
                <input 
                  type="text" 
                  placeholder="Email" 
                  className="w-full mt-6 pl-3 h-10 rounded-lg border border-solid border-gray-300" 
                />
                <input 
                  type="text" 
                  placeholder="Password" 
                  className="w-full mt-6 pl-3 h-10 rounded-lg border border-solid border-gray-300" 
                />
                <button
                  type="submit" 
                  className="w-full mt-6 h-10 bg-blue-300 rounded-lg cursor-pointer"
                >
                  Sign In
                </button>
                  
                
              </form>
              <Link href={'register'} className="text-end mt-6 underline cursor-pointer">Register</Link>
            </div>
         </div>

    </>
  );
}