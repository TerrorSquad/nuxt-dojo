<template>
  <div v-if="product">
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta
        name="description"
        :content="product.description"
      ></Meta>
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/product.d.ts"

const route = useRoute()
const id = route.params.id

// fetch the product
const uri = `https://fakestoreapi.com/products/${id}`
const { data: product } = await useFetch<Product>(uri, {
  key: `${id}`,
})

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    message: "The product you are looking for does not exist.",
    fatal: true,
  })
}
</script>
