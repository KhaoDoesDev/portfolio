import { getAllBlogPosts } from '@/lib/blog'
import { type Metadata } from 'next'

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async (
  props: {
    params: Promise<{
      slug: string
    }>
  }
): Promise<Metadata> => {
  const params = await props.params;
  const post = (await getAllBlogPosts()).find((p) => p?.slug === params.slug)
  return {
    title: post?.metadata.title,
    description: post?.metadata.description,
    alternates: {
      canonical: `https://www.khaodoes.dev/blog/${params.slug}`,
    },
  }
}

export default async function PostLayout({ children }: {
  children: React.ReactNode
}) {

  return (children)
}