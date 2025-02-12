import type { ImageMetadata } from "astro";

interface Link {
  title: string;
  href: string;
  icon: string;
}

interface Photo {
  path: string;
  name: string;
  import: () => Promise<{ default: ImageMetadata }>;
}

interface Album {
  name: string;
  subName: string | undefined;
  photos: Photo[];
}
