import { create } from "zustand";

export const useToggle = create((set) => ({
  toggle: false,
  setToggle: (val) => set({ toggle: val }),
}));

