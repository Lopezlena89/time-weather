
import { FaUser } from "react-icons/fa6";
import { PiNotepadFill } from "react-icons/pi";



export const NoAuthPage = () => {
  return (
    <>
    
        <div className='w-full flex flex-col' style={{height:'calc(100vh - 50px)'}}   >
            
            <div className=" w-3/4 md:w-full h-[50%]">
                <div
                    className='relative top-8 left-6 w-full h-64 bg-white 
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
                    
                    </div>
                </div>
            </div>
            <div className="relative w-3/4 md:w-full h-3/6 mt-6 ml-6 ">
                <div className="relative w-full h-full rounded-xl shadow-xl bg-white md:w-8/12 ">
                    
                <div className="h-16 w-full">
                    <div className="flex justify-end">
                        <div
                        className='absolute -top-4 left-4 w-14 h-14
                        rounded-2xl shadow-lg shadow-blue-800 bg-blue-500 flex justify-center items-center'>
                        <PiNotepadFill size={20} className='text-white' />
                        </div>
                        <span className="font-bold text-lg text-black mt-3 mr-10">Notas:</span>
                    </div>
                    
                </div>
                <div className=" w-full h-px my-6 bg-gray-200  " />
                
                </div>
            
            </div>


        </div>
    </>
  )
}
