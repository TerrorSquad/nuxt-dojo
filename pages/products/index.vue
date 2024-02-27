<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white p-4 shadow-md"
      >
        <NuxtLink :to="`/products/${product.id}`">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-ful h-48 object-cover"
          />
          <h2 class="mt-2 text-lg font-bold">{{ product.title }}</h2>
          <p class="text-gray-500">{{ product.price }}</p>
        </NuxtLink>
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
