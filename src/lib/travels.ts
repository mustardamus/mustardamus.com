export function getPictures(): Picture[] {
  // Can't use string literals for `import.meta.glob`,
  // so receive all images and filter by path
  // https://vite.dev/guide/features#glob-import
  const imagesObj = import.meta.glob<{ default: ImageMetadata }>(
    "../assets/travels/**/*",
  )

  return Object.keys(imagesObj).map((path) => {
    const pathParts = path.split("/")

    return {
      trip: pathParts[pathParts.length - 3],
      region: pathParts[pathParts.length - 2],
      filename: pathParts[pathParts.length - 1],
      import: imagesObj[path],
    }
  })
}

export function getTripPictures(trip: string): Picture[] {
  return getPictures().filter((picture) => picture.trip === trip)
}

function capitalize(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export function getRegionTitle(region: string): string {
  let title = capitalize(region)
  const parts = region.split("-")

  if (parts.length) {
    // it's formated as country-city (digital-nomad trip)
    const city = capitalize(`${parts.pop()}`)
    const country = parts.map((part) => capitalize(part)).join(" ")
    title = `${city} (${country})`
  }

  return title
}

export function getTripRegions(trip: string): Region[] {
  const pictures = getTripPictures(trip)
  const regionsAll = pictures.map((picture) => picture.region)
  const regionsUnique = [...new Set(regionsAll)]

  return regionsUnique.map((region) => ({
    name: region,
    title: getRegionTitle(region),
    pictures: pictures.filter((picture) => picture.region === region),
  }))
}

export function getTripRegionPictures(trip: string, region: string): Picture[] {
  return getTripPictures(trip).filter((picture) => picture.region === region)
}

export function getTripPrevNextPictures(trip: string, filename: string) {
  const pictures = getTripPictures(trip)
  const currentIndex = pictures.findIndex(
    (picture) => picture.filename === filename,
  )
  let prev, next

  if (currentIndex === 0) {
    prev = pictures[pictures.length - 1]
  } else {
    prev = pictures[currentIndex - 1]
  }

  if (currentIndex + 1 === pictures.length) {
    next = pictures[0]
  } else {
    next = pictures[currentIndex + 1]
  }

  return { prev, next }
}
