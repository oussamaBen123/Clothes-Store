import { create } from "zustand";

export const useSizes = create((set) => ({
  selectedSize: null, // valeur initiale
  setSelectedSize: (size) => set({ selectedSize: size }), // action pour modifier
}));

