// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "shop nuxt3",
      meta: [
        {name: "description", content: "details"},
      ]
    }
  }
})
