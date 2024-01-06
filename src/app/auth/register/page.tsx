
import { RegisterForm } from "./ui/RegisterForm";


export default function RegisterPage() {
  return (
    <>
         <div className="w-96 rounded-xl shadow-xl bg-white">
            <div className="w-full h-full p-7 flex flex-col">
              <span className="text-xl font-bold">Register</span>
              <RegisterForm/>
             
            </div>
         </div>

    </>
  );
}