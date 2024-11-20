import { getCollection } from "astro:content"

export async function getTags() {
  const posts = await getCollection("posts")
  const tagsAll = posts.map(({ data }) => data.tags).flat()
  const tagsUnique = [...new Set(tagsAll)]
  const tagsSorted = tagsUnique.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0
  })
  const tagsExtended = tagsSorted.map((tag) => ({
    name: tag,
    posts: posts.filter(({ data }) => data.tags.includes(tag)),
  }))

  return tagsExtended
}
