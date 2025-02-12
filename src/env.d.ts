import type { ImageMetadata } from "astro";

interface Link {
  title: string;
  href: string;
  icon: string;
}

interface Photo {
  album: string;
  subAlbum: string;
  path: string;
  name: string;
  import: () => Promise<{ default: ImageMetadata }>;
}

interface SubAlbum {
  name: string;
  photos: Photo[];
}

interface Album {
  name: string;
  subAlbums: SubAlbum[];
}
