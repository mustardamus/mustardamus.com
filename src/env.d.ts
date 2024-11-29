/// <reference path="../.astro/types.d.ts" />

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
