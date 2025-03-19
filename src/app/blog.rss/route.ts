import RSS from "rss";
import { getAllBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export async function GET() { 
  const siteUrl = "https://www.khaodoes.dev";
	const posts = await getAllBlogPosts();

  const feed = new RSS({
    title: "Khao's Blog",
    description: "research stuff, random tech stuff, and others",
		feed_url: `${siteUrl}/blog.rss`,
		site_url: siteUrl,
    language: "en",
		generator: "Khao's RSS Generator"
  });

  posts.forEach((post) => {
    feed.item({
      title: post.metadata.title,
      url: `${siteUrl}/blog/${post.slug}`,
      description: post.source.slice(0, 200) + "...",
      date: post.metadata.date,
    });
  });

	return new Response(feed.xml(), {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600, stale-while-revalidate=1800",
		},
	});
}
