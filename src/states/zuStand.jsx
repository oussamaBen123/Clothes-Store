// store/cartStore.js
import { create } from 'zustand'

export const useCart = create((set) => ({
  cart: 0,
  addProduct: () => set((state) => ({ cart: state.cart + 1 })),
  removeProduct: () => set({ cart: 0 }),
}))
