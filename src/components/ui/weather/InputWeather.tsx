'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci"

import { addCookies } from "./AddOrRemoveCookies";
import { useSession } from "next-auth/react";

export const InputWeather = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const session = useSession()
   
    
    
    
    const handleSearch = (term:string) =>{
        const params = new URLSearchParams(searchParams);     
        if(params.get('add')) params.delete('add')
        if(term){
            params.set('query',term)
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)  
    }
   
  return (
    <>
        <div className=" flex  items-center relative ">
            <CiSearch className=' text-gray-500 ml-1 absolute'/>
            <input 
                type="text" 
                placeholder="Search" 
                className="pl-6 h-7 rounded-lg text-gray-500 border border-solid border-gray-700 "
                onChange={(event)=>handleSearch(event.target.value) }
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
        {
            session.status === "authenticated" 
            ? 
            <button 
                className='relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'
                onClick={()=>  addCookies()}
                >
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                    Add
                </span>
            </button>
            :<></>
        }
       
    </>
  )
}
