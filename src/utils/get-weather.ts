

interface Props{
    country:string
}


export const getWeatherCountry = async({country}:Props) =>{

    const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=fd422b1cdb755d8155abcd648cc4824a&units=metric`)
    const data = await getData.json();
    return{
        data
    }

}