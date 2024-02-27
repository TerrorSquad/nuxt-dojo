<template>
  <div class="card text-center">
    <img
      :alt="product.title"
      :src="product.image"
      class="thumb"
    />
    <h2 class="m-4 truncate text-lg font-bold">{{ product.title }}</h2>
    <p class="text-gray-500">{{ product.price }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View details</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/product.d.ts"
const { product } = defineProps<{
  product: Product
}>()
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
