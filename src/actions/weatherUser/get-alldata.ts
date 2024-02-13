'use server'

import prisma from '@/lib/prisma';


export const getAllDataWeather = async(id:string) =>{

    try {
        const weatherData = await prisma.weatherData.findMany({
            where: { userId:id }
          });

        if(!weatherData)return;

        return{
            weatherData
        }
    } catch (error) {
        console.log(error);
        return ;
    }


}