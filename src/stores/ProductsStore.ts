import { defineStore, acceptHMRUpdate } from "pinia";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
