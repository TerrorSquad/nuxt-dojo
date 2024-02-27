<template>
  <div>Product details for product ID: {{ id }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "products",
})

const route = useRoute()
const id = route.params.id
</script>
