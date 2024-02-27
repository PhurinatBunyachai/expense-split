// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-lodash",
    "nuxt-icon"
  ],
  css: ['~/assets/css/main.css'],
})