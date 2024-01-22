

import { Suspense } from "react";
import { SideWeather } from "@/components/ui/weather/SideWeather";
import { getDataWeather } from "@/utils/weatherData";


export default async function Page({
  searchParams
}:{
  searchParams?:{
    query?:string
  }
}) {
  const query = searchParams?.query||'mexico';

  const cityName  = await getDataWeather(query);  

  console.log({cityName});
    return (
      <>
         <div 
            className={`w-full  p-5 border border-solid
            rounded-lg shadow overflow-hidden flex flex-col relative 
            ${cityName?.desc === 'lluvia ligera' || cityName?.desc === 'nubes dispersas' || cityName?.desc === 'lluvia moderada' ?'bg-gradient-to-b from-slate-400  to-sky-700':''}
            ${cityName?.desc === 'nubes' || cityName?.desc === 'algo de nubes' || cityName?.desc === 'muy nuboso'  || cityName?.desc === 'bruma'?'bg-gradient-to-b from-slate-400  to-gray-700':''}
            ${cityName?.desc === 'cielo claro' ?'bg-gradient-to-b from-sky-200  to-sky-700':''}
            ${cityName?.desc === 'nieve' || cityName?.desc === 'nevada ligera' ?'bg-gradient-to-b from-sky-100  to-sky-500':''}
            `}
            style={{height:'calc(100vh - 50px)'}}         
        >
          <Suspense  fallback={<p>Cargando...</p>}>
             <SideWeather cityName={cityName}  />

          </Suspense>  
        </div>
      </>
    );
  }
 
  
  