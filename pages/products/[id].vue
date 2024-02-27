<template>
  <div v-if="product">
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/product.d.ts"

definePageMeta({
  layout: "products",
})

const route = useRoute()
const id = route.params.id

// fetch the product
const uri = `https://fakestoreapi.com/products/${id}`
const { data: product } = await useFetch<Product>(uri, {
  key: `${id}`,
})
</script>
