<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
const productStore = useProductStore();
const { addItem } = useCartStore();

const cartStore = useCartStore();
cartStore.$onAction(({ name, after }) => {
  if (name !== "addItem") return;
  after((count) => alert(`You've added ${count} items to the cart`));
});
cartStore.$subscribe((mutation, state) => {
  localStorage.setItem("cartState", JSON.stringify(state));
});
const savedCart = localStorage.getItem("cartState");
if (savedCart) {
  cartStore.$state = JSON.parse(savedCart);
}

productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="flex-wrap gap-5 sm:flex lg:flex-nowrap">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
        @add-to-cart="addItem(product.id, $event)"
      />
    </ul>
  </div>
</template>
