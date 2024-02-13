'use server'

// import { Feature, IWeather } from "@/interfaces/weaterInterface";


export const getDataWeather = async(place = 'mexico') =>{
    try {
        const getDataMapbox= await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${process.env.MAPBOX_KEY}&units=metric&lang=es&limit=5`);
        const data = await getDataMapbox.json();
        const lugar = data.features[0];
        // let dataPlaces:IWeather[] =[];
        // data.features.map((place:Feature) =>{
        //     const data:any = {
        //         id:place.id,
        //         nombre:place.place_name,
        //         lng:place.center[0].toFixed(2),
        //         lat: place.center[1].toFixed(2),
        //     }
        //     return dataPlaces.push(data);
        // })
        


        let id=lugar.id;
        let nombre=lugar.place_name;
        let lng=lugar.center[0].toFixed(2);
        let lat = lugar.center[1].toFixed(2);
        // const dataComplete = dataPlaces.map(async(weatherPlace) =>{
        // const getDataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_KEY}&units=metric&lang=es`);
        // const dataWeather = await getDataWeather.json();
        //     const {weather,main,wind,sys} = dataWeather;
            
            
        //     return{
        //         ...weatherPlace,
        //         desc:weather[0].description,
        //         temp:main.temp,
        //         max:main.temp_max,
        //         min:main.temp_min,
        //         pressure:main.pressure,
        //         humidity:main.humidity,
        //         wind:wind.speed,
        //         sunrise:sys.sunrise,
        //         sunset:sys.sunset,
        //         feels_like:main.feels_like,
        //     }
        // })
        // const data1 = await dataComplete[0];
        // const data2 = await dataComplete[1];
        // const data3 = await dataComplete[2];
        // const data4 = await dataComplete[3];
        // const data5 = await dataComplete[4];
        
        // return[
        //     data1,
        //     data2,
        //     data3,
        //     data4,
        //     data5]
        
        
        const getDataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_KEY}&units=metric&lang=es`);
        const dataWeather = await getDataWeather.json();
       
        const {weather,main,wind,sys} = dataWeather;
       
        return{
            
            id,
            nombre,
            lng,
            lat,
            desc:weather[0].description,
            icon:weather[0].icon,
            temp:main.temp,
            max:main.temp_max,
            min:main.temp_min,
            pressure:main.pressure,
            humidity:main.humidity,
            wind:wind.speed,
            sunrise:sys.sunrise,
            sunset:sys.sunset,
            feels_like:main.feels_like,

        }
        
        
    } catch (error) {
        console.log(error);
    }
}