import { getWeatherCountry } from "@/utils";


export const Weather = async() => {
    console.log(new Date(1704068576 * 1000).toLocaleTimeString('es-MX'))
    const {data} = await getWeatherCountry({country:''});
    const {coord,weather,main,wind,sys,timezone,name} = data
    
  return (
    <div 
        className="snow_wrap w-full mt-3 p-5 border border-solid border-gray-300
        bg-white rounded-lg shadow overflow-hidden flex flex-col
        bg-[url('/images/snow.avif')] bg-no-repeat bg-cover bg-transparent bg-bottom
        relative
        "
        style={{height:'calc(100vh - 50px)'}}         
    >
        <div className="snow"/>
        <div className="w-full h-full  bg-transparent">
                <div className="w-full h-2/5 bg-slate-600  bg-transparent flex justify-center items-center">
                    <div className="w-80 h-4/5 font-extralight text-white bg-transparent flex flex-col items-center">
                        <h1 className="font-bold text-3xl">{name}</h1>
                        <span className="mt-4 font-bold text-6xl">{`${Number(main.temp).toFixed(1)}º`}</span>
                        <span className="mt-4 text-sm font-bold">{weather[0].main}</span>
                        <span className="mt-2 text-sm font-bold">{`H:${main.temp_max} L:${main.temp_min}`}</span>

                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 w-full h-3/5 bg-transparent">   
                    <div className="w-full h-full bg-red-300">
                        
                    </div>
                    <div className="w-full h-full bg-red-400">
                        
                    </div>
                    <div className="w-full h-full bg-red-500">
                        
                    </div>
                    <div className="w-full h-full bg-red-600">
                        
                    </div>
                </div>
        </div>
        

    </div>
  )
}
