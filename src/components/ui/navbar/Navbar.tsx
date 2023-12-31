'use client'

import { useUIStore } from "@/store";
import Image from "next/image"
import Link from "next/link"
import { IoMenuOutline } from "react-icons/io5";


export const Navbar = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex justify-between items-center w-full my-5 h-[40px] shadow-2xl sm:hidden">
        <div>
            <Link href='/'  className="ml-3 h-40 flex items-center ">
                <Image
                    width={30}
                    height={30}
                    src='/images/profile.jpeg'
                    alt='photo'
                    style={{width:'30px', height:'30px',borderRadius:'100%'}}
                >
                </Image>
            </Link>
        </div>
        <div className="mr-3">
            <IoMenuOutline size={30} onClick={openSideMenu} />
        </div>
    </nav>
  )
}
