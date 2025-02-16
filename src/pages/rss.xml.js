import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  const items = posts.map((post) => ({
    link: `/posts/${post.id}`,
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
  }));

  return rss({
    title: "Mustardamus",
    description: "Blog Posts RSS feed of mustardamus.com/posts",
    site: context.site,
    customData: "<language>en-us</language>",
    items,
  });
}
