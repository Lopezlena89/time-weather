'use server'

import { WiSunrise,WiSunset,WiHumidity,WiBarometer,WiThermometerExterior,WiStrongWind } from "react-icons/wi";
import { CiTempHigh} from "react-icons/ci";
import { IWeather } from '../../../interfaces/weaterInterface';
import { DataUserWeather } from "./DataUserWeather";
import { InputWeather } from "./InputWeather";

interface Props{
    cityName:IWeather|undefined
    weatherInfo: { 
        id: string; 
        userId: string; 
        cityName: string; 
        icon: string; 
        desc: string; 
        Temp: number; 
        Min: number; 
        Max: number; 
    }[] | undefined
    
}

export const SideWeather = ({cityName,weatherInfo}:Props) => {
    
  return (
    <div className="w-full h-full bg-transparent flex flex-col-reverse relative md:flex-row ">
       
        <div className="w-full h-1/6 overflow-x-auto rounded-l-2xl flex flex-row justify-start  items-start md:w-2/12 md:h-full md:items-center md:flex-col">
            
            <DataUserWeather weatherInfo={weatherInfo} />
        </div>
        
        <div className={`w-full h-full rounded-xl flex flex-col md:w-10/12
            
            ${cityName?.icon === '01n'  ? 'bg-violet-500':''  }
            ${cityName?.desc === 'nubes' || cityName?.desc === 'algo de nubes' || cityName?.desc === 'muy nuboso'||cityName?.desc === 'niebla'  ? 'bg-indigo-400':''  }
            ${cityName?.desc === 'lluvia ligera' || cityName?.desc === 'nubes dispersas' || cityName?.desc === 'lluvia moderada' ?'bg-gray-400':''}
            ${cityName?.desc === 'nieve' || cityName?.desc === 'nevada ligera' ||cityName?.icon === '01d' ?'  bg-sky-400':''}
        `}>
                    <div className="flex  w-full h-16 justify-around items-center ">
                           <InputWeather/>
                            
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
                        {cityName?.desc === 'nubes' || cityName?.desc === 'algo de nubes' || cityName?.desc === 'muy nuboso'  || cityName?.desc === 'bruma' ||cityName?.desc === 'niebla' 
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
