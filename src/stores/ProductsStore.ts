import { defineStore, acceptHMRUpdate } from "pinia";
// import products from "@/data/products.json";
import type { Product } from "@/types";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  getters: {
    productById: (state) => {
      return (productId: string) =>
        state.products.find((product) => product.id === productId);
    },
  },
  actions: {
    async fill() {
      const res = await fetch("/products.json");
      this.products = await res.json();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
