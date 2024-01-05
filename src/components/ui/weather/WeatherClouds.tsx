'use client'

import { WiSunrise,WiSunset,WiHumidity,WiBarometer,WiThermometerExterior,WiStrongWind } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { useCityStore } from "@/store/weather/ui-weather";
import { useState } from 'react';
import { getWeatherCountry } from "./getWeather";


export const Weather = () => {
    const [cityClient, setCityClient] = useState('')
    const cityName = useCityStore( state => state.cityName );
    const updateCityName = useCityStore( state => state.updateCityName );

    const onSubmitHandle = async(e:any) =>{
        e.preventDefault();
        if(cityClient === '')return;
        const data =  await getWeatherCountry(cityClient)
        updateCityName(data)
        setCityClient('')
    }
  return (
    <>
        <div 
            className='snow_wrap w-full mt-3 p-5 border border-solid
                rounded-lg shadow overflow-hidden flex flex-col
                bg-no-repeat bg-cover bg-transparent bg-bottom
                relative '
            style={{height:'calc(100vh - 50px)'}}         
        >
            <div className="w-full h-full  bg-transparent">
                <form onSubmit={onSubmitHandle}>
                    <input type="text" value={cityClient} onChange={({target})=>setCityClient(target.value)} />
                </form>
                    <div className="w-full h-2/5 bg-transparent flex justify-center items-center">
                        <div className="w-80 h-4/5 font-light text-black bg-transparent flex flex-col items-center">
                            <h1 className="font-bold text-3xl">{cityName.name}</h1>
                            <span className="mt-4 text-6xl font-extralight">{`${Number(cityName.main.temp).toFixed(1)}º`}</span>
                            <span className="mt-4 text-sm font-bold">{cityName.weather[0].main}</span>
                            <span className="mt-2 text-sm font-bold">{`H:${cityName.main.temp_max} L:${cityName.main.temp_min}`}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 justify-items-center  w-full h-3/5 bg-transparent ">   
                        <div className="w-4/5 h-4/5 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5 text-white grid grid-cols-2 grid-rows-2 font-semibold">
                                <div className="flex justify-center items-center"><WiBarometer size={30}/>{cityName.main.pressure}<span className="text-xs">hPa</span></div>
                                <div className="flex justify-center items-center"><WiHumidity size={30}/>{`${cityName.main.humidity}%`}</div>
                                <div className="flex justify-center items-center"><CiTempHigh size={30}/>{`${cityName.main.temp}º`}</div>
                                <div className="flex justify-center items-center"><WiThermometerExterior size={30}/>{`${cityName.main.feels_like}º`}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5 bg-slate-500 flex  justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5 text-white flex flex-col justify-center items-center font-bold lg:flex-row md:text-sm">
                                <div className="flex justify-center items-center"><WiSunrise size={30}/>{new Date(cityName.sys.sunrise * 1000).toLocaleTimeString('es-MX')}</div>
                                <div className="flex justify-center items-center"><WiSunset size={30}/>{ new Date(cityName.sys.sunset * 1000).toLocaleTimeString('es-MX')}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl ">
                            <div className="w-4/5 h-4/5 text-white flex flex-col justify-center items-center font-bold md:flex-row">
                                <div className="flex justify-center items-center">{`Lon:  ${cityName.coord.lon}`}</div>
                                <div className="flex justify-center items-center">{`Lat:  ${cityName.coord.lat}`}</div>
                            </div>
                        </div>
                        <div className="w-4/5 h-4/5 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl text-white">
                            <WiStrongWind className="text-white" size={30}/><span className="font-bold">{cityName.wind.speed}</span>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}
