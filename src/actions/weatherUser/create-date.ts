'use server'

import { IWeather } from '@/interfaces/weaterInterface';
import prisma from '@/lib/prisma';



export const createDataWeather = async(city:IWeather,id:string) =>{
  
    try {

        if(!city || !id)return;
        
        const infoToSave = {
            userId:id,
            cityName:city.nombre,
            icon:city.icon,
            desc:city.desc,
            Temp:city.temp,
            Min:city.min,
            Max:city.max
        }
        const data = await prisma.weatherData.create({
            data:infoToSave
        })
        return data;

    } catch (error) {
        console.log(error);
    return {
      ok: false,
      message: "No se pudo grabar la informacion weather",
    };
    }

}