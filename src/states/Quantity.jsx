// store/cartStore.js
import { create } from "zustand";

export const useCartStore = create((set) => ({
  quantity: 0,
  setQuantity: (value) => set({ quantity: value }),
  increaseQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decreaseQuantity: () =>
    set((state) => ({ quantity: Math.max(0, state.quantity - 1) })),
}));

