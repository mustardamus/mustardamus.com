import { getCollection } from "astro:content";
import type { ImageMetadata } from "astro";
import type { GetStaticPaths } from "astro";
import type { CollectionEntry } from "astro:content";
import type { Photo, SubAlbum, Album } from "../env.d.ts";

export function getAlbumPhotos(album: string): Photo[] {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/data/albums/**/*",
  );

  return Object.keys(images)
    .filter((p) => p.includes(".JPG")) // somehow does nt work with glob() matching
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

export function getAlbumSorted(album: string): Album {
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

export function getAlbumPhoto(album: string, name: string): Photo | undefined {
  const photos = getAlbumPhotos(album);
  return photos.find((p) => p.name === name);
}

export function getSubAlbum(
  album: string,
  subAlbum: string,
): SubAlbum | undefined {
  return getAlbumSorted(album)?.subAlbums.find((s) => s.name === subAlbum);
}

export function getPreviousPhoto(photo: Photo): Photo | undefined {
  const photos = getAlbumPhotos(photo.album) || [];
  const names = photos.map((p) => p.name);
  const index = names.indexOf(photo.name) - 1;

  return photos.at(index);
}

export function getNextPhoto(photo: Photo): Photo | undefined {
  const photos = getAlbumPhotos(photo.album) || [];
  const names = photos.map((p) => p.name);
  let index = names.indexOf(photo.name) + 1;

  if (index === photos.length) {
    index = 0;
  }

  return photos.at(index);
}

export function getAlbumsStaticPaths() {
  return (async () => {
    const photos: CollectionEntry<"albums">[] = await getCollection("albums");
    return photos.map((album) => ({ params: { album: album.data.slug } }));
  }) satisfies GetStaticPaths;
}

export function getPhotosStaticPaths() {
  return (async () => {
    const albums = await getAlbumsStaticPaths()();

    return albums.flatMap((album) => {
      return getAlbumPhotos(album.params.album).map((photo) => {
        return { params: { album: photo.album, photo: photo.name } };
      });
    });
  }) satisfies GetStaticPaths;
}
