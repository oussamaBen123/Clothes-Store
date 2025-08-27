import { create } from "zustand";

export const useStore = create((set,get) => ({
  cart: [],

  addProduct: (product) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingIndex !== -1) {

         const updatedCart = [...state.cart];
        updatedCart[existingIndex].qty += product.qty;
        return { cart: updatedCart };
      }

      return { cart: [...state.cart, product] };
    }),


    removeProduct: (id, size) =>
    set((state) => ({
      cart: state.cart.filter((item) => !(item.id === id && item.size === size)),
    })),


    updateQty: (id, size, qty) =>
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === id && item.size === size) {
          return { ...item, qty: qty}; 
        }
        return item;
      });
      return { cart: updatedCart };
    }),
 
}));
