<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/currency/GBP")
</script>
<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
