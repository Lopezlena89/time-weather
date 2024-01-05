'use server'

export const getWeatherCountry = async(country:string)=>{
    try {
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.trim()}&appid=fd422b1cdb755d8155abcd648cc4824a&units=metric`);
        const data = await getData.json();
        return data;
    } catch (error) {
        console.log('2')
        throw new Error('Ocurrio un error')
       
        
    }
}