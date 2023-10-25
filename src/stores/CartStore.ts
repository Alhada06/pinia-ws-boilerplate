import type { CartItem } from "@/types";
import { defineStore, acceptHMRUpdate } from "pinia";
// import cartItems from "@/data/cart.json";
export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [] as CartItem[],
    };
  },
  getters: {
    count: (state) => {
      return state.items.reduce((x, item) => x + item.count, 0);
    },
    isEmpty(): boolean {
      return this.count === 0;
    },
  },
  actions: {
    addItem(itemId: string, count: number) {
      if (!count) return;
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        item.count += count;
      } else {
        this.items.push({ id: itemId, count });
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
