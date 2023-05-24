import { defineStore } from "pinia";
import type { CartItem } from "@/types";
export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [] as CartItem[],
    };
  },
  getters: {
    count: (state) =>
      state.items.reduce((prev, current) => {
        return current.count + prev;
      }, 0),
    isEmpty(): boolean {
      return this.count === 0;
    },
  },
  actions: {
    addItem(itemId: string, count: number) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        item.count += count;
      } else {
        this.items.push({ id: itemId, count });
      }
    },
  },
});
