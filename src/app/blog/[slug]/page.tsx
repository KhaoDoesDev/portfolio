import { Navbar } from "@/components/navbar";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-black font-mono text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 pb-12">
        <header className="mb-12">
          <Link
            href="/blog"
            className="mb-4 block text-sm text-purple-400 transition-colors hover:text-purple-300"
          >
            ← back to blog
          </Link>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {post.metadata.title}
          </h1>
          <time className="text-gray-500">
            {new Date(post.metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-sm text-gray-500 ml-2">
            ({post.readTime})
          </span>
        </header>

        {/* Blog Content */}
        <article
          className="prose prose-purple prose-invert max-w-none space-y-6 leading-relaxed text-gray-300"
          dangerouslySetInnerHTML={{
            __html: post.source
          }}
        />

        <footer className="text-center text-gray-500 text-sm mt-16 space-y-4">
          <Link href="/blog" className="hover:text-gray-400 transition-colors">
            ← back to blogs
          </Link>
          <p>© {new Date(Date.now()).getFullYear()} Khao</p>
        </footer>
      </main>
    </div>
  );
}
