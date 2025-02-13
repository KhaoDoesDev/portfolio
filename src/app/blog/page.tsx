import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "My research and takes on new software, AI models, and more or things about my projects.",
};

export default async function Blog() {
	const blogPosts = await getAllBlogPosts();
  return <main className="flex flex-col min-h-[100dvh]">
		<section id="title" className="mb-16">
			<h1 className="text-6xl font-bold">My Blog</h1>
			<p className="text-pretty text-xl text-gray-400 mt-2">
				My research and takes on new software, AI models, and more or things
				about my projects.
			</p>
		</section>

		<section id="posts" className="space-y-4 mb-8">
			{blogPosts.map((post) => (
				<Link
					key={post.slug}
					href={`/blog/${post.slug}`}
					className="block rounded-xl p-4 border border-gray-800 hover:border-gray-600 transition-colors"
				>
					<div className="flex justify-between items-start">
						<time className="text-sm text-gray-400">
							{post.metadata.date}
						</time>
						<span className="text-sm text-gray-400">
							{post.readTime}
						</span>
					</div>
					<h2 className="text-xl font-semibold">{post.metadata.title}</h2>
					<p className="text-sm text-gray-300 line-clamp-2 w-full">
						{post.metadata.description}
					</p>
				</Link>
			))}
		</section>
  </main>;
}
