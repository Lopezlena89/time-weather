'use client'


import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/actions/auth/login";
import { IoInformationOutline } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";


export const LoginForm = () => {

    const [state, dispatch] = useFormState(authenticate, undefined);
    
    

  useEffect(() => {
    if ( state === 'Success' ) {
      // redireccionar
      // router.replace('/');
      window.location.replace('/');
    }

  },[state]);

  return (
    
        <form action ={dispatch} className="w-full">
        
            <input 
                type="text" 
                placeholder="Email" 
                name='email'
                className="w-full mt-6 pl-3 h-10 rounded-lg border border-solid border-gray-300" 
            />
            <input 
                type="password" 
                placeholder="Password" 
                name='password'
                className="w-full mt-6 pl-3 h-10 rounded-lg border border-solid border-gray-300" 
            />
            <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
            >
               {state === "CredentialsSignin" && (
                <div className="flex flex-row ">
                    <IoInformationOutline className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">
                    Credenciales no son correctas
                    </p>
                </div>
                )}
            </div>
            <LoginButton />
           
            <div className="w-full flex justify-end">
                <Link href="/auth/register" className="btn-secondary underline">
                    Register
                </Link>
            </div>
            
        
        </form>
        
  )
}

function LoginButton() {
    const { pending } = useFormStatus();
  
    return (
      <button 
        type="submit" 
        className={ clsx({
          "btn-primary": !pending,
          "btn-disabled": pending
        },'w-full mb-5 h-10 bg-blue-300 rounded-lg hover:bg-blue-400 transition-all duration-150 cursor-pointer')}
        disabled={ pending }
        >
        Ingresar
      </button>
    );
  }
  

