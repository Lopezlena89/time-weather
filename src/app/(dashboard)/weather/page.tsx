

import { SideWeather } from "@/components/ui/weather/SideWeather";
import { getDataWeather } from "@/utils/weatherData";
import { Suspense } from "react";


export default async function Page({
  searchParams
}:{
  searchParams?:{
    query?:string
  }
}) {
  const query = searchParams?.query||'mexico';

  const cityName  = await getDataWeather(query);  
  

    return (
      <>
        
         <div 
            className='snow_wrap w-full  p-5 border border-solid
            rounded-lg shadow overflow-hidden flex flex-col
            bg-white
            relative '
            style={{height:'calc(100vh - 50px)'}}         
        >
          <Suspense  fallback={<p>Cargando...</p>}>
             <SideWeather cityName={cityName}  />

          </Suspense>
          
        </div>
        
        
      </>
    );
  }
 
  
  