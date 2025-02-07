// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cssRemoveUnusedVars from "./lib/vite-css-remove-unused-vars.js";

// https://astro.build/config
export default defineConfig({
  site: "https://mustardamus.com",
  vite: {
    plugins: [tailwindcss(), cssRemoveUnusedVars()],
  },
});
