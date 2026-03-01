// uno.config.ts
import { defineConfig, presetIcons, presetWind3 } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      prefix: "i-",
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        width: "1.2em",
        height: "1.2em",
      },
      warn: true,
    }),
  ],
  content: {
    filesystem: [
      "./index.html",
      "./docs/**/*.{md,vue}",
      "./.vitepress/**/*.{md,vue}",
    ],
  },
});
