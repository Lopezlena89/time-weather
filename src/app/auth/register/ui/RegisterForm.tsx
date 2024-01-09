'use client'

import clsx from "clsx";
import Link from "next/link"
import { registerUser } from "@/actions/auth/register";
import {SubmitHandler, useForm} from 'react-hook-form';
import { useState } from "react";
import { login } from "@/actions/auth/login";


type FormInputs = {
    name:string;
    email:string;
    password:string;

}

export const RegisterForm = () => {

   

    const [errorMessage, setErrorMessage] = useState('')
    const {register, handleSubmit, formState:{errors}} = useForm<FormInputs>();

    const onSubmit:SubmitHandler<FormInputs> = async(data)=>{
        setErrorMessage('');
        const {name,email,password} = data;
        const resp = await registerUser(name,email,password);
        if(!resp.ok){
            setErrorMessage(resp.message)
            return;
        }

        await login(email.toLocaleLowerCase(),password);
        window.location.replace('/')

    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
       
        <input 
            type="text" 
            placeholder="Nombre" 
            className={
                clsx(
                    "w-full mt-6 pl-3 h-10 rounded-lg border border-solid border-gray-300",
                    {
                        'border-red-500':!!errors.name
                    }
                )
            } 
            autoFocus
            {...register('name',{required:true})}
        />
        <input 
            type="text" 
            placeholder="Email" 
            className={
                clsx(
                    "w-full mt-6 pl-3 h-10 rounded-lg border border-solid border-gray-300",
                    {
                        'border-red-500':!!errors.email
                    }
                )
            } 
            {...register('email',{required:true,pattern:/^\S+@\S+$/i})}
        />
        <input 
            type="password" 
            placeholder="Password" 
            className={
                clsx(
                    "w-full mt-6 pl-3 h-10 rounded-lg border border-solid border-gray-300",
                    {
                        'border-red-500':!!errors.password
                    }
                )
            }  
            {...register('password',{required:true,minLength:6})}
        />
            
        <span className="text-red-500">{errorMessage}</span>
          
        <button
            type="submit" 
            className="w-full mt-6 h-10 bg-blue-300 hover:bg-blue-400 transition-all duration-150  rounded-lg cursor-pointer"
        >
            Register
        </button>
        <div className="w-full flex justify-end">
            <Link href={'login'} className="text-end mt-6 underline cursor-pointer">Login</Link>
               
        </div>
    </form>
  )
}
