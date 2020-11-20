const tailwind = require("tailwindcss"); // TODO `npm i tailwindcss@latest` once gridsome runs postcss@8
const autoprefixer = require("autoprefixer"); // TODO `npm i autoprefixer@latest` once gridsome runs postcss@8
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind(), autoprefixer()];

if (process.env.NODE_ENV === "production") {
  const purgecssConfig = require("./purgecss.config.js");
  const purgecssPlugin = purgecss(purgecssConfig);

  postcssPlugins.push(purgecssPlugin);
}

module.exports = {
  siteName: "Mustardamus",
  icon: "./src/assets/images/logo.png",

  templates: {
    Travel: "/travels/:city",
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
