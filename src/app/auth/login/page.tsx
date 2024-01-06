
import { LoginForm } from "./ui/LoginForm";



export default  function LoginPage() {

  return (
    <>
      <div className="w-96 rounded-xl shadow-xl bg-white">
        <div className="w-full h-full p-7 flex flex-col">
          <span className="text-xl font-bold">Login</span>
          <LoginForm/>
          {/* <Link href={'register'} className="text-end mt-6 underline cursor-pointer">Register</Link> */}
        </div>
      </div>
    </>
  );
}