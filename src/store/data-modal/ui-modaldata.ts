import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  reminder: {
    title: string;
    date: string;
    theme: string;
  };
  // Methods
  setReminder: (reminder: State["reminder"]) => void;
}

export const useReminderStore = create<State>()(
  persist(
    (set, get) => ({
      reminder: {
        title: "",
        date: "",
        theme: "",
      },

      setReminder: (reminder) => {
        set({ reminder });
      },
    }),
    {
      name: "reminder-storage",
    }
  )
);
