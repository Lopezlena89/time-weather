'use client'

import Link from "next/link"

import Image from "next/image";
import { useSession } from "next-auth/react";
import { IoIosLogIn } from "react-icons/io";
import { IoCalendarNumberOutline,IoCloudOutline } from "react-icons/io5";
import { SideBarMenuItem } from "./SideBarMenuItem";
import { logout } from "@/actions/auth/logout";



const menuItem = [
  {
    path:'/calendar',
    icon:<IoCalendarNumberOutline size={30} className="cursor-pointer mr-5" />,
    title:'Calendar',
    subTitle:'Day to day'
  },
  {
    path:'/weather',
    icon:<IoCloudOutline size={30} className="cursor-pointer mr-5" />,
    title:'Weather',
    subTitle:'Weather of the day'
  }
]

export const Sidebar = () => {
  
  const { data: sessiones } = useSession();
  const isAuthenticated = !!sessiones?.user;

  return (
    <div >
      <nav className="hidden sm:flex flex-col left w-[300px] h-full min-h-screen bg-white shadow-2xl p-3 ">
        {/* Profile */}
        {
          isAuthenticated &&
          <Link href='/'  className="h-40 flex justify-start items-center ">
            <Image
              width={50}
              height={50}
              src='/images/default-profile.webp'
              alt='photo'
              style={{width:'50px', height:'50px',borderRadius:'100%'}}
            >
            </Image>
            <span className="text-lg ml-3 font-semibold leading-5">Welcome Back </span>
          </Link>
            
        }

        {/* Apps */}
        <div className=" mt-5 w-full h-full flex flex-col justify-between"   >
            <div>
              {
              menuItem.map(item =>(
                  <SideBarMenuItem key={item.path} {...item}/>

                ))
              }
            </div>
            <div className="self-end">
              
              {
                isAuthenticated 
                ?
                <button onClick={()=>logout()}  className="flex items-center justify-end p-1  hover:bg-gray-100 bg-gray-50 rounded">
                    <IoIosLogIn size={25}/><span className="ml-3 font-semibold cursor-pointer">Logout</span>
                </button>
                :
                <Link href={'/auth/login'} className="buttonside flex items-center justify-end p-1 hover:bg-gray-100 bg-gray-50 rounded">
                  <IoIosLogIn size={25}/><span className="ml-3 font-semibold cursor-pointer">Login</span>
                </Link>

              }
              
              
              
            </div>

            
        </div>
        
       

      </nav>
    </div>
    
  )
}
