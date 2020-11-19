const { join } = require("path");
const { readdirSync, existsSync, mkdirSync } = require("fs");
const jimp = require("jimp");

const widthDist = 1024;
const widthThumb = 320;
const qualityDist = 95;
const qualityThumb = 80;

const srcPath = join(__dirname, "../content/travels");
const distPath = join(__dirname, "../static/travels");
const covers = {
  Vienna: "100_1774",
  Brugge: "100_0910",
  Brussels: "100_0807",
  Turnhout: "100_1506",
  Sofia: "100_1062",
  Prague: "100_0197",
  Copenhagen: "100_1458",
  Berlin: "100_1519",
  Cologne: "100_0932",
  Ingolstadt: "100_1827",
  Leipzig: "100_0341",
  Munich: "100_3436",
  Plauen: "100_3308",
  Budapest: "100_1315",
  Genova: "100_2681",
  Milano: "100_2673",
  Pisa: "100_2798",
  Rome: "100_2844",
  Amsterdam: "100_0441",
  Rotterdam: "100_0715",
  Wroclaw: "100_3417",
  Bucharest: "100_1198",
  Belgrade: "100_1285",
  Bratislava: "100_1012",
  Ljubljana: "100_3528",
  Barcelona: "100_2964",
  Valencia: "100_2997",
  Doncaster: "100_1532",
  Leeds: "100_1569",
  Manchester: "100_1426",
};

const resizePicture = (picSrcPath, picDistPath, width, quality) => {
  return new Promise((resolve, reject) => {
    jimp.read(picSrcPath, (err, pic) => {
      if (err) {
        return reject(err);
      }

      pic
        .resize(width, jimp.AUTO)
        .quality(quality)
        .write(picDistPath, (err) => {
          if (err) {
            return reject(err);
          }

          resolve();
        });
    });
  });
};

module.exports = async function() {
  if (!existsSync(distPath)) {
    mkdirSync(distPath);
  }

  const countries = readdirSync(srcPath).map((country) => {
    const countryPath = join(srcPath, country);
    const cities = readdirSync(countryPath).map((city) => {
      const cityPath = join(srcPath, country, city);
      const prefix = `${country}-${city}`.toLowerCase();
      const pictures = readdirSync(cityPath).map((picture) => {
        const distFileName = `${prefix}-${picture}`.toLowerCase();

        return {
          src: join(country, city, picture),
          dist: distFileName,
          thumb: distFileName.replace(".jpg", "-thumb.jpg"),
        };
      });

      return {
        city,
        pictures,
        cover: `${prefix}-${covers[city]}-thumb.jpg`,
      };
    });

    return { country, cities };
  });

  for (let i = 0; i < countries.length; i++) {
    const cities = countries[i].cities;

    for (let x = 0; x < cities.length; x++) {
      const pictures = cities[x].pictures;

      for (let p = 0; p < pictures.length; p++) {
        const picture = pictures[p];
        const picDistPath = join(distPath, picture.dist);
        const picSrcPath = join(srcPath, picture.src);
        const picThumbPath = join(distPath, picture.thumb);

        if (!existsSync(picDistPath)) {
          console.log("Resize...", picSrcPath);

          await resizePicture(picSrcPath, picDistPath, widthDist, qualityDist);
          await resizePicture(
            picSrcPath,
            picThumbPath,
            widthThumb,
            qualityThumb
          );
        }
      }
    }
  }

  return {
    distPath: distPath.split("/").pop(),
    countries,
  };
};
