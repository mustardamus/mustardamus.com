// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

process.env.ASTRO_TELEMETRY_DISABLED = "1"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // `assets/css/main.css` is imported in the layout, handles "unstyled flash"
    }),
  ],
})
