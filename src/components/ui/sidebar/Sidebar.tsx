

import Link from "next/link"

import { IoCalendarNumberOutline,IoCloudOutline } from "react-icons/io5";
import { SideBarMenuItem } from "./SideBarMenuItem";
import Image from "next/image";


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
  return (
    <div>
      <nav className="hidden sm:flex flex-col left-0 w-[300px] min-h-screen bg-white shadow-2xl  p-3">
        {/* Profile */}
        <Link href='/'  className="h-40 flex items-center ">
          <Image
            width={50}
            height={50}
            src='/images/profile.jpeg'
            alt='photo'
            style={{width:'50px', height:'50px',borderRadius:'100%'}}
          >
          </Image>
          <p className="ml-2 text-sm"><span className="text-lg font-bold leading-5">Welcome Back </span>Luis Mariano</p>
        </Link>

        {/* Apps */}
        <div className=" mt-5 h-full w-full flex flex-col">
          {
            menuItem.map(item =>(
              <SideBarMenuItem key={item.path} {...item}/>

            ))
          }
        </div>

      </nav>
    </div>
    
  )
}
