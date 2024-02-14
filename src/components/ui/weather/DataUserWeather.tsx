'use client'

import { removeCookies } from "./AddOrRemoveCookies";


interface Props{
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

export const DataUserWeather = ({weatherInfo}:Props) => {
   
    
  return (
    <>
        {
            weatherInfo?.map((info,index) =>(
                
                <div 
                    key={index}
                    className={`w-auto h-[85px]  m-1 rounded-md flex flex-col justify-between md:w-11/12
                   
                    ${info?.icon === '01n'  ? 'bg-violet-400':''  }
                    ${info?.desc === 'nubes' || info?.desc === 'algo de nubes' || info?.desc === 'muy nuboso'||info?.desc === 'niebla'  ? 'bg-indigo-300':''  }
                    ${info?.desc === 'lluvia ligera' || info?.desc === 'nubes dispersas' || info?.desc === 'lluvia moderada' ?'bg-gray-300':''}
                    ${info?.desc === 'nieve' || info?.desc === 'nevada ligera' ||info?.icon === '01d' ?'  bg-sky-300':''}
                    `}
                >
                    <div className="flex h-[60px] ">
                        <div className="flex flex-col p-1  items-start justify-between w-1/2  ">
                            <p className="text-[12px] w-full ">{info?.cityName.slice(0,9)}</p>
                            <p className="text-[12px]">{info?.desc}</p>
                        </div>
                        <div className="flex flex-col pr-1 items-end justify-between w-1/2  ">
                            <p className="font-semibold text-md">{`${Number(info?.Temp).toFixed(1)}º`}</p>
                            <p className="text-[12px]">{`H:${info?.Max} L:${info?.Min}`}</p>
                        
                        </div>
                    </div>
                    <div>
                        <button 
                            className={`
                            ${info?.icon === '01n'  ? 'bg-violet-500':''  }
                            ${info?.desc === 'nubes' || info?.desc === 'algo de nubes' || info?.desc === 'muy nuboso'||info?.desc === 'niebla'  ? 'bg-indigo-400':''  }
                            ${info?.desc === 'lluvia ligera' || info?.desc === 'nubes dispersas' || info?.desc === 'lluvia moderada' ?'bg-gray-400':''}
                            ${info?.desc === 'nieve' || info?.desc === 'nevada ligera' ||info?.icon === '01d' ?'  bg-sky-400':''}
                            w-full h-7 px-1  flex justify-center items-center rounded-md cursor-pointer`}
                            onClick={()=>removeCookies(info.id)}
                        > 
                            Delete
                        </button>
                    </div>
                </div>
            ))
        }
    </>
  )
}
