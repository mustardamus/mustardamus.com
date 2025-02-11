// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cssRemoveUnusedVars from "./lib/vite-css-remove-unused-vars.js";
import astroIcon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mustardamus.com",
  vite: {
    plugins: [tailwindcss(), cssRemoveUnusedVars()],
  },
  integrations: [astroIcon()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "one-light",
        dark: "tokyo-night",
      },
    },
  },
});
