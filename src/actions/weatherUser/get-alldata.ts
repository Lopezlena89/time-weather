'use server'

import prisma from '@/lib/prisma';


export const getAllDataWeather = async(id:string|undefined) =>{

    try {
        let weatherData;
        if(id){
            weatherData = await prisma.weatherData.findMany({
                where: { userId:id }
              });

        }
        console.log(weatherData)
        if(!weatherData)return;
          
        return{
            weatherData
        }
    } catch (error) {
        console.log(error);
        return ;
    }


}