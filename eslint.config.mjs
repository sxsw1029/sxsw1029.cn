// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },

    typescript: true,
    vue: true,
    jsonc: true,

    unocss: true,

    formatters: {
      css: true,
      html: true,
      markdown: "prettier",
    },
  }),
);
