'use server'

import prisma from '@/lib/prisma';


export const createDataWeather = async(city:string,id:string) =>{

    try {

        if(!city || !id)return;

        const infoToSave = {
            userId:id,
            cityInfo:city
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