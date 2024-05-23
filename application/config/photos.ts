import type { PhotoItem } from "@kapok/layout";

function removePrefix(url: string) {
  return url.replace(/^\/application\/public/, '')
}

const photos: PhotoItem[] = [
  {
    url: "/application/public/images/photos/keong-saik-rd-2024-04-22.webp",
    title: "",
    date: "2024/04/22",
    location: "Keong Saik Rd.",
  },
  {
    url: "/application/public/images/photos/s.e.a.-aquarium-2024-04-21.webp",
    title: "jellyfish 🪼",
    date: "2024/04/21",
    location: "S.E.A. Aquarium",
  },
  {
    url: "/application/public/images/photos/waitan-2023-07-21.webp",
    title: "",
    date: "2023/07/21",
    location: "外滩",
  },
].map((item) => ({...item, url: removePrefix(item.url)}));

export { photos };
