

import { Suspense } from "react";
import { SideWeather } from "@/components/ui/weather/SideWeather";
import { getDataWeather } from "@/utils/weatherData";
import { getAllDataWeather } from "@/actions/weatherUser/get-alldata";
import { auth } from "@/auth.config";

export default async function Page({
  searchParams
}:{
  searchParams?:{
    query?:string
  }
}) {
  const query = searchParams?.query||'mexico';
  const session = await auth();
  const cityName  = await getDataWeather(query); 
  const weatherInfo = await getAllDataWeather(session!.user.id);

  
    return (
      <>
         <div 
            className={`w-full 
            rounded-lg shadow overflow-hidden relative  
           
            ${cityName?.icon === '01n'  ? 'bg-violet-200':''  }
            ${cityName?.desc === 'nubes' || cityName?.desc === 'algo de nubes' || cityName?.desc === 'muy nuboso'  ? 'bg-indigo-200':''  }
            ${cityName?.desc === 'lluvia ligera' || cityName?.desc === 'nubes dispersas' || cityName?.desc === 'lluvia moderada' ?'bg-gray-200':''}
            ${cityName?.desc === 'nieve' || cityName?.desc === 'nevada ligera' ||cityName?.icon === '01d' ?'  bg-sky-200':''}
            `}
            style={{height:'calc(100vh - 40px)'}}         
        >
          <Suspense  fallback={<p>Cargando...</p>}>
             <SideWeather cityName={cityName} weatherInfo={weatherInfo}  />

          </Suspense>  
        </div>
      </>
    );
  }
 
  
  