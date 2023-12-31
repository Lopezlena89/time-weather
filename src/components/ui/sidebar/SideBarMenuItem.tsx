import Link from "next/link"

interface Props{
    path:string;
    icon: JSX.Element;
    title:string;
    subTitle:string;

}

export const SideBarMenuItem = ({path,icon,title,subTitle}:Props) => {
  return (
    
        <Link
          href={path}
          className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <div>
            {icon}
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5">{title}</span>
            <span className="text-sm hidden md:block">{subTitle}</span>
          </div>

        </Link>

     
  )
}
