import { getAllBlogPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts()

  const blogs = posts
    .map((post) => ({
      url: `https://www.khaodoes.dev/blog/${post.slug}`,
      lastModified: post.metadata.date
        ? new Date(post.metadata.date).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
    }))

  const routes = [''].map(
    (route) => ({
      url: `https://www.khaodoes.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  )

  return [...routes, ...blogs]
}