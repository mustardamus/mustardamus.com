const { join } = require("path");
const getTravelPictures = require("./lib/travel-pictures.js");

module.exports = function(api) {
  // TODO use gridsome g-image once dynamic inclusion works
  // https://github.com/gridsome/gridsome/issues/292
  api.loadSource(async ({ addCollection }) => {
    const travelPictures = await getTravelPictures();
    const travelCollection = addCollection("Travel");

    travelPictures.countries.forEach((country) => {
      country.cities.forEach((city) => {
        const pictures = city.pictures.map((pic) => {
          return {
            dist: "/" + join(travelPictures.distPath, pic.dist),
            thumb: "/" + join(travelPictures.distPath, pic.thumb),
          };
        });

        travelCollection.addNode({
          country: country.country,
          city: city.city,
          cover: join(travelPictures.distPath, city.cover),
          pictures,
        });
      });
    });
  });
};
