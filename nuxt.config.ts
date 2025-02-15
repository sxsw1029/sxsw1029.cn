// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/content", "@nuxtjs/color-mode", "@unocss/nuxt"],
  devtools: { enabled: true },

  css: ["@unocss/reset/tailwind.css"],

  compatibilityDate: "2024-11-01",

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
        },
      },
    },
  },

  postcss: {
    plugins: {
      "postcss-preset-env": {},
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  unocss: {
    nuxtLayers: true,
  },

  colorMode: {
    classSuffix: "",
  },
});
