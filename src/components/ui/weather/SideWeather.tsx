'use client'


import { WiSunrise,WiSunset,WiHumidity,WiBarometer,WiThermometerExterior,WiStrongWind } from "react-icons/wi";
import { CiTempHigh,CiSearch} from "react-icons/ci";
import { PiPlusCircleThin } from "react-icons/pi";
import { IWeather } from '../../../interfaces/weaterInterface';
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import { createDataWeather } from "@/actions/weatherUser/create-date";
import { useSession } from "next-auth/react";
import { useWeatherInfoStore } from "@/store/data-weather/ui-dataweather";






interface Props{
    cityName:IWeather | undefined
    weatherInfo: {
        weatherData: {
            id: string;
            userId: string;
            cityInfo: string;
        }[];
    } | null | undefined
}

export const SideWeather = ({cityName,weatherInfo}:Props) => {
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const setWeatherInfo = useWeatherInfoStore(state => state.setWeatherInfo);
    const { data: session } = useSession({
        required: true,
      })
    
     
    const handleSearch = (term:string) =>{
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set('query',term)
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)  
    }
    const saveInfoDB = () =>{
        createDataWeather(cityName!.nombre,session!.user.id )
        setWeatherInfo(cityName!)
        
    }

  return (
    <div className="w-full h-full bg-transparent flex relative justify-end ">
        <div className="w-4/12 h-full rounded-l-2xl  hidden">
            {
                weatherInfo?.weatherData.map((info,index) =>(
                    <div 
                        key={index}
                        className="w-full h-20 p-3 border border-solid border-gray-800 rounded-xl mt-5"
                    >
                        {info.cityInfo}
                    </div>
                ))
            }
        </div>
        
        <div className={`w-full h-full rounded-xl flex flex-col
            
            ${cityName?.icon === '01n'  ? 'bg-violet-500':''  }
            ${cityName?.desc === 'nubes' || cityName?.desc === 'algo de nubes' || cityName?.desc === 'muy nuboso'  ? 'bg-indigo-400':''  }
            ${cityName?.desc === 'lluvia ligera' || cityName?.desc === 'nubes dispersas' || cityName?.desc === 'lluvia moderada' ?'bg-gray-400':''}
            ${cityName?.desc === 'nieve' || cityName?.desc === 'nevada ligera' ||cityName?.icon === '01d' ?'  bg-sky-400':''}
        `}>
                    <div className="flex  w-full h-16 justify-around items-center ">
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
                            <div 
                                className="flex justify-center items-center w-20 text-[15px] text-white  border border-solid border-white rounded-xl cursor-pointer active:bg-violet-300 hidden"
                                onClick={()=>saveInfoDB()}
                            >
                                <PiPlusCircleThin className='' size={20}/>
                                <span>Add</span>
                            </div>
                            
                    </div>
                    <div className="w-full h-2/5 bg-transparent flex justify-around items-center "> 
                        {cityName?.icon === '01d' 
                        ?   
                        <div className="w-1/2 flex justify-center items-center">
                            <div className="hot">
                                <span className="sun"></span>
                                <span className="sunx"></span>
                            </div>
                        </div>
                        :<div></div>
                        }
                        {cityName?.desc === 'nubes' || cityName?.desc === 'algo de nubes' || cityName?.desc === 'muy nuboso'  || cityName?.desc === 'bruma'
                        ?   
                        <div className="w-1/2 flex justify-center items-center">
                            <div className="cloudy">
                                <span className="cloud"></span>
                                <span className="cloudx"></span>
                            </div>
                        </div>
                        :''
                        }
                        {cityName?.desc === 'lluvia ligera' || cityName?.desc === 'nubes dispersas' || cityName?.desc === 'lluvia moderada' 
                        ?  
                        <div className="w-1/2 flex justify-center items-center"> 
                            <div className="breezy">
                                <ul>
                            
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>	
                                </ul>
                                <span className="cloudr"></span>
                        
                        
                            </div>
                        </div>
                        :''
                        }
                        {cityName?.desc === 'nieve' || cityName?.desc === 'nevada ligera' 
                        ?
                        <div className="w-1/2 flex justify-center items-center">
                            <div className="stormy">
                                <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                </ul>
                                <span className="snowe"></span>
                                <span className="snowex"></span>
                                <span className="stick"></span>
                                <span className="stick2"></span>
                            </div>
                        </div>
                        :''
                        }
                        {cityName?.icon === '01n' 
                        ?
                        <div className="w-1/2 flex justify-center items-center">
                            <div className="night">
                                <span className="moon"></span>
                                <span className="spot1"></span>
                                <span className="spot2"></span>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>	
                                </ul>

                            </div>
                        </div>
                        :''
                        }

                       
                        <div className=" w-1/2 h-4/5 font-light  bg-transparent flex flex-col justify-center items-center">
                            <h1 className="font-bold text-xl">{cityName?.nombre}</h1>
                            <span className="mt-4 text-6xl font-extralight">{`${Number(cityName?.temp).toFixed(1)}º`}</span>
                            <span className="mt-4 text-sm font-bold">{cityName?.desc}</span>
                            <span className="mt-2 text-sm font-bold">{`H:${cityName?.max} L:${cityName?.min}`}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 justify-items-center  w-full h-3/5 bg-transparent ">
                    <div className="w-4/5 h-4/5 bg-transparent flex justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5  grid grid-cols-2 grid-rows-2 font-semibold">
                                <div className="flex justify-center items-center"><WiBarometer size={30}/>{cityName?.pressure}<span className="text-xs">hPa</span></div>
                                <div className="flex justify-center items-center"><WiHumidity size={30}/>{`${cityName?.humidity}%`}</div>
                                <div className="flex justify-center items-center"><CiTempHigh size={30}/>{`${cityName?.temp}º`}</div>
                                <div className="flex justify-center items-center"><WiThermometerExterior size={30}/>{`${cityName?.feels_like}º`}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5  bg-transparent flex  justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5  flex flex-col justify-center items-center font-bold lg:flex-row md:text-sm">
                                <div className="flex justify-center items-center"><WiSunrise size={30}/>{ cityName?.sunrise ? new Date(cityName?.sunrise * 1000).toLocaleTimeString('es-MX'):''}</div>
                                <div className="flex justify-center items-center"><WiSunset size={30}/>{ cityName?.sunrise ? new Date(cityName?.sunset * 1000).toLocaleTimeString('es-MX'):''}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5 bg-transparent flex justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5  flex flex-col justify-center items-center font-bold md:flex-row">
                                <div className="flex justify-center items-center">{`Lon:  ${cityName?.lng}`}</div>
                                <div className="flex justify-center items-center">{`Lat:  ${cityName?.lat}`}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5  bg-transparent flex justify-center items-center rounded-2xl shadow-2xl ">
                            <WiStrongWind className="" size={30}/><span className="font-bold">{cityName?.wind}</span>
                        </div>
                    </div>
        </div>
                    
    </div>
  )
}
