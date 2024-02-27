// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
    },
  },
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCY_API_KEY,
  },
})
