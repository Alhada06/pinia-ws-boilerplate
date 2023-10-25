<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import { useProductsStore } from "@/stores/ProductsStore";
import { useCartStore } from "@/stores/CartStore";
import { storeToRefs } from "pinia";
 const productsStore=useProductsStore();
const { products } = storeToRefs(productsStore);
const { fill } = productsStore;
const { addItem } = useCartStore();

// fill().then((loading.value = false));

setTimeout(() => {
  fill();
}, 500);
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul v-if="products.length" class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="addItem(product.id, $event)"
      />
    </ul>
    <div
      v-else
      class="text-green-600 text-7xl justify-center align-middle text-center"
    >
      ...
    </div>
  </div>
</template>
