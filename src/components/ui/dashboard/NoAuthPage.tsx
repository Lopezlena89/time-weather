
import { FaUser } from "react-icons/fa6";
import { PiNotepadFill } from "react-icons/pi";



export const NoAuthPage = () => {
  return (
    <>
    
        <div className='w-fullflex flex-col' style={{height:'calc(100vh - 50px)'}}   >
            
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
                    
                    <div className="w-full h-full flex justify-center items-center">
                        <p className=" mb-10 font-semibold text-4xl bg-gray-50 opacity-5  md:text-7xl">Profile</p>
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
                <div className=" w-full h-px  bg-gray-200 flex justify-center items-center  " />
                    <p className=" mt-12  font-semibold text-4xl bg-gray-50 opacity-5  text-center md:text-7xl">Calendar notes</p>
                </div>
            
            </div>


        </div>
    </>
  )
}
