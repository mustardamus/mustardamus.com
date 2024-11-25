// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"

process.env.ASTRO_TELEMETRY_DISABLED = "1"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // `assets/css/main.css` is imported in the layout, handles "unstyled flash"
    }),
    icon({
      include: {
        solar: [
          "home-bold-duotone",
          "book-2-bold-duotone",
          "hamburger-menu-line-duotone",
          "sun-2-line-duotone",
          "moon-bold-duotone",
          "earth-bold-duotone",
        ],
      },
    }),
  ],
})
