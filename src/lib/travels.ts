interface Picture {
  trip: string
  region: string
  filename: string
  import: () => Promise<{ default: ImageMetadata }>
}

interface Region {
  name: string
  pictures: Picture[]
}

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

export function getTripRegions(trip: string): Region[] {
  const pictures = getTripPictures(trip)
  const regionsAll = pictures.map((picture) => picture.region)
  const regionsUnique = [...new Set(regionsAll)]

  return regionsUnique.map((region) => ({
    name: region,
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
