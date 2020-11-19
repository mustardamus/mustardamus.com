module.exports = {
  content: ["./src/**/*.vue", "./src/**/*.html", "./src/**/*.md"],
  safelist: [
    "body",
    "html",
    "img",
    "a",
    "g-image",
    "g-image--lazy",
    "g-image--loaded",
  ],
  extractors: [
    {
      extractor: (content) => content.match(/[A-z0-9-:\\/]+/g),
      extensions: ["vue", "html", "md"],
    },
  ],
};
