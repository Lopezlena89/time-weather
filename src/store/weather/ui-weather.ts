import { create } from 'zustand'

type State = {
  city: string
 
}

type Action = {
  updateCity: (firstName: State['city']) => void
 
}

// Create your store, which includes both state and (optionally) actions
export const usePersonStore = create<State & Action>((set) => ({
  city: '',
  
  updateCity: (city) => set(() => ({ city: city })),
  
}))