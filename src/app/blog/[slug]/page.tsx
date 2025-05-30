import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import * as DATA from "@/data";
import { Suspense } from "react";

export const revalidate = 3600; // Rebuild once a hour (in seconds) for note later

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return notFound();

  return (
		<section id="blog">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.date,
						dateModified: post.metadata.date,
						description: post.metadata.description,
						image: post.metadata.image ?? `${DATA.siteURL}/blog/${post.slug}/opengraph-image`,
						url: `${DATA.siteURL}/blog/${post.slug}`,
						author: {
							"@type": "Person",
							name: DATA.name,
						},
					}),
				}}
			/>
			<h1 className="text-2xl font-semibold tracking-tighter">{post.metadata.title}</h1>
			<div className="text-neutral-600 dark:text-neutral-400 flex gap-2 mt-2 mb-8 items-center">
				<Suspense fallback={<p className="h-5" />}>
					<p>{formatDate(new Date(post.metadata.date))}</p>
				</Suspense>
				<span className="text-xs">{post.readTime}</span>
			</div>

			<article
				className="prose dark:prose-invert font-sans prose-p:leading-[2]"
				dangerouslySetInnerHTML={{ __html: post.source }}
			/>
		</section>
  );
}
