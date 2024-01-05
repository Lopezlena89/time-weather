
import { Weather } from "@/components";
import { getWeatherCountry } from "@/utils";

export default async function WeatherPage() {

  // const iWeather  = await getWeatherCountry({country:'Mexico'});
   
  return (
    <div >
         <Weather/>
    </div>
  );
}