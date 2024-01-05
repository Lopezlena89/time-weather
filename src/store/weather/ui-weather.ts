import { create } from 'zustand'

type State = {
  cityName:IWeather
}

type Action = {
  updateCityName: (cityName: State['cityName']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useCityStore = create<State & Action>((set) => ({
  cityName:{
    coord:{
      lon: 0,
      lat:0
  },
  weather:[{
      id:0,
      main: '',
      description: '',
      icon:''
  }],
  main:{
      temp:0,
      feels_like:0,
      temp_min:0,
      temp_max:0,
      pressure:0,
      humidity:0
  },
  wind:{
      speed:0,
      deg:0
  },
  sys:{
      type: 0,
      id: 0,
      country: '',
      sunrise: 0,
      sunset: 0,
  },
  timezone:0,
  name:'',
  },
  updateCityName: (cityName) => set(() => ({ cityName: cityName })),
}))