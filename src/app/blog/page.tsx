import { Navbar } from "@/components/navbar"
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link"

export default async function Blog() {
  const blogPosts = await getAllBlogPosts();
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pb-12">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">blog</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            my thoughts and takes on new software, AI models, or things about my projects.
          </p>
        </section>

        <section>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-800 pb-8 last:border-b-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="text-2xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors mb-2">
                    {post.metadata.title}
                  </h2>
                  <time className="text-sm text-gray-500 mb-3 block">
                    {new Date(post.metadata.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <p className="text-gray-300 leading-relaxed">{post.metadata.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-16 space-y-4">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            ← back to home
          </Link>
          <p>© {new Date(Date.now()).getFullYear()} Khao</p>
        </footer>
      </main>
    </div>
  )
}
