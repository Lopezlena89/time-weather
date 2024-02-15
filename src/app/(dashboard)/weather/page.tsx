

import { Suspense } from "react";
import { SideWeather } from "@/components/ui/weather/SideWeather";
import { getDataWeather } from "@/utils/weatherData";
import { getAllDataWeather } from "@/actions/weatherUser/get-alldata";
import { auth } from "@/auth.config";
import { createDataWeather } from "@/actions/weatherUser/create-date";
import { cookies } from "next/headers";
import { deleteDataWeather } from "@/actions/weatherUser/delete-data";

export default async function Page({
 
  searchParams
}:{
  searchParams?:{
    query?:string,
    add?:string
  }
}) {
  //Get cookie add  
  const cookieStore = cookies()
  const add = cookieStore.get('add') || undefined
  const remove = cookieStore.get('remove') || undefined
  //Params country
  const query = searchParams?.query||'mexico';
  const session = await auth();
  //Get data user country
  const cityName  = await getDataWeather(query); 
  
  if(add?.value === 'true')  await createDataWeather(cityName!,session!.user.id )
  
  if(remove?.value) await deleteDataWeather(remove.value)
 

  const weatherInfo = await getAllDataWeather(session?.user.id);
 
  
    return (
      <>
         <div 
            className={`w-full 
            rounded-lg shadow overflow-hidden relative  
            ${cityName?.icon === '01n'  ? 'bg-violet-200':''  }
            ${cityName?.desc === 'nubes' || cityName?.desc === 'algo de nubes' || cityName?.desc === 'muy nuboso' ||cityName?.desc === 'niebla'   ? 'bg-indigo-200':''  }
            ${cityName?.desc === 'lluvia ligera' || cityName?.desc === 'nubes dispersas' || cityName?.desc === 'lluvia moderada' ?'bg-gray-200':''}
            ${cityName?.desc === 'nieve' || cityName?.desc === 'nevada ligera' ||cityName?.icon === '01d' ?'  bg-sky-200':''}
            `}
            style={{height:'calc(100vh - 40px)'}}         
        >
          <Suspense  fallback={<p>Cargando...</p>}>
             <SideWeather cityName={cityName} weatherInfo={weatherInfo?.weatherData}  />

          </Suspense>  
        </div>
      </>
    );
  }
 
  
  