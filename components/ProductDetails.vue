<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img
          class="mx-auto my-7"
          :src="product.image"
          :alt="product.title"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl font-bold">{{ product.title }}</h2>
        <p class="my-7 text-xl">Price - ${{ product.price }}</p>
        <h3 class="mb-4 border-b-2 pb-2 font-bold">Product description</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/product.d.ts"
const { product } = defineProps<{
  product: Product
}>()
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
