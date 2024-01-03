
import { WiSunrise,WiSunset,WiHumidity,WiBarometer,WiThermometerExterior,WiStrongWind } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { Form } from "./Form";


export const Weather = async({coord,weather,main,wind,sys,timezone,name}:IWeather) => {
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString('es-MX');
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString('es-MX');
    
  return (
    <>
    <div 
        className='snow_wrap w-full mt-3 p-5 border border-solid
            rounded-lg shadow overflow-hidden flex flex-col
             bg-no-repeat bg-cover bg-transparent bg-bottom
            relative '

        style={{height:'calc(100vh - 50px)'}}         
    >
        
        
        <div className="snow"/>
        <div className="w-full h-full  bg-transparent">
    
                <div className="w-full h-2/5 bg-transparent flex justify-center items-center">
                    <div className="w-80 h-4/5 font-light text-black bg-transparent flex flex-col items-center">
                        <h1 className="font-bold text-3xl">{name}</h1>
                        <span className="mt-4 text-6xl font-extralight">{`${Number(main.temp).toFixed(1)}º`}</span>
                        <span className="mt-4 text-sm font-bold">{weather[0].main}</span>
                        <span className="mt-2 text-sm font-bold">{`H:${main.temp_max} L:${main.temp_min}`}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 justify-items-center  w-full h-3/5 bg-transparent ">   
                    <div className="w-4/5 h-4/5 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl ">
                        <div className="w-4/5 h-4/5 text-white grid grid-cols-2 grid-rows-2 font-semibold">
                            <div className="flex justify-center items-center"><WiBarometer size={30}/>{main.pressure}<span className="text-xs">hPa</span></div>
                            <div className="flex justify-center items-center"><WiHumidity size={30}/>{`${main.humidity}%`}</div>
                            <div className="flex justify-center items-center"><CiTempHigh size={30}/>{`${main.temp}º`}</div>
                            <div className="flex justify-center items-center"><WiThermometerExterior size={30}/>{`${main.feels_like}º`}</div>
                        </div>
                    </div>
                    <div className="w-4/5 h-4/5 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl ">
                        <div className="w-4/5 h-4/5 text-white grid grid-cols-2  font-bold">
                            <div className="flex justify-center items-center"><WiSunrise size={30}/>{sunrise}</div>
                            <div className="flex justify-center items-center"><WiSunset size={30}/>{sunset}</div>
                        </div>
                    </div>
                    <div className="w-4/5 h-4/5 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl ">
                         <div className="w-4/5 h-4/5 text-white grid grid-cols-2  font-bold">
                            <div className="flex justify-center items-center">{`Lon:  ${coord.lon}`}</div>
                            <div className="flex justify-center items-center">{`Lat:  ${coord.lat}`}</div>
                        </div>
                    </div>
                    <div className="w-4/5 h-4/5 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl text-white">
                    <WiStrongWind className="text-white" size={30}/><span className="font-bold">{wind.speed}</span>
                    </div>
                </div>
        </div>
        

    </div>
    </>
  )
}
