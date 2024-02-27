<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white p-4 shadow-md"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/product.d.ts"
definePageMeta({
  layout: "products",
})
const { data: products } = await useFetch<Product[]>("https://fakestoreapi.com/products")
</script>
