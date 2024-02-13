import { IWeather } from "@/interfaces/weaterInterface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    weatherInfo: IWeather
     // Methods
    setWeatherInfo: (weatherInfo: State["weatherInfo"]) => void;
}

export const useWeatherInfoStore = create<State>()(
  persist(
    (set, get) => ({
      weatherInfo: {
        id:'',
        nombre:'',
        lng:0,
        lat:0,
        icon:'',
        desc:'',
        temp:0,
        max:0,
        min:0,
        pressure:0,
        humidity:0,
        wind:0,
        sunrise:0,
        sunset:0,
        feels_like:0
      },

      setWeatherInfo: (weatherInfo) => {
        set({ weatherInfo });
      },
    }),
    {
      name: "weatherInfo-storage",
    }
  )
);
