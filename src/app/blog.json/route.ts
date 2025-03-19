import { getAllBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export async function GET() { 
  const siteUrl = "https://www.khaodoes.dev";
  const posts = await getAllBlogPosts();

  const jsonFeed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Khao's Blog",
    home_page_url: siteUrl,
    feed_url: `${siteUrl}/blog.json`,
    description: "Research stuff, random tech stuff, and others",
    icon: `${siteUrl}/favicon.ico`,
    author: {
      name: "Khao",
      url: siteUrl,
    },
    items: posts.map((post) => ({
      id: `${siteUrl}/blog/${post.slug}`,
      url: `${siteUrl}/blog/${post.slug}`,
      title: post.metadata.title,
      content_text: post.source,
      date_published: new Date(post.metadata.date).toISOString(),
    })),
  };

	return new Response(JSON.stringify(jsonFeed, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=1800",
    },
  });
}
