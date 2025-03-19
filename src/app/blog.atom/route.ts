import { getAllBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export async function GET() {
  const siteUrl = "https://www.khaodoes.dev";
  const posts = await getAllBlogPosts();

  const atomFeed = `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Khao's Blog</title>
    <link href="${siteUrl}/blog.atom" rel="self"/>
    <link href="${siteUrl}"/>
    <updated>${new Date().toISOString()}</updated>
    <id>${siteUrl}/</id>
    <author>
      <name>Khao</name>
    </author>
    ${posts
      .map(
        (post) => `
      <entry>
        <title>${post.metadata.title}</title>
        <link href="${siteUrl}/blog/${post.slug}"/>
        <id>${siteUrl}/blog/${post.slug}</id>
        <updated>${new Date(post.metadata.date).toISOString()}</updated>
        <summary>${post.source.slice(0, 200)}...</summary>
      </entry>
    `
      )
      .join("\n")}
  </feed>`;

  return new Response(atomFeed, {
    headers: {
      "Content-Type": "application/atom+xml",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=1800",
    },
  });
}
