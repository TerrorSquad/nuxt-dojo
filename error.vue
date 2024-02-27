<template>
  <div class="card mx-auto mt-7 max-w-sm text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button
      class="btn my-7"
      @click="handleClearError"
    >
      Go home...
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
})

import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()

const handleClearError = () => {
  clearError({
    redirect: "/",
  })
}
</script>

<style scoped></style>
