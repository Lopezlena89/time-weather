'use client'

import Link from "next/link"
import { useUIStore } from "@/store"
import { IoCloseOutline, IoPersonOutline, IoSearchOutline,IoCalendarNumberOutline,IoCloudOutline } from "react-icons/io5"
import clsx from "clsx"
import { logout } from "@/actions/auth/logout"
import { IoIosLogIn } from "react-icons/io"
import { useSession } from "next-auth/react"


export const MiniSideBar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);

    const { data: session } = useSession();
    const isAuthenticated = !!session?.user;

  return (
    <div >
        {/* Background */}
        {/* Blur */}
        {
            isSideMenuOpen && (
                <>
                    <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />
                    <div
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                        onClick={closeSideMenu}
                    />
                </>
            )
        }
        {/* MiniSideMenu */}
        <nav 
            //Todo efecto de slice
            className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full" :!isSideMenuOpen
                    }
                )
            }
        >
            <IoCloseOutline
                size={30}
                className="absolute top-5 right-5 cursor-pointer"
                onClick={closeSideMenu}
            />

            {/* Input */}
            <div className="relative mt-14">
                <IoSearchOutline 
                    size={20}
                    className="absolute top-2 left-2"
                />
                <input 
                    type="text" 
                    placeholder="Search"
                    className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Menu */}

            <Link
                href='/'
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoPersonOutline size={20}/>
                <span className="ml-3 text-xl">Dashboard</span>
            </Link>
            <Link
                href='/calendar'
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoCalendarNumberOutline size={20}/>
                <span className="ml-3 text-xl">Calendar</span>
            </Link>
            <Link
                href='/weather'
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoCloudOutline size={20}/>
                <span className="ml-3 text-xl">Weather</span>
            </Link>
            {
                isAuthenticated 
                ?
                <button onClick={()=>logout()}  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all ">
                    <IoIosLogIn size={20}/><span className="ml-3 text-xl cursor-pointer">Logout</span>
                </button>
                :
                <Link href={'/auth/login'} className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                <IoIosLogIn size={20}/><span className="ml-3 text-xl cursor-pointer">Login</span>
                </Link>

              }

        </nav>
    </div>
  )
}
