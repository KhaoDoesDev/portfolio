import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { readingTime } from 'reading-time-estimator'

interface BlogPostMetadata {
  title: string;
  description: string;
  date: string;
  image?: string;
}

interface BlogPost {
	readTime: string;
  metadata: BlogPostMetadata;
  slug: string;
  source: string;
}

/**
 * Gets all MDX files from a directory
 */
function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/**
 * Converts markdown content to HTML with syntax highlighting
 */
export async function markdownToHTML(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "one-dark-pro",
      keepBackground: false,
			transformers: [
				transformerCopyButton({
					visibility: 'always',
					feedbackDuration: 3_000,
				}),
			],
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}

/**
 * Gets a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join("content", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);

  return {
		readTime: readingTime(rawContent).text,
    source: content,
    metadata: metadata as BlogPostMetadata,
    slug,
  };
}

/**
 * Gets all blog posts from a directory
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const mdxFiles = getMDXFiles(path.join(process.cwd(), "content"));

  return (await Promise.all(
    mdxFiles
			.map(async (file) => {
				const slug = path.basename(file, path.extname(file));
				const post = await getBlogPost(slug);
				return post;
			})
			.filter((post) => post !== null) as Promise<BlogPost>[]
  )).sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}
