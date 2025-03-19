export async function GET() {
  const siteUrl = "https://www.khaodoes.dev";

  const opmlFeed = `<?xml version="1.0" encoding="UTF-8"?>
  <opml version="2.0">
    <head>
      <title>Khao's Blog Subscriptions</title>
    </head>
    <body>
      <outline text="RSS Feed" type="rss" xmlUrl="${siteUrl}/blog.rss"/>
      <outline text="Atom Feed" type="rss" xmlUrl="${siteUrl}/blog.atom"/>
      <outline text="JSON Feed" type="rss" xmlUrl="${siteUrl}/blog.json"/>
    </body>
  </opml>`;

  return new Response(opmlFeed, {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=1800",
    },
  });
}