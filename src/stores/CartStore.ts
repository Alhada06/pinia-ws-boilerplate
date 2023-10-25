import { defineStore, acceptHMRUpdate } from "pinia";
import cartItems from "@/data/cart.json";
export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: cartItems,
    };
  },
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
