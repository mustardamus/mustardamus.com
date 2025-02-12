import type { ImageMetadata } from "astro";
import type { Photo, SubAlbum, Album } from "../env.d.ts";

export function getAlbumPhotos(album: string): Photo[] {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/data/photos/**/*",
  );

  return Object.keys(images)
    .filter((p) => p.includes(`/${album}/`))
    .map((imagePath) => {
      const pathSplit = imagePath.split("/");
      return {
        album,
        subAlbum: pathSplit.at(-2) || "",
        path: imagePath,
        name: pathSplit.at(-1) || "",
        import: images[imagePath],
      };
    });
}

export function getAlbumSorted(album: string) {
  const photos = getAlbumPhotos(album);
  const subAlbums = photos.reduce((subAlbums: SubAlbum[], photo: Photo) => {
    const subAlbum = photo.subAlbum;
    const subAlbumExists = subAlbums.find((s) => s.name === subAlbum);

    if (!subAlbumExists) {
      subAlbums.push({
        name: subAlbum,
        photos: photos.filter((p) => p.subAlbum === subAlbum),
      });
    }

    return subAlbums;
  }, []);

  return { name: album, subAlbums };
}
