import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { MiniAnotaciones } from './MiniAnotaciones'

export const AuthPage = ({sessiones}:any) => {
  return (
    <div className='w-full  flex flex-col' style={{height:'calc(100vh - 50px)'}}   >
        <div className="w-full h-[40%]">
            <div
                className='relative top-16 left-6 w-full h-64 bg-white 
                rounded-xl shadow-xl  md:w-8/12 lg:w-5/12'
            >
                <div className="flex justify-end">
                    <div
                    className='absolute -top-4 left-4 w-14 h-14
                    rounded-2xl shadow-lg shadow-pink-800 bg-pink-500 flex justify-center items-center'>
                    <FaUser size={20} className='text-white' />
                    </div>
                    <span className="font-bold text-lg text-black mt-3 mr-10">Profile</span>
                </div>
                <div className="w-11/12 h-px mt-6 bg-gray-200  absolute left-3 " />
                
                <div className="mt-10 ml-3">
                    <p className="font-bold text-lg text-black ">Name: <span className="font-normal text-sm">{sessiones.user.name}</span></p>
                    <p className="font-bold text-lg text-black ">Mail: <span className="font-normal text-sm">{sessiones.user.email}</span></p>
                    
                </div>
            </div>
        </div>
        <div className="w-full h-3/6 mt-6 ml-6 ">
            <div className=" relative w-full h-full rounded-xl shadow-xl bg-white md:w-8/12 ">
               <div className="h-16 w-full">
                <p className="font-bold text-lg text-black  absolute left-5 top-8 ">Notas:</p>
               </div>
               <div className=" w-full h-px my-6 bg-gray-200  " />
               <MiniAnotaciones notas={'Hola mundo'}/>
            </div>
           
        </div>


    </div>
  )
}
