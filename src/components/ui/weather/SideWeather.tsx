'use client'

import { useState } from "react";
import { WiSunrise,WiSunset,WiHumidity,WiBarometer,WiThermometerExterior,WiStrongWind } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IWeather } from '../../../interfaces/weaterInterface';
import { useSearchParams,usePathname,useRouter } from "next/navigation";

interface Props{
    cityName:IWeather | undefined
}

export const SideWeather = async({cityName}:Props) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    
    const handleSearch = (term:string) =>{
        const params = new URLSearchParams(searchParams);
        
        if(term){
          
            params.set('query',term)
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)  
    }
  return (
    <div className="w-full h-full  bg-transparent">
                    <div className="flex flex-col  w-full items-center  ">
                            <div className=" flex items-center relative">
                                <CiSearch className=' text-gray-500 ml-1 absolute'/>
                                <input 
                                    type="text" 
                                    placeholder="Search" 
                                    className="pl-6 h-7 rounded-lg text-gray-500 border border-solid border-gray-700 "
                                    onChange={(event)=>handleSearch(event.target.value) }
                                    defaultValue={searchParams.get('query')?.toString()}
                                   
                                />
                            </div>
                            {/* <div className="w-2/4">
                                <select name="place" id="place" className="cursor-pointer" >
                                    {
                                        cityName?.map(place=>(
                                            <option key={place.nombre} value={place.nombre}>{place.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div> */}
                    </div>
                   
                    <div className="w-full h-2/5 bg-transparent flex justify-center items-center">
                        <div className="w-80 h-4/5 font-light text-black bg-transparent flex flex-col items-center">
                            <h1 className="font-bold text-xl">{cityName?.nombre}</h1>
                            <span className="mt-4 text-6xl font-extralight">{`${Number(cityName?.temp).toFixed(1)}º`}</span>
                            <span className="mt-4 text-sm font-bold">{cityName?.desc}</span>
                            <span className="mt-2 text-sm font-bold">{`H:${cityName?.max} L:${cityName?.min}`}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 justify-items-center  w-full h-3/5 bg-transparent ">   
                        <div className="w-4/5 h-4/5 bg-blue-400 flex justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5 text-white grid grid-cols-2 grid-rows-2 font-semibold">
                                <div className="flex justify-center items-center"><WiBarometer size={30}/>{cityName?.pressure}<span className="text-xs">hPa</span></div>
                                <div className="flex justify-center items-center"><WiHumidity size={30}/>{`${cityName?.humidity}%`}</div>
                                <div className="flex justify-center items-center"><CiTempHigh size={30}/>{`${cityName?.temp}º`}</div>
                                <div className="flex justify-center items-center"><WiThermometerExterior size={30}/>{`${cityName?.feels_like}º`}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5  bg-blue-400 flex  justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5 text-white flex flex-col justify-center items-center font-bold lg:flex-row md:text-sm">
                                <div className="flex justify-center items-center"><WiSunrise size={30}/>{ cityName?.sunrise ? new Date(cityName?.sunrise * 1000).toLocaleTimeString('es-MX'):''}</div>
                                <div className="flex justify-center items-center"><WiSunset size={30}/>{ cityName?.sunrise ? new Date(cityName?.sunset * 1000).toLocaleTimeString('es-MX'):''}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5  bg-blue-400 flex justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5 text-white flex flex-col justify-center items-center font-bold md:flex-row">
                                <div className="flex justify-center items-center">{`Lon:  ${cityName?.lng}`}</div>
                                <div className="flex justify-center items-center">{`Lat:  ${cityName?.lat}`}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5  bg-blue-400 flex justify-center items-center rounded-2xl shadow-2xl text-white">
                            <WiStrongWind className="text-white" size={30}/><span className="font-bold">{cityName?.wind}</span>
                        </div>
                    </div>
            </div>
  )
}
