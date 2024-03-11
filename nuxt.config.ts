// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-swiper",
    "@nuxtjs/supabase",
    "@formkit/nuxt",
    "@pinia/nuxt"
  ],
  supabase: {
    redirect: false
  }
})