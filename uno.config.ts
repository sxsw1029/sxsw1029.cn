// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "Inter",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],

  safelist: ["i-ri:github-line", "i-ri:weibo-line", "i-ri:bilibili-line"],
});
