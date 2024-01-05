import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

type State = {
  title: string
  date: string
  theme: string
}

type Action = {
  updateTitle: (title: State['title']) => void
  updateDate: (date: State['date']) => void
  updateTheme: (theme: State['theme']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useModalDataStore = create<State & Action>((set) => ({
    title: '',
    date: '',
    theme:'',
    updateTitle: (title) => set(() => ({ title: title })),
    updateDate: (date) => set(() => ({ date: date })),
    updateTheme: (theme) => set(() => ({ theme: theme })),
}))